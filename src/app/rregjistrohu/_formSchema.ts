import { z } from "zod";
import { GLOBAL_CONFIG } from "../_config";
import { SelectValues } from "../_shared/atoms/Select";
import { BUSINESS_TYPE } from "@prisma/client";

// TODO: this file is a fucking mess
export enum SharedRegisterFormFields {
  name = 'name',
  email = 'email',
  password = 'password',
  confirm_password = 'confirm_password',
  profile_pic = 'profilePic',
  telephone = 'telephone',
  whatsapp = 'whatsapp',
  // below are business only
  cover_photo = 'cover_photo',
  work_telephone = 'work_telephone',
  work_email = 'work_email',
  website = 'website',
  availability = 'availability', // hour range here
  location = 'location', // select here
  description = 'description',
  formStep = 'formStep',
  type = 'type'
};

export enum BusinessFormStep {
  GENERAL_INFO = 'GENERAL_INFO',
  CONTACT = 'CONTACT',
  AVAILABILITY = 'AVAILABILITY',
  PICTURES = 'PICTURES'
};

// TODO: maybe merge these with the publish form schema
// !So we dont have these conflict with eachother (since we are going to merge these together)
export const basicRegisterSchema = z.object({
  [SharedRegisterFormFields.email]: z
    .string()
    .min(1, { message: 'Email nuk mund te jete bosh' })
    .regex(GLOBAL_CONFIG.emailRegex, { message: 'Email eshte invalid' }),
  [SharedRegisterFormFields.password]:
    z.string()
      .min(1, { message: 'Passwordi nuk mund te jete bosh' })
      .regex(GLOBAL_CONFIG.passwordRegex, { message: 'Password eshte invalid' }),
  [SharedRegisterFormFields.confirm_password]: z.string()
    .min(1, { message: 'Passwordi nuk mund te jete bosh' })
    .regex(GLOBAL_CONFIG.passwordRegex, { message: 'Password eshte invalid' }),
  [SharedRegisterFormFields.profile_pic]: z.intersection(
    z.object({
      preview: z.string().optional()
    }), z.instanceof(File)
  ).optional(),
  [SharedRegisterFormFields.telephone]: z.string()
    .min(1, { message: 'Numri i telefonit nuk mund te jete bosh' })
    .regex(GLOBAL_CONFIG.phoneNumberRegex, { message: 'Numri eshte invalid' }),
  [SharedRegisterFormFields.whatsapp]: z.string()
    .regex(GLOBAL_CONFIG.phoneNumberRegex, { message: 'Numri eshte invalid' })
    .optional()
    .or(z.literal('')),
  // TODO: fix this also on general product form
  // TODO: PLEASE ITS HORRIBLE TF DID U THINK
  // TODO: split this by context, if it is a business or not
  [SharedRegisterFormFields.name]: z.string()
    .min(1, { message: 'Emri nuk mund te jete bosh.' })
    .refine(providedString => {
      if (providedString.split(' ').length < 2) {
        return false;
      };

      return true;
    }, { message: 'Ju lutem shkruani emer + mbiemer' })
    .refine(providedString => {
      const [firstName, lastName] = providedString.split(' ');

      return firstName?.length > 2 && lastName?.length > 2;
    }, { message: 'Emri i plote eshte invalid' }),
  [SharedRegisterFormFields.formStep]: z.nativeEnum(BusinessFormStep).optional(),
});

export const BUSINESS_TYPE_SELECT_OPTION: SelectValues<BUSINESS_TYPE> = {
  ONLINE_ANYWHERE: {
    element: 'Online/Kudo',
    value: BUSINESS_TYPE.ONLINE_ANYWHERE
  },
  ONLINE_PHYSICAL: {
    element: 'Online/Fizik',
    value: BUSINESS_TYPE.ONLINE_PHYSICAL
  },
  ONLINE_REGION: {
    element: 'Online/Brenda rajonit',
    value: BUSINESS_TYPE.ONLINE_REGION
  },
  PHYSICAL: {
    element: 'Fizik',
    value: BUSINESS_TYPE.PHYSICAL
  }
};

export const businessRegisterSchema = basicRegisterSchema.extend({
  [SharedRegisterFormFields.cover_photo]: z.intersection(
    z.object({
      preview: z.string().optional()
    }), z.instanceof(File)
  ).optional(),
  [SharedRegisterFormFields.website]: z.string(),
  // TODO: think about this and think of it like a cron expression check: https://9to5google.com/2020/06/04/google-maps-business-hours-more/google_maps_more_business_hours_3/
  // TODO: add search filter here
  [SharedRegisterFormFields.availability]: z.string(),
  // TODO: maybe add maps here ? 👀👀👀👀👀👀👀👀👀👀👀👀👀
  [SharedRegisterFormFields.type]: z.nativeEnum(BUSINESS_TYPE),
  // TODO: validate
  [SharedRegisterFormFields.description]: z.string(),
  [SharedRegisterFormFields.formStep]: z.nativeEnum(BusinessFormStep),
  [SharedRegisterFormFields.location]: z.string(),
  [SharedRegisterFormFields.work_telephone]: z
    .string()
    .regex(GLOBAL_CONFIG.phoneNumberRegex, { message: 'Numri eshte invalid' })
    .optional()
    .or(z.literal('')),
  [SharedRegisterFormFields.work_email]: z
    .string()
    .regex(GLOBAL_CONFIG.emailRegex, { message: 'Email eshte invalid' })
    .optional()
    .or(z.literal(''))
});

export const generateSharedRegisterSchema = (isBusinessForm: boolean):
  z.ZodEffects<typeof basicRegisterSchema | typeof businessRegisterSchema> => {
  const schemaShape = isBusinessForm ? businessRegisterSchema : basicRegisterSchema;

  return schemaShape.superRefine(({ password, confirm_password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password-et nuk pershtaten",
        path: [SharedRegisterFormFields.confirm_password]
      });
    };
  })
}

export type SharedRegisterSchemaType = z.infer<ReturnType<typeof generateSharedRegisterSchema>>;

export const registerUserSchemaInitialValue: SharedRegisterSchemaType = {
  [SharedRegisterFormFields.name]: '',
  [SharedRegisterFormFields.email]: '',
  [SharedRegisterFormFields.password]: '',
  [SharedRegisterFormFields.confirm_password]: '',
  [SharedRegisterFormFields.telephone]: '',
  [SharedRegisterFormFields.profile_pic]: undefined,
  [SharedRegisterFormFields.whatsapp]: '',
  [SharedRegisterFormFields.cover_photo]: undefined,
  [SharedRegisterFormFields.website]: '',
  [SharedRegisterFormFields.availability]: '',
  [SharedRegisterFormFields.type]: BUSINESS_TYPE.ONLINE_ANYWHERE,
  [SharedRegisterFormFields.description]: '',
  [SharedRegisterFormFields.formStep]: BusinessFormStep.GENERAL_INFO,
  [SharedRegisterFormFields.location]: ''
}
