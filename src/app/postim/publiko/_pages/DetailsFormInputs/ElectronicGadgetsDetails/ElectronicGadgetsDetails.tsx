import React from 'react';
import {
  PRODUCT_CONDITION_SELECT_OPTIONS,
  ProductFormComponentBaseProps
} from '../../../_config';
import { useProductDetails } from '../../../_hooks/useProductDetails';
import { InputTitle } from '../../../_components/InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD } from 'opal/app/_shared/productTypes';
import { Select } from 'opal/app/_shared/atoms/Select';
import { NewProductFormFields } from '../../../_formSchema';

export const ElectronicGadgetsDetails = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const {
    setDetails,
    onSimpleInputChange
  } = useProductDetails(form);

  return (
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
  )
}
