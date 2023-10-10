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
import { renderElectronicExtraFormComponents } from './config';

interface ElectronicGadgetsDetailsProps extends ProductFormComponentBaseProps {
  formSubcategory: PRODUCT_SUBCATEGORIES
}

export const ElectronicGadgetsDetails = ({ form, formSubcategory }: ElectronicGadgetsDetailsProps) => {
  const { control } = form;

  const {
    setDetails,
    onSimpleInputChange
  } = useProductDetails(form);

  return (
    <div>
      <div className='grid grid-cols-2 gap-[10px]' >
        <div>
          <InputTitle>
            Marka
          </InputTitle>
          <TextInput
            name={PRODUCT_DETAIL_FIELD.ELECTRONICS_MAKE}
            onChange={setDetails}
            control={control}
            placeholder='Apple, Samsung...'
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
          />
        </div>
      </div>
      {renderElectronicExtraFormComponents(formSubcategory, form)}
    </div>
  )
}