import React from 'react';
import { ProductFormComponentBaseProps } from '../../_config';
import { NewProductFormFields } from '../../_formSchema';
import { PRODUCT_SUBCATEGORIES_MAP } from '../../_subcategoriesMetaData';
import { createProductConditionDetailsCardProps, mapDetailsToCardProps } from './mapDetailsToCardProps';
import { ProductDetailCard } from './ProductDetailCard';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';
import clsx from 'clsx';

export const ProductDetails = ({ form }: ProductFormComponentBaseProps) => {
  const category = form.getValues(NewProductFormFields.category);
  const subcategory = form.getValues(NewProductFormFields.subCategory);
  const details = form.getValues(NewProductFormFields.details);

  const detailsMap = PRODUCT_SUBCATEGORIES_MAP?.[category]?.[subcategory];

  const hasDetails = detailsMap && detailsMap?.hasNextStep && detailsMap?.initialValues && detailsMap.detailsRenderData;

  if (!hasDetails || !detailsMap.detailsRenderData) {
    // TODO: return nuk ka detaje
    return null;
  };

  const cardRenderProps = mapDetailsToCardProps(details, detailsMap.detailsRenderData);

  if (detailsMap.showConditionOnDetails) {
    cardRenderProps.unshift(createProductConditionDetailsCardProps(form.getValues(NewProductFormFields.condition)));
  };

  // TODO: make the last element be full width
  return (
    <div>
      <h6 className={clsx(
        font_RedHatDisplay.className,
        'text-base font-semibold mb-[10px]',
        'dark:text-grey-5 dark:border-grey-90'
      )} >
        Detajet
      </h6>
      <div className='grid grid-cols-3 w-full gap-[10px] between-tablet-xs-sm:grid-cols-4 between-mobile-lg-tablet-xs:grid-cols-4' >
        {cardRenderProps.map(props => (
          <ProductDetailCard key={props.detailName} {...props} />
        ))}
      </div>
    </div>
  )
}
