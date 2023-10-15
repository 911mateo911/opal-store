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
import { computersDetailsSchema } from '../config';

interface ComputersDetailsProps extends ProductFormComponentBaseProps {
  formSubcategory: PRODUCT_SUBCATEGORIES;
}

export const ComputersDetails = ({ form, formSubcategory }: ComputersDetailsProps) => {
  const { control } = form;

  const {
    setDetails
  } = useProductDetails(form, computersDetailsSchema);

  const handleSetExtraDetails = (content: string | boolean, field: TECH_PRODUCT_DETAILS) => {
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
