import React from 'react'
import {
  BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS,
  PRODUCT_SUBCATEGORIES_MAP,
  ProductFormComponentBaseProps
} from '../_config';
import { NewProductFormFields } from '../_formSchema';
import clsx from 'clsx';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';

export const FormDetailsMeta = ({ form }: ProductFormComponentBaseProps) => {
  const category = form.getValues(NewProductFormFields.category);
  const subCategory = form.getValues(NewProductFormFields.subCategory);

  return (
    <div className='bg-green-10 rounded-full w-fit px-4 py-0.5 flex items-center justify-center' >
      <div className='flex items-end h-4'>
        <p
          className={clsx(
            font_RedHatDisplay.className,
            'text-xs leading-4 text-green-100 font-semibold'
          )}
        >{BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS?.[category]?.element}</p>
        <p className='text-xs' >&nbsp;/&nbsp;</p>
        <p className={clsx(
          font_RedHatDisplay.className,
          'text-xs leading-1 text-green-90 font-medium'
        )} >
          {PRODUCT_SUBCATEGORIES_MAP?.[category]?.[subCategory]?.element}
        </p>
      </div>
    </div>
  )
}
