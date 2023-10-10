import React, { useCallback, useEffect } from 'react';
import { ProductFormComponentBaseProps } from '../../_config';
import { NewProductFormFields, NewProductSchemaType } from '../../_formSchema';
import Compressor from 'compressorjs';
import clsx from 'clsx';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';

export const VerifyAndPublish = ({ form }: ProductFormComponentBaseProps) => {
  const { getValues, setValue } = form;

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

  const title = getValues(NewProductFormFields.title);

  // TODO: find a way to render all the details from subcategories
  return (
    <div>
      <h1 className={clsx(
        font_RedHatDisplay.className,
        'text-2xl font-semibold tracking-wide'
      )} >
        {title}
      </h1>
    </div>
  )
}
