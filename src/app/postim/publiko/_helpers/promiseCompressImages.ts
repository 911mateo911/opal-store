import { ImageWithPreview } from "opal/app/_shared/types";
import Compressor from 'compressorjs';

const promiseCompressImage = (image: File) => {
  return new Promise<File>((resolve, reject) => {
    new Compressor(image, {
      quality: 0.6,
      success(fileOrBlob) {
        if (fileOrBlob instanceof File) {
          resolve(fileOrBlob)
        } else {
          const newFile = new File([fileOrBlob], fileOrBlob.name);
          resolve(newFile);
        }
      },
      error(error) {
        reject(error);
      },
    })
  })
}

export const promiseCompressImages = (images: ImageWithPreview[]): Promise<File[]> => {
  return Promise.all(images.map(image => {
    if (image.preview) {
      URL.revokeObjectURL(image.preview);
    };

    return promiseCompressImage(image);
  }));
}
