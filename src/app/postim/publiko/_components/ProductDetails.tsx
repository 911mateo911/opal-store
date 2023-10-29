import React from 'react';
import { ProductFormComponentBaseProps } from '../_config';
import { NewProductFormFields } from '../_formSchema';

export const ProductDetails = ({ form }: ProductFormComponentBaseProps) => {
  const details = form.getValues(NewProductFormFields.details);

  return (
    <div>

    </div>
  )
}
