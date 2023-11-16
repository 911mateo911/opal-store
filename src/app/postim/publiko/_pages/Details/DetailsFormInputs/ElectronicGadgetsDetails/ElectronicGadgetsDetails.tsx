import React from 'react';
import {
  PRODUCT_CONDITION_SELECT_OPTIONS,
  ProductFormComponentBaseProps
} from '../../../../_config';
import { useProductDetails } from '../../../../_hooks/useProductDetails';
import { InputTitle } from '../../../../_components/InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD } from 'opal/app/_shared/productTypes';
import { Select } from 'opal/app/_shared/atoms/Select';
import { NewProductFormFields } from '../../../../_formSchema';
import { PRODUCT_SUBCATEGORIES } from '@prisma/client';
import { electronicGadgetsDetailsBaseSchema } from './config';
import { renderElectronicExtraFormComponents } from './helpers';
import { buildDetailInputErrorPath } from 'opal/app/postim/publiko/_helpers/buildDetailInputErrorPath';
import { FormDoubleInputSectionWrapper } from 'opal/app/postim/publiko/_components/FormDoubleInputSectionWrapper';

interface ElectronicGadgetsDetailsProps extends ProductFormComponentBaseProps {
  formSubcategory: PRODUCT_SUBCATEGORIES
}

export const ElectronicGadgetsDetails = ({ form, formSubcategory }: ElectronicGadgetsDetailsProps) => {
  const { control, getValues } = form;

  const {
    setDetails,
    onSimpleInputChange,
    onInputBlur,
    details
  } = useProductDetails(form, electronicGadgetsDetailsBaseSchema);

  return (
    <div>
      <FormDoubleInputSectionWrapper>
        <div>
          <InputTitle>
            Marka
          </InputTitle>
          <TextInput
            name={PRODUCT_DETAIL_FIELD.ELECTRONICS_MAKE}
            onChange={setDetails}
            control={control}
            placeholder='Apple, Samsung...'
            onBlur={onInputBlur}
            defaultValue={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_MAKE]}
            errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.ELECTRONICS_MAKE)}
          />
        </div>
        <div>
          <InputTitle>
            Gjendja
          </InputTitle>
          <Select
            name={NewProductFormFields.condition}
            values={PRODUCT_CONDITION_SELECT_OPTIONS}
            onSelect={onSimpleInputChange}
            initialValue={getValues(NewProductFormFields.condition)}
          />
        </div>
      </FormDoubleInputSectionWrapper>
      {renderElectronicExtraFormComponents(formSubcategory, form)}
    </div>
  )
}
