import { PRODUCT_ADVERT_INDEX, PRODUCT_CATEGORIES, PRODUCT_CURRENCY } from "@prisma/client";
import { z } from "zod";

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
  isInSale = 'isInSale',
  inSaleFor = 'inSaleFor',
  advertIndex = 'advertIndex',
  category = 'category',
  keywords = 'keywords',
  telephone = 'telephone',
  whatsapp = 'whatsapp',
  email = 'email',
  currency = 'currency'
}

// TODO: ADD validation messages
export const newProductSchema = z.object({
  [NewProductFormFields.title]: z.string(),
  [NewProductFormFields.debatablePrice]: z.boolean(),
  [NewProductFormFields.description]: z.string(),
  // check ImageWithPreview
  [NewProductFormFields.images]: z.array(z.object({
    preview: z.string(),
    size: z.number(),
    name: z.string()
  })),
  [NewProductFormFields.location]: z.string(),
  [NewProductFormFields.price]: z.string(),
  [NewProductFormFields.isInSale]: z.boolean().optional(),
  [NewProductFormFields.inSaleFor]: z.date().optional(),
  [NewProductFormFields.advertIndex]: z.nativeEnum(PRODUCT_ADVERT_INDEX),
  [NewProductFormFields.category]: z.nativeEnum(PRODUCT_CATEGORIES),
  [NewProductFormFields.keywords]: z.array(z.string()),
  [NewProductFormFields.telephone]: z.string(),
  [NewProductFormFields.whatsapp]: z.string().optional(),
  [NewProductFormFields.email]: z.string(),
  [NewProductFormFields.currency]: z.nativeEnum(PRODUCT_CURRENCY)
});

export type NewProductSchemaType = z.infer<typeof newProductSchema>;