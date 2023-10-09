import React, { useCallback, useEffect } from 'react';
import { ProductFormComponentBaseProps } from '../../_config';
import { NewProductFormFields, NewProductSchemaType } from '../../_formSchema';
import Compressor from 'compressorjs';

export const VerifyAndPublish = ({ form }: ProductFormComponentBaseProps) => {
  const { getValues, setValue, watch } = form;

  const replaceImage = useCallback((newImage: File, images: NewProductSchemaType['images']) => {
    setValue(NewProductFormFields.images, {
      ...images,
      [newImage.name]: newImage
    })
  }, [setValue])

  useEffect(() => {
    const images = getValues(NewProductFormFields.images);
    const imagesArray = Object.values(images);

    imagesArray.forEach(image => {
      if (image.preview) {
        URL.revokeObjectURL(image.preview);
      }
      new Compressor(image, {
        quality: 0.6,
        success(fileOrBlob) {
          if (fileOrBlob instanceof File) {
            replaceImage(fileOrBlob, images)
          } else {
            const newFile = new File([fileOrBlob], fileOrBlob.name);
            replaceImage(newFile, images);
          }
        },
      })
    })
  }, [getValues, replaceImage]);

  console.log(watch(NewProductFormFields.images));

  return (
    <div>

    </div>
  )
}
