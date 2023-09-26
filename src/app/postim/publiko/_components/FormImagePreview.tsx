'use client';

import React from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Control, useFormState } from 'react-hook-form';
import { NewProductFormFields, NewProductSchemaType } from '../_formSchema';

interface FormImagePreviewProps {
  formControl: Control<NewProductSchemaType>
  onDelete: (imagePreviewId: string) => void;
}

export const FormImagePreview = ({ formControl, onDelete }: FormImagePreviewProps) => {
  const images = useFormState({ control: formControl, name: NewProductFormFields.images });

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    []
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {/* <div className="keen-slider__slide">1</div>
      <div className="keen-slider__slide">2</div>
      <div className="keen-slider__slide">3</div> */}
    </div>
  )
}
