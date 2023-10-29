import { ZodObject, ZodRawShape, z } from "zod";

export interface ImageWithPreview extends File {
  preview: string;
};

export type MappedKeysOfSchemaObject<T extends ZodObject<ZodRawShape>, R> = Record<keyof z.infer<T>, R>;
