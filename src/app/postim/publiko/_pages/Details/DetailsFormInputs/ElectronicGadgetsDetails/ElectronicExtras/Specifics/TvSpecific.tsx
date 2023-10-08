import React from 'react';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD, TECH_PRODUCT_DETAILS } from 'opal/app/_shared/productTypes';
import { ProductFormComponentBaseProps } from 'opal/app/postim/publiko/_config';
import { useProductDetails } from 'opal/app/postim/publiko/_hooks/useProductDetails';
import { Select } from 'opal/app/_shared/atoms/Select';
import { TV_DETAILS_SCREEN_RES_TYPE_SELECT_OPTIONS } from '../../config';

export const TvSpecific = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const {
    setDetails
  } = useProductDetails(form);

  const handleSetExtraDetails = (content: string, field: TECH_PRODUCT_DETAILS) => {
    setDetails(content, PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, field);
  };

  return (
    <div className='grid grid-cols-2 gap-[10px] pt-5' >
      <div>
        <InputTitle>
          Rezolucioni
        </InputTitle>
        <Select
          name={TECH_PRODUCT_DETAILS.SCREEN_RES}
          values={TV_DETAILS_SCREEN_RES_TYPE_SELECT_OPTIONS}
          onSelect={handleSetExtraDetails}
        />
      </div>
      <div>
        <InputTitle>
          Madhesia e ekranit
        </InputTitle>
        <TextInput
          name={TECH_PRODUCT_DETAILS.SCREEN_SIZE}
          onChange={handleSetExtraDetails}
          control={control}
          placeholder='32, 41 ...'
          adornment='"(inch)'
        />
      </div>
    </div>
  )
}
