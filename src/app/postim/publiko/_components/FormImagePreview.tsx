'use client';

import 'keen-slider/keen-slider.min.css'
import React, { useEffect, useMemo, useState } from 'react';
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'
import { Control, useWatch } from 'react-hook-form';
import { NewProductFormFields, NewProductSchemaType } from '../_formSchema';
import Image from 'next/image';
import clsx from 'clsx';
import { font_Inter } from 'opal/app/_shared/fonts';
import DeleteIcon from 'opal/app/_shared/icons/trash.svg?url';

interface FormImagePreviewProps {
  formControl: Control<NewProductSchemaType>
  onDelete?: (imageName: string) => void;
  editable?: boolean;
  className?: string;
  horizontal?: boolean;
};

export const FormImagePreview = ({ formControl, onDelete, editable = true, className, horizontal = false }: FormImagePreviewProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const images = useWatch({ control: formControl, name: NewProductFormFields.images, defaultValue: {} });
  const sliderOptions = useMemo<KeenSliderOptions>(() => ({ vertical: !horizontal }), [horizontal]);

  const imagesArray = Object.values(images);

  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);

  instanceRef.current?.on('slideChanged', ({ track }) => setSliderIndex(track.details.rel));

  useEffect(() => {
    instanceRef.current?.update(sliderOptions);
    if (instanceRef.current) {
      setSliderIndex(instanceRef.current.track.details.rel);
    }
  }, [images, instanceRef, sliderOptions]);

  const wrapperClassName = clsx('bg-grey-10 rounded-md dark:bg-grey-90 w-full h-64', className);

  if (!imagesArray.length) {
    return (
      <div className={clsx(wrapperClassName, 'flex items-center justify-center')} >
        <p className={clsx(
          font_Inter.className,
          'text-sm text-grey-100 dark:text-grey-20'
        )} >
          Nuk eshte zgjedhur asnje foto
        </p>
      </div>
    );
  };

  return (
    <div ref={sliderRef} className={clsx("keen-slider", wrapperClassName)}>
      {imagesArray.map(image => (
        <div key={image.preview} className="keen-slider__slide relative cursor-grab">
          {editable && (
            <div
              className={clsx(
                'absolute shadow right-2 top-2 z-10 cursor-pointer p-2 bg-grey-1 rounded-md dark:bg-grey-80'
              )}
              onClick={() => onDelete?.(image.name)}
            >
              <Image
                src={DeleteIcon}
                width={24}
                height={24}
                alt='delete_image'
                className='dark:invert'
              />
            </div>
          )}
          {image.preview && (
            <Image
              src={image.preview}
              alt={image.preview}
              className='object-contain h-full'
              fill
            />
          )}
        </div>
      ))}
      {imagesArray.length > 1 && (
        <div className={clsx(
          'absolute items-center justify-center gap-1 flex',
          'bg-grey-1 rounded-full shadow',
          sliderOptions.vertical ? 'top-1/2 -translate-y-1/2 flex-col right-2 px-1 py-2' : 'left-1/2 -translate-x-1/2 bottom-2 py-1 px-2',
          'dark:bg-grey-75'
        )} >
          {imagesArray.map((image, indicatorIndex) => {
            return (
              <span key={image.preview} className={clsx(
                'block w-1 h-1 bg-green-20 rounded-full',
                sliderIndex === indicatorIndex && 'bg-green-60 dark:bg-green-70',
                'dark:bg-green-30'
              )} />
            )
          })}
        </div>
      )}
    </div>
  )
}
