import React from 'react';
import { NewProductFormFields, NewProductSchemaType } from '../_formSchema';
import { Control } from 'react-hook-form';
import { InputTitle } from './InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { Checkbox } from 'opal/app/_shared/atoms/Checkbox';
import { PRODUCT_CURRENCY_SELECT_OPTIONS } from '../_config';
import { Select } from 'opal/app/_shared/atoms/Select';

interface FormPriceSegmentProps {
  disabled?: boolean;
  onSimpleInputChange: (value: string | boolean, field: NewProductFormFields) => void;
  onInputBlur: (field: NewProductFormFields) => Promise<boolean>;
  control: Control<NewProductSchemaType>;
};

export const FormPriceSegment = ({
  disabled,
  onSimpleInputChange,
  onInputBlur,
  control
}: FormPriceSegmentProps) => {
  return (
    <div className="pt-[22px] grid grid-cols-3 gap-[10px]" >
      <div>
        <InputTitle>
          Cmimi
        </InputTitle>
        <TextInput<NewProductFormFields.price, NewProductSchemaType>
          name={NewProductFormFields.price}
          onChange={onSimpleInputChange}
          placeholder="Cmimi"
          onBlur={onInputBlur}
          control={control}
        />
      </div>
      <div>
        <InputTitle center >
          Monedha
        </InputTitle>
        <Select
          name={NewProductFormFields.currency}
          values={PRODUCT_CURRENCY_SELECT_OPTIONS}
          initialValue='USD'
          onSelect={onSimpleInputChange}
        />
      </div>
      <div className="flex items-center justify-end pt-[22px]" >
        <Checkbox
          name={NewProductFormFields.debatablePrice}
          onChange={onSimpleInputChange}
          placeholder="Cmim i diskutueshem"
        />
      </div>
    </div>
  )
}
