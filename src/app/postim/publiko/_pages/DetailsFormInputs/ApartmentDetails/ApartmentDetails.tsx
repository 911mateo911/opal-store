import React from 'react';
import { ProductFormComponentBaseProps } from '../../../_config';
import { useProductDetails } from '../../../_hooks/useProductDetails';
import { InputTitle } from '../../../_components/InputTitle';
import { PRODUCT_DETAIL_FIELD } from 'opal/app/_shared/productTypes';
import { Select } from 'opal/app/_shared/atoms/Select';
import {
  APARTMENT_FLOOR_TYPE_SELECT_OPTIONS,
  APARTMENT_ROOMS_TYPE_SELECT_OPTIONS
} from './config';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { Checkbox } from 'opal/app/_shared/atoms/Checkbox';

export const ApartmentDetails = ({
  form
}: ProductFormComponentBaseProps) => {
  // TODO: Implement cache
  const { control } = form;

  const {
    setDetails,
    details
  } = useProductDetails(form);

  return (
    <div>
      <div className='grid grid-cols-2 gap-[10px]' >
        <div>
          <InputTitle>
            Kate
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.APARTMENT_FLOORS}
            values={APARTMENT_FLOOR_TYPE_SELECT_OPTIONS}
            onSelect={setDetails}
          />
        </div>
        <div>
          <InputTitle>
            Siperfaqja (m<sup>2</sup>)
          </InputTitle>
          <TextInput
            name={PRODUCT_DETAIL_FIELD.APARTMENT_SQAREA}
            onChange={setDetails}
            control={control}
            defaultValue={details[PRODUCT_DETAIL_FIELD.APARTMENT_SQAREA]}
            placeholder='100 m2...'
          />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-[10px] pt-5' >
        <div>
          <InputTitle>
            Nr. i dhomave
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.APARTMENT_ROOMS}
            values={APARTMENT_ROOMS_TYPE_SELECT_OPTIONS}
            onSelect={setDetails}
          />
        </div>
        <div className="flex items-center justify-center pt-[22px]" >
          <Checkbox
            name={PRODUCT_DETAIL_FIELD.APARTMENT_FURNITURE}
            onChange={setDetails}
            placeholder="E mobiluar"
          />
        </div>
      </div>
    </div>
  )
}
