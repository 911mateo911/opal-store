import React from 'react';
import { ProductFormComponentBaseProps } from '../../_config';
import { NewProductFormFields, PRODUCT_FORM_STEPS } from '../../_formSchema';
import { useWatch } from 'react-hook-form';
import { renderCurrentFormDetailsComponent } from './DetailsFormInputs/_config';
import { FormDetailsMeta } from '../../_components/FormDetailsMeta';
import { ActionButton } from 'opal/app/_shared/atoms/ActionButton';
import { FormSectionTitle } from '../../_components/FormSectionTitle';

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
      <div className='flex mb-[22px] mt-5 items-center gap-2 pb-2' >
        <FormSectionTitle className='!mb-0' >
          Detaje
        </FormSectionTitle>
        <FormDetailsMeta form={form} />
      </div>
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
