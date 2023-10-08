import React, { useCallback, useEffect } from 'react';
import { ProductFormComponentBaseProps } from '../../_config';
import { NewProductFormFields, NewProductSchemaType } from '../../_formSchema';
import Compressor from 'compressorjs';

export const VerifyAndPublish = ({ form }: ProductFormComponentBaseProps) => {
  const { getValues, setValue, watch } = form;

  const replaceImage = useCallback((newImage: File, images: NewProductSchemaType['images']) => {
    const indexOfImageToReplace = images.findIndex(
      ({ name }) => name !== newImage.name
    );
    console.log(newImage.name, images);
    // TODO: fix this
    setValue(NewProductFormFields.images, images.splice(
      indexOfImageToReplace,
      1,
      Object.assign(
        newImage,
        {
          preview: URL.createObjectURL(newImage),
        }
      )
    ))
  }, [setValue])

  useEffect(() => {
    const images = getValues(NewProductFormFields.images);

    images.forEach(image => {
      URL.revokeObjectURL(image.preview);
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
