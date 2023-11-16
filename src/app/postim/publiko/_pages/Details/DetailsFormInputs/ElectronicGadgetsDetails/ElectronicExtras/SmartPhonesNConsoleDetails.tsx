import React from 'react';
import { Checkbox } from 'opal/app/_shared/atoms/Checkbox';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD, TECH_PRODUCT_DETAILS } from 'opal/app/_shared/productTypes';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import { ProductFormComponentBaseProps } from 'opal/app/postim/publiko/_config';
import { useProductDetails } from 'opal/app/postim/publiko/_hooks/useProductDetails';
import { PRODUCT_SUBCATEGORIES } from '@prisma/client';
import { smartphonesNConsoleDetailsSchema } from './config';
import { buildDetailInputErrorPath } from 'opal/app/postim/publiko/_helpers/buildDetailInputErrorPath';
import { FormDoubleInputSectionWrapper } from 'opal/app/postim/publiko/_components/FormDoubleInputSectionWrapper';

interface SmartPhonesNConsoleDetailsProps extends ProductFormComponentBaseProps {
  formSubcategory: PRODUCT_SUBCATEGORIES;
};

// TODO: refactor
export const SmartPhonesNConsoleDetails = ({ form, formSubcategory }: SmartPhonesNConsoleDetailsProps) => {
  const { control } = form;

  const {
    setDetails,
    details,
    onInputBlur
  } = useProductDetails(form, smartphonesNConsoleDetailsSchema);

  const handleSetExtraDetails = (content: string | number | boolean, field: TECH_PRODUCT_DETAILS) => {
    setDetails(content, PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, field);
  };

  return (
    <FormDoubleInputSectionWrapper stacked >
      <div>
        <InputTitle>
          Hapesira
        </InputTitle>
        <TextInput
          name={TECH_PRODUCT_DETAILS.ROM}
          onChange={handleSetExtraDetails}
          control={control}
          placeholder='64, 128 ...'
          adornment='(GB)'
          defaultValue={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]}
          errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, { extraField: TECH_PRODUCT_DETAILS.ROM })}
          type='number'
          context={PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA}
          onBlur={onInputBlur}
        />
      </div>
      {formSubcategory !== PRODUCT_SUBCATEGORIES.ELECTRONICS__CONSOLES && (
        <div className="flex items-center justify-center pt-[22px] max-tablet-sm:pt-2.5" >
          <Checkbox
            name={TECH_PRODUCT_DETAILS.WITH_CHARGER}
            onChange={handleSetExtraDetails}
            placeholder="Me karikues"
            defaultChecked={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]}
            centerMobile
          />
        </div>
      )}
    </FormDoubleInputSectionWrapper>
  )
}
