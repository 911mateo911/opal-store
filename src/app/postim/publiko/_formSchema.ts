import {
  PRODUCT_ADVERT_INDEX,
  PRODUCT_CATEGORIES,
  PRODUCT_CURRENCY,
  PRODUCT_PREFERRED_COMMUNICATION
} from "@prisma/client";
import { z } from "zod";
import { PRODUCT_FORM_CONFIG } from "./_config";
import { GLOBAL_CONFIG } from "emeralb/app/_config";

/**
 * postId: string;
    title: string;
    debatablePrice: boolean;
    description: string;
    images: Image[];
    location: string;
    price: number;
    isInSale: boolean;
    inSaleFor: Date | null;
    advertIndex: 1 | 2 | 3;
    sellerId: string;
    category: string;
    subCategory: string;
    favouritedBy: string[];
    keywords: string[];
    telephone: number;
    whatsapp?: number;
    email: string;
    date: Date,
    slug: string;
    sluggedKeywords: string;
    sellerName: string;
    currency: CurrencyType;
    likes: string[];
 */

export enum NewProductFormFields {
  title = 'title',
  debatablePrice = 'debatablePrice',
  description = 'description',
  images = 'images',
  location = 'location',
  price = 'price',
  advertIndex = 'advertIndex',
  category = 'category',
  keywords = 'keywords',
  telephone = 'telephone',
  whatsapp = 'whatsapp',
  email = 'email',
  currency = 'currency',
  fullName = 'fullName',
  preferredCommunication = 'preferredCommunication',
}

// TODO: ADD validation messages
export const newProductSchema = z.object({
  [NewProductFormFields.title]: z.string()
    .min(1, { message: 'Titulli nuk mund te jete bosh.' })
    .max(PRODUCT_FORM_CONFIG.titleMaxLength, { message: `Titulli duhet te jete max ${PRODUCT_FORM_CONFIG.titleMaxLength} karaktere.` }),
  [NewProductFormFields.debatablePrice]: z.boolean(),
  [NewProductFormFields.description]: z.string()
    .min(1, { message: 'Pershkrimi nuk mund te jete bosh.' })
    .max(PRODUCT_FORM_CONFIG.descMaxLength, { message: `Pershkrimi duhet te jete max ${PRODUCT_FORM_CONFIG.descMaxLength} karaktere.` }),
  [NewProductFormFields.images]: z.array(z.object({
    preview: z.string(),
    size: z.number(),
    name: z.string()
  })),
  [NewProductFormFields.location]: z.string(),
  [NewProductFormFields.price]: z.string(),
  [NewProductFormFields.advertIndex]: z.nativeEnum(PRODUCT_ADVERT_INDEX),
  [NewProductFormFields.category]: z.nativeEnum(PRODUCT_CATEGORIES),
  [NewProductFormFields.keywords]: z.array(z.string()),
  [NewProductFormFields.telephone]: z.string(),
  [NewProductFormFields.whatsapp]: z.string().optional(),
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
  [NewProductFormFields.preferredCommunication]: z.nativeEnum(PRODUCT_PREFERRED_COMMUNICATION)
});


export type NewProductSchemaType = z.infer<typeof newProductSchema>;

export const newProductSchemaInitialValues: NewProductSchemaType = {
  advertIndex: PRODUCT_ADVERT_INDEX.REGULAR,
  category: PRODUCT_CATEGORIES.APARTMENT,
  currency: PRODUCT_CURRENCY.ALL,
  debatablePrice: false,
  description: '',
  email: '',
  fullName: '',
  images: [],
  keywords: [],
  location: '',
  preferredCommunication: PRODUCT_PREFERRED_COMMUNICATION.TEL,
  price: '',
  telephone: '',
  title: '',
  whatsapp: ''
};
