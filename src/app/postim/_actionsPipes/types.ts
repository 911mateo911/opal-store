import { NewProductSchemaType } from "../publiko/_formSchema";

export interface PolishedProductType extends Omit<NewProductSchemaType, 'images'> {
  images: string[];
};
