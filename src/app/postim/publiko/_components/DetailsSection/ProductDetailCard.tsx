import React from 'react';
import { ProductDetailsRenderData } from 'opal/app/_shared/types';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';
import clsx from 'clsx';
import Image from 'next/image';

export interface ProductDetailCardProps extends ProductDetailsRenderData {
  data: React.ReactNode;
};

export const ProductDetailCard = ({ data, detailName, iconSrc }: ProductDetailCardProps) => {
  return (
    <div className={clsx(
      'shadow bg-grey-1 p-2 w-full rounded-md flex items-center justify-center flex-col',
      'dark:bg-grey-90'
    )} >
      <p className={clsx(
        font_RedHatDisplay.className,
        'font-bold text-sm tracking-wide leading-4 mb-1.5 text-center text-grey-90',
        'dark:text-grey-30'
      )} >
        {detailName}
      </p>
      <Image
        src={iconSrc}
        alt='icon'
        width={50}
        height={50}
      />
      <p className={clsx(
        font_RedHatDisplay.className,
        'font-semibold text-sm leading-4 mt-1.5 text-center text-grey-95',
        'dark:text-grey-20'
      )} >
        {data}
      </p>
    </div>
  )
}
