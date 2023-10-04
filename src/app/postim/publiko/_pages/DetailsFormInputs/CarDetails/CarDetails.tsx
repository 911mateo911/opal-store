import React from 'react';
import { ProductFormComponentBaseProps } from '../../../_config';
import { useProductDetails } from '../../../_hooks/useProductDetails';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD } from 'opal/app/_shared/productTypes';
import { InputTitle } from '../../../_components/InputTitle';
import { Select } from 'opal/app/_shared/atoms/Select';
import {
  CAR_DETAILS_FUEL_TYPE_SELECT_OPTIONS,
  CAR_DETAILS_PLATE_TYPE_SELECT_OPTIONS,
  CAR_DETAILS_TRANSMISSION_SELECT_OPTIONS,
  CAR_DETAILS_YEAR_SELECT_OPTIONS,
  currentYear
} from './config';

export const CarDetails = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const {
    setDetails,
    details
  } = useProductDetails(form);

  // TODO: Validate form
  console.log(form.watch());

  return (
    <div>
      <div className='grid grid-cols-2 gap-[10px]' >
        <div>
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
        </div>
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
      </div>
      <div className='grid grid-cols-2 gap-[10px] pt-5' >
        <div>
          <InputTitle>
            Viti i prodhimit
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.CAR_YEAR}
            values={CAR_DETAILS_YEAR_SELECT_OPTIONS}
            initialValue={currentYear.toString()}
            onSelect={setDetails}
          />
        </div>
        <div>
          <InputTitle>
            Tranmisioni
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.CAR_TRANSMISSION}
            values={CAR_DETAILS_TRANSMISSION_SELECT_OPTIONS}
          />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-[10px] pt-5' >
        <div>
          <InputTitle>
            Karburanti
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.CAR_FUEL}
            values={CAR_DETAILS_FUEL_TYPE_SELECT_OPTIONS}
          />
        </div>
        <div>
          <InputTitle>
            Tipi i targes
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.CAR_PLATE}
            values={CAR_DETAILS_PLATE_TYPE_SELECT_OPTIONS}
          />
        </div>
      </div>
    </div>
  )
}
