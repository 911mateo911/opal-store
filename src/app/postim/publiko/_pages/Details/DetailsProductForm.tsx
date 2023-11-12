import React from 'react';
import { ProductFormComponentBaseProps } from '../../_config';
import { NewProductFormFields, PRODUCT_FORM_STEPS } from '../../_formSchema';
import { renderCurrentFormDetailsComponent } from './DetailsFormInputs/_config';
import { FormDetailsMeta } from '../../_components/FormDetailsMeta';
import { ActionButton } from 'opal/app/_shared/atoms/ActionButton';
import { FormSectionTitle } from '../../_components/FormSectionTitle';
import { PRODUCT_SUBCATEGORIES_MAP } from '../../_subcategoriesMetaData';
import { ZodError } from 'zod';

export const DetailsProductForm = ({ form }: ProductFormComponentBaseProps) => {
  const { handleSubmit, getValues, setValue, setError } = form;

  const formSubcategory = getValues(NewProductFormFields.subCategory);

  const goToNextStep = handleSubmit(data => {
    console.log({ data });
    setValue(NewProductFormFields.formStep, PRODUCT_FORM_STEPS.VERIFY_AND_PUBLISH);
  });

  const onSubmit = async () => {
    const providedCategory = getValues(NewProductFormFields.category);
    const proviedSubcategory = getValues(NewProductFormFields.subCategory);

    const schemaToParse = PRODUCT_SUBCATEGORIES_MAP?.[providedCategory]?.[proviedSubcategory]?.zodDetailsSchema;

    if (schemaToParse) {
      try {
        await schemaToParse.parseAsync(getValues(NewProductFormFields.details));

        goToNextStep();
      } catch (catchedError) {
        const error = catchedError as ZodError;

        if (error?.issues) {
          error.issues.forEach(issue => {
            const normalizedIssuePath = Array.from(new Set(issue.path)).join('.');
            const issuePath = `${NewProductFormFields.details}.${normalizedIssuePath}` as NewProductFormFields;
            setError(issuePath, {
              message: issue.message
            })
          })
        }

        // TODO: do sum damn logging
        console.log({ error });
      }
    } else {
      goToNextStep();
    }
  };

  return (
    <div>
      <div className='flex mb-[22px] mt-5 items-center gap-2 pb-2' >
        <FormSectionTitle className='!mb-0' >
          Detaje
        </FormSectionTitle>
        <FormDetailsMeta form={form} />
      </div>
      {renderCurrentFormDetailsComponent(formSubcategory, form)}
      <div className="pb-[10px] pt-6" >
        <ActionButton
          text="Vazhdo"
          onClick={onSubmit}
        />
      </div>
    </div>
  )
}
