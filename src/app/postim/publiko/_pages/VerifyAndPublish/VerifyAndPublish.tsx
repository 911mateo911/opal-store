import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import { PRODUCT_CURRENCY_SELECT_OPTIONS, PRODUCT_STATE_SELECT_OPTIONS, ProductFormComponentBaseProps } from '../../_config';
import { NewProductFormFields, NewProductSchemaType } from '../../_formSchema';
import Compressor from 'compressorjs';
import clsx from 'clsx';
import { font_Inter, font_RedHatDisplay } from 'opal/app/_shared/fonts';
import { FormImagePreview } from '../../_components/FormImagePreview';
import { Chip } from 'opal/app/_shared/atoms/Chip';
import LocationIcon from 'opal/app/_shared/icons/location.svg';

export const VerifyAndPublish = ({ form }: ProductFormComponentBaseProps) => {
  const { getValues, setValue } = form;

  // TODO: do the optimization when the form submits
  // const replaceImage = useCallback((newImage: File, images: NewProductSchemaType['images']) => {
  //   setValue(NewProductFormFields.images, {
  //     ...images,
  //     [newImage.name]: newImage
  //   })
  // }, [setValue])

  // useLayoutEffect(() => {
  //   const images = getValues(NewProductFormFields.images);
  //   const imagesArray = Object.values(images);

  //   imagesArray.forEach(image => {
  //     if (image.preview) {
  //       URL.revokeObjectURL(image.preview);
  //     }
  //     new Compressor(image, {
  //       quality: 0.6,
  //       success(fileOrBlob) {
  //         if (fileOrBlob instanceof File) {
  //           replaceImage(fileOrBlob, images)
  //         } else {
  //           const newFile = new File([fileOrBlob], fileOrBlob.name);
  //           replaceImage(newFile, images);
  //         }
  //       },
  //     })
  //   });
  // }, [getValues, replaceImage]);

  const title = getValues(NewProductFormFields.title);
  const state = getValues(NewProductFormFields.state);
  const price = getValues(NewProductFormFields.price);
  const currency = getValues(NewProductFormFields.currency);
  const isDebatablePrice = getValues(NewProductFormFields.debatablePrice);
  const location = getValues(NewProductFormFields.location);

  // TODO: find a way to render all the details from subcategories
  // TODO: add a loader state for the images loading
  return (
    <div className="pt-2" >
      <div className="grid grid-cols-2" >
        <FormImagePreview
          formControl={form.control}
        />
        <div className="pl-[10px]" >
          <h1 className={clsx(
            font_RedHatDisplay.className,
            'text-2xl font-semibold tracking-wide border-b border-grey-10',
            'dark:text-grey-10 dark:border-grey-90'
          )} >
            Dua te {PRODUCT_STATE_SELECT_OPTIONS[state].element}: {title}
          </h1>
          <div className="pt-4 grid grid-cols-[1fr_min-content] gap-[10px] items-center" >
            <p className={clsx(
              font_Inter.className,
              "py-2 relative text-center bg-blue-20 rounded-full font-semibold tracking-wider",
              'dark:bg-blue-30'
            )} >
              {price} {PRODUCT_CURRENCY_SELECT_OPTIONS[currency].element}
              {isDebatablePrice && (
                <span className={clsx(
                  'absolute tracking-tight bg-red-60 text-grey-1 -right-1 -top-2 text-[10px]',
                  'rounded-full px-1.5 py-0.5'
                )} >
                  I diskutueshem
                </span>
              )}
            </p>
            <Chip
              text={location}
              className="w-max mx-auto"
              icon={LocationIcon}
              pointer={false}
            />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
