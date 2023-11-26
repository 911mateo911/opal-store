'use server';

import { mediaDb } from "opal/app/_shared/mediaDb";
import { NewProductFormFields, NewProductSchemaType } from "../publiko/_formSchema";
import { ProductTypeWithUploadedImages } from "./types";

export const uploadProductImagesPipe = async (product: NewProductSchemaType): Promise<ProductTypeWithUploadedImages> => {
  const images = product[NewProductFormFields.images];

  const binaryImages = await Promise.all(images.map(image => image.arrayBuffer()));

  const uploadedImages = await Promise.allSettled(binaryImages.map(image => {
    const base64Image = Buffer.from(image).toString('base64');
    return mediaDb.uploader.upload(base64Image, {
      folder: process.env.CLOUDINARY_FOLDER,
      transformation: [{
        width: 3840,
        height: 2160,
        crop: "pad",
        background: 'auto'
      }]
    })
  }));

  return {
    ...product,
    images: uploadedImages.reduce<ProductTypeWithUploadedImages['images']>(
      (accumulator, currentImagePromise) => {
        if (currentImagePromise.status === 'fulfilled') {
          accumulator.push(currentImagePromise.value.secure_url);
        };

        return accumulator;
      }, []
    )
  }
}
