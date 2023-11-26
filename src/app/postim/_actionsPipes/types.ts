import { Draft_Product_Form } from "@prisma/client";
import { NewProductSchemaType } from "../publiko/_formSchema";

export interface ProductTypeWithUploadedImages extends Omit<NewProductSchemaType, 'images'> {
  images: string[];
};

// auto attached by prisma
export type PolishedProductType = Omit<Draft_Product_Form, 'draftId' | 'created_at'>
