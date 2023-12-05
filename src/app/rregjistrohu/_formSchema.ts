import { z } from "zod";
import { GLOBAL_CONFIG } from "../_config";

export enum SharedRegisterFormFields {
  email = 'email',
  password = 'password',
  confirm_password = 'confirm_password',
  profilePic = 'profilePic',
  telephone = 'telephone',
  whatsapp = 'whatsapp'
};

// TODO: add new business register
export enum UserRegisterFormField {
  fullName = 'fullName'
};

// TODO: maybe merge these with the publish form schema
// !So we dont have these conflict with eachother (since we are going to merge these together)
const sharedRegisterSchema = z.object({
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
  [SharedRegisterFormFields.profilePic]: z.intersection(
    z.object({
      preview: z.string().optional()
    }), z.instanceof(File)
  ).optional(),
  [SharedRegisterFormFields.telephone]: z.string()
    .min(1, { message: 'Numri i telefonit nuk mund te jete bosh' })
    .regex(GLOBAL_CONFIG.phoneNumberRegex, { message: 'Numri eshte invalid' }),
  // TODO: fix this shit
  [SharedRegisterFormFields.whatsapp]: z.string()
    .regex(GLOBAL_CONFIG.phoneNumberRegex, { message: 'Numri eshte invalid' })
    .optional()
});

export const registerUserSchema = sharedRegisterSchema.extend({
  // TODO: fix this also on general product form
  // TODO: PLEASE ITS HORRIBLE TF DID U THINK
  [UserRegisterFormField.fullName]: z.string()
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
    }, { message: 'Emri i plote eshte invalid' })
}).superRefine(({ password, confirm_password }, ctx) => {
  if (confirm_password !== password) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Password-et nuk pershtaten",
      path: [SharedRegisterFormFields.confirm_password]
    });
  };
});


export type RegisterUserSchemaType = z.infer<typeof registerUserSchema>;

export const registerUserSchemaInitialValue: RegisterUserSchemaType = {
  email: '',
  fullName: '',
  password: '',
  confirm_password: '',
  telephone: '',
  profilePic: undefined,
  whatsapp: ''
}
