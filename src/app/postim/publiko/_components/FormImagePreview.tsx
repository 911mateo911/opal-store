'use client';

import React, { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css'
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'
import { Control, useWatch } from 'react-hook-form';
import { NewProductFormFields, NewProductSchemaType } from '../_formSchema';
import Image from 'next/image';
import clsx from 'clsx';
import { font_Inter } from 'emeralb/app/_shared/fonts';
import DeleteIcon from 'emeralb/app/_shared/icons/delete.svg';

interface FormImagePreviewProps {
  formControl: Control<NewProductSchemaType>
  onDelete: (imagePreviewId: string) => void;
};

const sliderOptions: KeenSliderOptions = {
  vertical: true
};

export const FormImagePreview = ({ formControl, onDelete }: FormImagePreviewProps) => {
  const images = useWatch({ control: formControl, name: NewProductFormFields.images, defaultValue: [] });

  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);

  useEffect(() => {
    console.log('updated');
    instanceRef.current?.update(sliderOptions);
  }, [images, instanceRef]);

  const wrapperClassName = 'bg-grey-10 rounded-md dark:bg-grey-90 w-full h-64'

  if (!images.length) {
    return (
      <div className={clsx(wrapperClassName, 'flex items-center justify-center')} >
        <p className={clsx(
          font_Inter.className,
          'text-sm text-grey-100 dark:text-grey-20'
        )} >
          Nuk eshte zgjedhur asnje foto
        </p>
      </div>
    )
  }

  return (
    <div ref={sliderRef} className={clsx("keen-slider", wrapperClassName)}>
      {images.map(image => (
        <div key={image.preview} className="keen-slider__slide relative cursor-grab">
          <div
            className={clsx(
              'absolute shadow right-2 top-2 z-10 cursor-pointer p-2 bg-grey-1 rounded-md dark:bg-grey-80'
            )}
            onClick={() => onDelete(image.preview)}
          >
            <Image
              src={DeleteIcon}
              width={24}
              height={24}
              alt='delete_image'
              className='dark:invert'
            />
          </div>
          <Image
            src={image.preview}
            alt={image.preview}
            className='object-contain h-full'
            fill
          />
        </div>
      ))}
    </div>
  )
}
