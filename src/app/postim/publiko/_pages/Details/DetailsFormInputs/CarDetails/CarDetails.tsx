import React from 'react';
import { ProductFormComponentBaseProps } from '../../../../_config';
import { useProductDetails } from '../../../../_hooks/useProductDetails';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { PRODUCT_DETAIL_FIELD } from 'opal/app/_shared/productTypes';
import { InputTitle } from '../../../../_components/InputTitle';
import { Select } from 'opal/app/_shared/atoms/Select';
import {
  CAR_DETAILS_FUEL_TYPE_SELECT_OPTIONS,
  CAR_DETAILS_PLATE_TYPE_SELECT_OPTIONS,
  CAR_DETAILS_TRANSMISSION_SELECT_OPTIONS,
  CAR_DETAILS_YEAR_SELECT_OPTIONS,
  carDetailsSchema,
  currentYear
} from './config';
import { buildDetailInputErrorPath } from 'opal/app/postim/publiko/_helpers/buildDetailInputErrorPath';
import { FormDoubleInputSectionWrapper } from 'opal/app/postim/publiko/_components/FormDoubleInputSectionWrapper';

export const CarDetails = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const {
    setDetails,
    details,
    onInputBlur
  } = useProductDetails(form, carDetailsSchema);

  // TODO: add default values
  return (
    <div>
      <FormDoubleInputSectionWrapper>
        <div>
          <InputTitle>
            Marka
          </InputTitle>
          <TextInput
            name={PRODUCT_DETAIL_FIELD.CAR_MAKE}
            onChange={setDetails}
            control={control}
            defaultValue={details[PRODUCT_DETAIL_FIELD.CAR_MAKE]}
            placeholder='BMW, Audi...'
            onBlur={onInputBlur}
            errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.CAR_MAKE)}
          />
        </div>
        <div>
          <InputTitle>
            Modeli
          </InputTitle>
          <TextInput
            name={PRODUCT_DETAIL_FIELD.CAR_MODEL}
            onChange={setDetails}
            control={control}
            defaultValue={details[PRODUCT_DETAIL_FIELD.CAR_MODEL]}
            placeholder='X5, Q7...'
            onBlur={onInputBlur}
            errorPath={buildDetailInputErrorPath(PRODUCT_DETAIL_FIELD.CAR_MODEL)}
          />
        </div>
      </FormDoubleInputSectionWrapper>
      <FormDoubleInputSectionWrapper stacked >
        <div>
          <InputTitle>
            Viti i prodhimit
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.CAR_YEAR}
            values={CAR_DETAILS_YEAR_SELECT_OPTIONS}
            initialValue={currentYear.toString()}
            onSelect={setDetails}
            numeric
          />
        </div>
        <div>
          <InputTitle>
            Tranmisioni
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.CAR_TRANSMISSION}
            values={CAR_DETAILS_TRANSMISSION_SELECT_OPTIONS}
            initialValue={details?.[PRODUCT_DETAIL_FIELD.CAR_TRANSMISSION]}
            onSelect={setDetails}
          />
        </div>
      </FormDoubleInputSectionWrapper>
      <FormDoubleInputSectionWrapper stacked >
        <div>
          <InputTitle>
            Karburanti
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.CAR_FUEL}
            values={CAR_DETAILS_FUEL_TYPE_SELECT_OPTIONS}
            initialValue={details?.[PRODUCT_DETAIL_FIELD.CAR_FUEL]}
            onSelect={setDetails}
          />
        </div>
        <div>
          <InputTitle>
            Tipi i targes
          </InputTitle>
          <Select
            name={PRODUCT_DETAIL_FIELD.CAR_PLATE}
            values={CAR_DETAILS_PLATE_TYPE_SELECT_OPTIONS}
            initialValue={details?.[PRODUCT_DETAIL_FIELD.CAR_PLATE]}
            onSelect={setDetails}
          />
        </div>
      </FormDoubleInputSectionWrapper>
    </div>
  )
}
