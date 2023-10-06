import React from 'react';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { TECH_PRODUCT_DETAILS } from 'opal/app/_shared/productTypes';
import { Control } from 'react-hook-form';
import { NewProductSchemaType } from 'opal/app/postim/publiko/_formSchema';
import { Checkbox } from 'opal/app/_shared/atoms/Checkbox';

export const LaptopSpecifix = ({
  setDetails,
  control
}: {
  setDetails: (content: string | boolean, field: TECH_PRODUCT_DETAILS) => void;
  control: Control<NewProductSchemaType>
}) => {
  return (
    <div className='grid grid-cols-2 gap-[10px] pt-5' >
      <div>
        <InputTitle>
          Madhesia e ekranit
        </InputTitle>
        {/* TODO: Add inch */}
        <TextInput
          name={TECH_PRODUCT_DETAILS.SCREEN_SIZE}
          onChange={setDetails}
          control={control}
          placeholder='Nvidia, E integruar ...'
        />
      </div>
      <div className="flex items-center justify-center pt-[22px]" >
        <Checkbox
          name={TECH_PRODUCT_DETAILS.WITH_CHARGER}
          onChange={setDetails}
          placeholder="Me karikues"
        />
      </div>
    </div>
  )
}
