import React from 'react';
import { ProductFormComponentBaseProps } from 'opal/app/postim/publiko/_config';
import { useProductDetails } from 'opal/app/postim/publiko/_hooks/useProductDetails';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import {
  TECH_PRODUCT_DETAILS,
  PRODUCT_DETAIL_FIELD
} from 'opal/app/_shared/productTypes';
import { PRODUCT_SUBCATEGORIES } from '@prisma/client';
import { LaptopSpecifix } from './Specifics/LaptopSpecific';
import { buildDetailInputErrorPath } from 'opal/app/postim/publiko/_helpers/buildDetailInputErrorPath';
import { computersDetailsSchema } from './config';

interface ComputersDetailsProps extends ProductFormComponentBaseProps {
  formSubcategory: PRODUCT_SUBCATEGORIES;
}

export const ComputersDetails = ({ form, formSubcategory }: ComputersDetailsProps) => {
  const { control } = form;

  const {
    setDetails,
    onInputBlur,
    details
  } = useProductDetails(form, computersDetailsSchema);

  const handleSetExtraDetails = (content: string | number | boolean, field: TECH_PRODUCT_DETAILS) => {
    setDetails(content, PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, field);
  };

  return (
    <>
      <div className='grid grid-cols-2 gap-[10px] pt-5' >
        <div>
          <InputTitle>
            Procesori
          </InputTitle>
          <TextInput
            name={TECH_PRODUCT_DETAILS.CPU}
            onChange={handleSetExtraDetails}
            control={control}
            placeholder='AMD, Intel ...'
            defaultValue={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]}
            errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, { extraField: TECH_PRODUCT_DETAILS.CPU })}
            context={PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA}
            onBlur={onInputBlur}
          />
        </div>
        <div>
          <InputTitle>
            RAM
          </InputTitle>
          <TextInput
            name={TECH_PRODUCT_DETAILS.RAM}
            onChange={handleSetExtraDetails}
            control={control}
            placeholder='2, 4 ...'
            adornment='(GB)'
            defaultValue={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]}
            errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, { extraField: TECH_PRODUCT_DETAILS.RAM })}
            type='number'
            context={PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA}
            onBlur={onInputBlur}
          />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-[10px] pt-5' >
        <div>
          <InputTitle>
            Karta Grafike
          </InputTitle>
          <TextInput
            name={TECH_PRODUCT_DETAILS.GPU}
            onChange={handleSetExtraDetails}
            control={control}
            placeholder='Nvidia, E integruar ...'
            defaultValue={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]}
            errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, { extraField: TECH_PRODUCT_DETAILS.GPU })}
            context={PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA}
            onBlur={onInputBlur}
          />
        </div>
        <div>
          <InputTitle>
            Harddisk
          </InputTitle>
          <TextInput
            name={TECH_PRODUCT_DETAILS.ROM}
            onChange={handleSetExtraDetails}
            control={control}
            placeholder='256, 512 ...'
            adornment='(GB)'
            defaultValue={details[PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]}
            errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA, { extraField: TECH_PRODUCT_DETAILS.ROM })}
            type='number'
            context={PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA}
            onBlur={onInputBlur}
          />
        </div>
      </div>
      {formSubcategory === PRODUCT_SUBCATEGORIES.ELECTRONICS__LAPTOPS && (
        <LaptopSpecifix
          form={form}
        />
      )}
    </>
  )
}
