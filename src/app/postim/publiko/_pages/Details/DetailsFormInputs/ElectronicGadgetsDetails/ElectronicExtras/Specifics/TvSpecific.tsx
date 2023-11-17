import React from 'react';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD, TECH_PRODUCT_DETAILS } from 'opal/app/_shared/productTypes';
import { ProductFormComponentBaseProps } from 'opal/app/postim/publiko/_config';
import { useProductDetails } from 'opal/app/postim/publiko/_hooks/useProductDetails';
import { Select } from 'opal/app/_shared/atoms/Select';
import { tvDetailsSchema, TV_DETAILS_SCREEN_RES_TYPE_SELECT_OPTIONS } from './config';
import { buildDetailInputErrorPath } from 'opal/app/postim/publiko/_helpers/buildDetailInputErrorPath';
import { FormDoubleInputSectionWrapper } from 'opal/app/postim/publiko/_components/FormDoubleInputSectionWrapper';

export const TvSpecific = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const {
    setDetails,
    details,
    onInputBlur
  } = useProductDetails(form, tvDetailsSchema);

  const handleSetExtraDetails = (content: string | number, field: TECH_PRODUCT_DETAILS) => {
    setDetails(content, PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, field);
  };

  return (
    <FormDoubleInputSectionWrapper stacked >
      <div>
        <InputTitle>
          Rezolucioni
        </InputTitle>
        <Select
          name={TECH_PRODUCT_DETAILS.SCREEN_RES}
          values={TV_DETAILS_SCREEN_RES_TYPE_SELECT_OPTIONS}
          onSelect={handleSetExtraDetails}
          initialValue={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]}
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
          type='number'
          defaultValue={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]}
          errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, { extraField: TECH_PRODUCT_DETAILS.SCREEN_SIZE })}
          context={PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA}
          onBlur={onInputBlur}
        />
      </div>
    </FormDoubleInputSectionWrapper>
  )
}
