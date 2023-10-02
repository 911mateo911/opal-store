import React from 'react';
import { ProductFormComponentBaseProps } from '../../_config';
import { useProductDetails } from '../../_hooks/useProductDetails';
import { TextInput } from 'emeralb/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD } from 'emeralb/app/_shared/productTypes';
import { InputTitle } from '../../_components/InputTitle';
import { MapSelectValues, Select, SelectOption } from 'emeralb/app/_shared/atoms/Select';

const currentYear = new Date().getFullYear();
const minYear = currentYear - 100;

const CAR_DETAILS_YEAR_SELECT_OPTIONS: MapSelectValues<string> =
  Array(currentYear - minYear).fill('').reduce<Map<string, SelectOption<string>>>((map, __, index) => {
    const year = (currentYear - index).toString();

    map.set(year, {
      element: year,
      value: year
    });

    return map;
  }, new Map());

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
          <Select
            name={PRODUCT_DETAIL_FIELD.CAR_YEAR}
            values={CAR_DETAILS_YEAR_SELECT_OPTIONS}
            initialValue={currentYear.toString()}
          />
        </div>
      </div>
    </div>
  )
}
