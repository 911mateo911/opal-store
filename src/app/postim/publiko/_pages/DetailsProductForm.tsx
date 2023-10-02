import React from 'react';
import { ProductFormComponentBaseProps } from '../_config';
import { FormSectionTitle } from '../_components/FormSectionTitle';
import { CarDetails } from './DetailsFormInputs/CarDetails/CarDetails';

export const DetailsProductForm = ({ form }: ProductFormComponentBaseProps) => {
  return (
    <div>
      <FormSectionTitle >
        Detaje
      </FormSectionTitle>
      <CarDetails
        form={form}
      />
    </div>
  )
}
