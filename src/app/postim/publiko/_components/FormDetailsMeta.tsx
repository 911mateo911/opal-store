import React from 'react'
import {
  BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS,
  ProductFormComponentBaseProps
} from '../_config';
import { NewProductFormFields } from '../_formSchema';
import clsx from 'clsx';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';
import { PRODUCT_SUBCATEGORIES_MAP } from '../_subcategoriesMetaData';

interface FormDetailsMetaProps extends ProductFormComponentBaseProps {
  className?: string;
}

export const FormDetailsMeta = ({ form, className }: FormDetailsMetaProps) => {
  const category = form.getValues(NewProductFormFields.category);
  const subCategory = form.getValues(NewProductFormFields.subCategory);

  return (
    <div className={clsx('bg-green-10 rounded-full w-fit px-4 py-0.5 flex items-center justify-center', className)} >
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
