import React from 'react';
import { ProductFormComponentBaseProps } from '../_config';
import { NewProductFormFields } from '../_formSchema';
import { useWatch } from 'react-hook-form';
import { renderCurrentFormDetailsComponent } from './DetailsFormInputs/_config';
import { FormDetailsMeta } from '../_components/FormDetailsMeta';

export const DetailsProductForm = ({ form }: ProductFormComponentBaseProps) => {
  const formSubCategory = useWatch({
    control: form.control,
    name: NewProductFormFields.subCategory,
  });

  return (
    <div>
      <FormDetailsMeta form={form} />
      {renderCurrentFormDetailsComponent(formSubCategory, form)}
    </div>
  )
}
