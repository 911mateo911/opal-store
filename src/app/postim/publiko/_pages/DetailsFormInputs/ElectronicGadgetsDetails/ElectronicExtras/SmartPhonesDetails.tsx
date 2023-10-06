import React from 'react';
import { Checkbox } from 'opal/app/_shared/atoms/Checkbox';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD, TECH_PRODUCT_DETAILS } from 'opal/app/_shared/productTypes';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import { ProductFormComponentBaseProps } from 'opal/app/postim/publiko/_config';
import { useProductDetails } from 'opal/app/postim/publiko/_hooks/useProductDetails';

// TODO: refactor
export const SmartPhonesDetails = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const {
    setDetails
  } = useProductDetails(form);

  const handleSetExtraDetails = (content: string | boolean, field: TECH_PRODUCT_DETAILS) => {
    setDetails(content, PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, field);
  };

  return (
    <div className='grid grid-cols-2 gap-[10px] pt-5' >
      <div>
        <InputTitle>
          RAM
        </InputTitle>
        {/* TODO: add GB in the end */}
        <TextInput
          name={TECH_PRODUCT_DETAILS.RAM}
          onChange={handleSetExtraDetails}
          control={control}
          placeholder='2, 4 ...'
        />
      </div>
      <div className="flex items-center justify-center pt-[22px]" >
        <Checkbox
          name={TECH_PRODUCT_DETAILS.WITH_CHARGER}
          onChange={handleSetExtraDetails}
          placeholder="Me karikues"
        />
      </div>
      <div>
        <InputTitle>
          Hapesira
        </InputTitle>
        {/* TODO: add GB in the end */}
        <TextInput
          name={TECH_PRODUCT_DETAILS.ROM}
          onChange={handleSetExtraDetails}
          control={control}
          placeholder='64, 128 ...'
        />
      </div>
    </div>
  )
}
