import {
  PRODUCT_ADVERT_INDEX,
  PRODUCT_CATEGORIES,
  PRODUCT_CONDITION,
  PRODUCT_CURRENCY,
  PRODUCT_PREFERRED_COMMUNICATION,
  PRODUCT_STATE,
  PRODUCT_SUBCATEGORIES
} from "@prisma/client";
import { z } from "zod";
import { GLOBAL_CONFIG, PRODUCT_FORM_CONFIG } from "opal/app/_config";
import { PRODUCT_DETAIL_FIELD } from "opal/app/_shared/productTypes";
import { PRODUCT_SUBCATEGORIES_MAP } from "./_subcategoriesMetaData";
import { formatMoney } from "opal/app/_shared/formatters";

export enum PRODUCT_FORM_STEPS {
  GENERAL_FORM,
  DETAILS_FORM,
  VERIFY_AND_PUBLISH,
  SHARE
};

export enum NewProductFormFields {
  title = 'title',
  debatablePrice = 'debatablePrice',
  description = 'description',
  images = 'images',
  location = 'location',
  price = 'price',
  advertIndex = 'advertIndex',
  category = 'category',
  subCategory = 'subCategory',
  telephone = 'telephone',
  whatsapp = 'whatsapp',
  email = 'email',
  currency = 'currency',
  fullName = 'fullName',
  preferredCommunication = 'preferredCommunication',
  deliveryAtYourPlace = 'deliveryAtYourPlace',
  formStep = 'formStep',
  hasNextStep = 'hasNextStep',
  details = 'details',
  state = 'state',
  condition = 'condition',
  detailsId = 'detailsId'
}

export const newProductSchema = z.object({
  [NewProductFormFields.title]: z.string()
    .min(1, { message: 'Titulli nuk mund te jete bosh.' })
    .max(PRODUCT_FORM_CONFIG.titleMaxLength, { message: `Titulli nuk lejohet >${PRODUCT_FORM_CONFIG.titleMaxLength} karaktere.` }),
  [NewProductFormFields.debatablePrice]: z.boolean(),
  [NewProductFormFields.description]: z.string()
    .min(1, { message: 'Pershkrimi nuk mund te jete bosh.' })
    .max(PRODUCT_FORM_CONFIG.descMaxLength, { message: `Pershkrimi duhet te jete max ${PRODUCT_FORM_CONFIG.descMaxLength} karaktere.` }),
  [NewProductFormFields.images]: z.array(
    z.intersection(z.object({
      preview: z.string().optional()
    }), z.instanceof(File))
  ),
  [NewProductFormFields.location]: z.string()
    .min(1, { message: 'Vendndodhja nuk mund te jete bosh.' }),
  [NewProductFormFields.price]: z.number()
    .min(0, { message: 'Cmimi nuk mund te jete me i vogel se 0' })
    .max(PRODUCT_FORM_CONFIG.priceMax, {
      message: `Maksimumi i lejuar eshte ${formatMoney(PRODUCT_FORM_CONFIG.priceMax)}`
    })
    .or(z.string())
    .refine(price => {
      if (typeof price === 'string' && !price.length) {
        return false;
      };

      return true;
    }, { message: 'Cmimi nuk mund te jete bosh' }),
  [NewProductFormFields.advertIndex]: z.nativeEnum(PRODUCT_ADVERT_INDEX),
  [NewProductFormFields.category]: z.nativeEnum(PRODUCT_CATEGORIES),
  [NewProductFormFields.subCategory]: z.nativeEnum(PRODUCT_SUBCATEGORIES),
  [NewProductFormFields.telephone]: z.string()
    .min(1, { message: 'Numri i telefonit nuk mund te jete bosh' })
    .regex(GLOBAL_CONFIG.phoneNumberRegex, { message: 'Numri eshte invalid' }),
  // TODO: fix this shit
  [NewProductFormFields.whatsapp]: z.string()
    .regex(GLOBAL_CONFIG.phoneNumberRegex, { message: 'Numri eshte invalid' })
    .optional(),
  [NewProductFormFields.email]: z.string()
    .min(1, { message: 'Email nuk mund te jete bosh' })
    .regex(GLOBAL_CONFIG.emailRegex, { message: 'Email eshte invalid' }),
  [NewProductFormFields.currency]: z.nativeEnum(PRODUCT_CURRENCY),
  [NewProductFormFields.fullName]: z.string()
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
  [NewProductFormFields.preferredCommunication]: z.nativeEnum(PRODUCT_PREFERRED_COMMUNICATION),
  [NewProductFormFields.deliveryAtYourPlace]: z.boolean(),
  [NewProductFormFields.formStep]: z.number(),
  [NewProductFormFields.hasNextStep]: z.boolean(),
  [NewProductFormFields.details]: z.preprocess(() => {
    // Skip validation on general product form
    // TODO: This works good but it might be a better solution out there
    return {};
  }, z.record(
    z.nativeEnum(PRODUCT_DETAIL_FIELD),
    z.record(
      z.string(),
      z.string()
        .or(z.boolean())
        .or(z.number())
        .superRefine((data, context) => {
          const dataType = typeof data;
          const allowedTypes = ['string', 'number', 'boolean'];

          if (!allowedTypes.includes(dataType)) {
            context.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Fusha eshte e detyrueshme.',
              path: []
            });
          };

          if (dataType === 'string') {
            if (!data.toString().length) {
              context.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Fusha eshte e detyrueshme.',
                path: []
              });
            }
          };
        })
    )
  )),
  [NewProductFormFields.state]: z.nativeEnum(PRODUCT_STATE),
  [NewProductFormFields.condition]: z.nativeEnum(PRODUCT_CONDITION),
  [NewProductFormFields.detailsId]: z.nativeEnum(PRODUCT_SUBCATEGORIES)
});

export type NewProductSchemaType = z.infer<typeof newProductSchema>;

export const newProductSchemaInitialValues: NewProductSchemaType = {
  advertIndex: PRODUCT_ADVERT_INDEX.REGULAR,
  category: PRODUCT_CATEGORIES.APARTMENT,
  subCategory: PRODUCT_SUBCATEGORIES.APARTMENT__APARTMENT,
  currency: PRODUCT_CURRENCY.ALL,
  debatablePrice: false,
  description: '',
  email: '',
  fullName: '',
  images: [],
  location: '',
  preferredCommunication: PRODUCT_PREFERRED_COMMUNICATION.TEL,
  price: '',
  telephone: '',
  title: '',
  whatsapp: '',
  deliveryAtYourPlace: false,
  [NewProductFormFields.formStep]: PRODUCT_FORM_STEPS.GENERAL_FORM,
  [NewProductFormFields.hasNextStep]: true,
  details: PRODUCT_SUBCATEGORIES_MAP[PRODUCT_CATEGORIES.APARTMENT][PRODUCT_SUBCATEGORIES.APARTMENT__APARTMENT]?.initialValues || {},
  state: PRODUCT_STATE.TO_SELL,
  condition: PRODUCT_CONDITION.NEW,
  [NewProductFormFields.detailsId]: PRODUCT_SUBCATEGORIES.APARTMENT__APARTMENT,
};
