import React from 'react';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD, TECH_PRODUCT_DETAILS } from 'opal/app/_shared/productTypes';
import { Checkbox } from 'opal/app/_shared/atoms/Checkbox';
import { ProductFormComponentBaseProps } from 'opal/app/postim/publiko/_config';
import { useProductDetails } from 'opal/app/postim/publiko/_hooks/useProductDetails';
import { laptopDetailsSchema } from './config';
import { buildDetailInputErrorPath } from 'opal/app/postim/publiko/_helpers/buildDetailInputErrorPath';

export const LaptopSpecifix = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const {
    setDetails,
    onInputBlur,
    details
  } = useProductDetails(form, laptopDetailsSchema);

  const handleSetExtraDetails = (content: string | number | boolean, field: TECH_PRODUCT_DETAILS) => {
    setDetails(content, PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, field);
  };

  return (
    <div className='grid grid-cols-2 gap-[10px] pt-5' >
      <div>
        <InputTitle>
          Madhesia e ekranit
        </InputTitle>
        <TextInput
          name={TECH_PRODUCT_DETAILS.SCREEN_SIZE}
          onChange={handleSetExtraDetails}
          control={control}
          placeholder='18, 21 ...'
          adornment='"(inch)'
          type='number'
          defaultValue={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]}
          errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, { extraField: TECH_PRODUCT_DETAILS.SCREEN_SIZE })}
          context={PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA}
          onBlur={onInputBlur}
        />
      </div>
      <div className="flex items-center justify-center pt-[22px]" >
        <Checkbox
          name={TECH_PRODUCT_DETAILS.WITH_CHARGER}
          onChange={handleSetExtraDetails}
          placeholder="Me karikues"
        />
      </div>
    </div>
  )
}
