'use client';

import { ImageWithPreview } from 'emeralb/app/_shared/types';
import React from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

interface FormImagePreviewProps {
  images: ImageWithPreview[];
  onDelete: (imagePreviewId: string) => void;
}

export const FormImagePreview = ({ images, onDelete }: FormImagePreviewProps) => {

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
      <div className="keen-slider__slide">1</div>
      <div className="keen-slider__slide">2</div>
      <div className="keen-slider__slide">3</div>
    </div>
  )
}
