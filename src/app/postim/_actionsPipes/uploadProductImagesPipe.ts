'use server';

import { mediaDb } from "opal/app/_shared/mediaDb";
import { NewProductFormFields } from "../publiko/_formSchema";
import { ProductTypeWithUploadedImages } from "./types";
import { validateProductPayloadPipe } from "./validateProductPayloadPipe";

export const uploadProductImagesPipe = async (
  product: Awaited<ReturnType<typeof validateProductPayloadPipe>>
): Promise<ProductTypeWithUploadedImages> => {
  const images = product[NewProductFormFields.images];

  const binaryImages = await Promise.all(images.map(image => image.arrayBuffer()));

  const uploadedImages = await Promise.allSettled(binaryImages.map(image => {
    const base64Image = `data:image/jpeg;base64,${Buffer.from(image).toString('base64')}`;
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
        } else {
          // TODO: do some logging here man
          console.log(currentImagePromise.reason)
        };

        return accumulator;
      }, []
    )
  }
}
