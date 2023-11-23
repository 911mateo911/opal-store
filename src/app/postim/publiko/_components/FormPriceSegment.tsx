import React from 'react';
import { NewProductFormFields, NewProductSchemaType } from '../_formSchema';
import { Control, UseFormGetValues } from 'react-hook-form';
import { InputTitle } from './InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { Checkbox } from 'opal/app/_shared/atoms/Checkbox';
import { PRODUCT_CURRENCY_SELECT_OPTIONS } from '../_config';
import { Select } from 'opal/app/_shared/atoms/Select';
import clsx from 'clsx';

interface FormPriceSegmentProps {
  disabled?: boolean;
  onSimpleInputChange: (value: string | boolean | number, field: NewProductFormFields) => void;
  onInputBlur: (field: NewProductFormFields) => Promise<boolean>;
  control: Control<NewProductSchemaType>;
  getValues: UseFormGetValues<NewProductSchemaType>
};

export const FormPriceSegment = ({
  disabled,
  onSimpleInputChange,
  onInputBlur,
  control,
  getValues
}: FormPriceSegmentProps) => {
  return (
    <div className={clsx(
      "pt-[22px] grid grid-cols-[260px_repeat(2,1fr)] gap-[10px] max-tablet:grid-cols-2 max-mobile:grid-cols-[1fr_120px] max-mobile:[row-gap:0] max-mobile:pt-8",
      'max-mobile-xs:grid-cols-1'
    )} >
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
          type='number'
          defaultValue={getValues(NewProductFormFields.price)}
        />
      </div>
      <div className='max-mobile-xs:mt-3.5 max-mobile-xs:px-2' >
        <InputTitle center >
          Monedha
        </InputTitle>
        <Select
          name={NewProductFormFields.currency}
          values={PRODUCT_CURRENCY_SELECT_OPTIONS}
          initialValue={getValues(NewProductFormFields.currency)}
          onSelect={onSimpleInputChange}
        />
      </div>
      <div className="flex items-center justify-end pt-[22px] max-tablet:col-[1/-1] max-tablet:mx-auto max-mobile-sm:pb-1" >
        <Checkbox
          name={NewProductFormFields.debatablePrice}
          onChange={onSimpleInputChange}
          placeholder="Cmim i diskutueshem"
          defaultChecked={getValues(NewProductFormFields.debatablePrice)}
        />
      </div>
    </div>
  )
}
