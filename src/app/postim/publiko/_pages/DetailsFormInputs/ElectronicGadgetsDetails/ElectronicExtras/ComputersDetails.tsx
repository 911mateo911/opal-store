import React from 'react';
import { ProductFormComponentBaseProps } from 'opal/app/postim/publiko/_config';
import { useProductDetails } from 'opal/app/postim/publiko/_hooks/useProductDetails';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import {
  COMPUTER_PRODUCT_DETAILS,
  PRODUCT_DETAIL_FIELD
} from 'opal/app/_shared/productTypes';
import { PRODUCT_SUBCATEGORIES } from '@prisma/client';
import { LaptopSpecifix } from './LaptopSpecific';

interface ComputersDetailsProps extends ProductFormComponentBaseProps {
  formSubcategory: PRODUCT_SUBCATEGORIES;
}

export const ComputersDetails = ({ form, formSubcategory }: ComputersDetailsProps) => {
  const { control } = form;

  const {
    setDetails
  } = useProductDetails(form);

  const handleSetExtraDetails = (content: string | boolean, field: COMPUTER_PRODUCT_DETAILS) => {
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
            name={COMPUTER_PRODUCT_DETAILS.CPU}
            onChange={handleSetExtraDetails}
            control={control}
            placeholder='AMD, Intel ...'
          />
        </div>
        <div>
          <InputTitle>
            RAM
          </InputTitle>
          {/* TODO: add GB in the end */}
          <TextInput
            name={COMPUTER_PRODUCT_DETAILS.RAM}
            onChange={handleSetExtraDetails}
            control={control}
            placeholder='2, 4 ...'
          />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-[10px] pt-5' >
        <div>
          <InputTitle>
            Karta Grafike
          </InputTitle>
          <TextInput
            name={COMPUTER_PRODUCT_DETAILS.GPU}
            onChange={handleSetExtraDetails}
            control={control}
            placeholder='Nvidia, E integruar ...'
          />
        </div>
        <div>
          <InputTitle>
            Harddisk
          </InputTitle>
          {/* TODO: add GB in the end */}
          <TextInput
            name={COMPUTER_PRODUCT_DETAILS.ROM}
            onChange={handleSetExtraDetails}
            control={control}
            placeholder='256, 512 ...'
          />
        </div>
      </div>
      {formSubcategory === PRODUCT_SUBCATEGORIES.ELECTRONICS__LAPTOPS && (
        <LaptopSpecifix
          control={control}
          setDetails={handleSetExtraDetails}
        />
      )}
    </>
  )
}
