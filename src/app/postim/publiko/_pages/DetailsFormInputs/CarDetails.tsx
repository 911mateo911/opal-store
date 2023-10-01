import React from 'react';
import { ProductFormComponentBaseProps } from '../../_config';
import { useProductDetails } from '../../_hooks/useProductDetails';
import { TextInput } from 'emeralb/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD } from 'emeralb/app/_shared/productTypes';
import { InputTitle } from '../../_components/InputTitle';

export const CarDetails = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const {
    setDetails,
    details
  } = useProductDetails(form);

  // TODO: Validate form
  console.log(form.watch());

  return (
    <div className='pt-2' >
      <InputTitle>
        Marka
      </InputTitle>
      <TextInput
        name={PRODUCT_DETAIL_FIELD.CAR_MAKE}
        onChange={setDetails}
        control={control}
        defaultValue={details[PRODUCT_DETAIL_FIELD.CAR_MAKE]}
        placeholder='BMW, Audi...'
      />
      <div className='grid grid-cols-2 gap-[10px] pt-3' >
        <div>
          <InputTitle>
            Modeli
          </InputTitle>
          <TextInput
            name={PRODUCT_DETAIL_FIELD.CAR_MODEL}
            onChange={setDetails}
            control={control}
            defaultValue={details[PRODUCT_DETAIL_FIELD.CAR_MODEL]}
            placeholder='X5, Q7...'
          />
        </div>
        <div>
          <InputTitle>
            Viti i prodhimit
          </InputTitle>
          <TextInput
            name={PRODUCT_DETAIL_FIELD.CAR_YEAR}
            onChange={setDetails}
            control={control}
            defaultValue={details[PRODUCT_DETAIL_FIELD.CAR_YEAR]}
          />
        </div>
      </div>
    </div>
  )
}
