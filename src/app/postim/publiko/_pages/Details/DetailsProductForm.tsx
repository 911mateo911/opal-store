import React from 'react';
import { PRODUCT_FORM_STEPS, ProductFormComponentBaseProps } from '../../_config';
import { NewProductFormFields } from '../../_formSchema';
import { useWatch } from 'react-hook-form';
import { renderCurrentFormDetailsComponent } from './DetailsFormInputs/_config';
import { FormDetailsMeta } from '../../_components/FormDetailsMeta';
import { ActionButton } from 'opal/app/_shared/atoms/ActionButton';

export const DetailsProductForm = ({ form }: ProductFormComponentBaseProps) => {
  const { handleSubmit, setValue } = form;

  const formSubCategory = useWatch({
    control: form.control,
    name: NewProductFormFields.subCategory,
  });

  const onSubmit = handleSubmit((formData) => {
    console.log({ formData });
    setValue(NewProductFormFields.formStep, PRODUCT_FORM_STEPS.VERIFY_AND_PUBLISH);
  });

  return (
    <div>
      <FormDetailsMeta form={form} />
      {renderCurrentFormDetailsComponent(formSubCategory, form)}
      <div className="pb-[10px] pt-6" >
        <ActionButton
          text="Vazhdo"
          onClick={onSubmit}
        />
      </div>
    </div>
  )
}
