import { ZodObject, ZodRawShape, z } from "zod";
import { SelectValues } from "./atoms/Select";

export interface ImageWithPreview extends File {
  preview: string;
};

// Get all keys on a zod schema and map to whatever u like
export type MappedKeysOfSchemaObject<T extends ZodObject<ZodRawShape>, R> = Record<keyof z.infer<T>, R>;

export type ProductDetailsRenderData = {
  iconSrc: string;
  detailName: string;
  metricUnit?: string;
  boolValueMapping?: {
    truthy: string;
    false: string;
  };
  selectValueMapping?: SelectValues<string>;
};

export type ProductDetailsRenderDataMap<T extends string | number | symbol> = Record<T, ProductDetailsRenderData>;
