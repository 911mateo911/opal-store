import React, { useEffect } from 'react';
import { Select, SelectValues } from 'opal/app/_shared/atoms/Select';
import { NewProductFormFields, NewProductSchemaType } from '../_formSchema';
import { BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS, PRODUCT_SUBCATEGORIES_MAP } from '../_config';
import { Control, UseFormGetValues, UseFormSetValue, useWatch } from 'react-hook-form';
import { PRODUCT_SUBCATEGORIES } from '@prisma/client';
import { InputTitle } from './InputTitle';

interface FormCategorySegmentProps {
  onInputChange: (value: string | boolean, name: NewProductFormFields) => void;
  formControl: Control<NewProductSchemaType>;
  getValues: UseFormGetValues<NewProductSchemaType>;
  setValue: UseFormSetValue<NewProductSchemaType>;
}

export const FormCategorySegment = ({
  onInputChange,
  formControl,
  getValues,
  setValue
}: FormCategorySegmentProps) => {
  const selectedCategory = useWatch({
    control: formControl,
    name: NewProductFormFields.category,
    defaultValue: BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS.APARTMENT.value
  });

  const productSubcategories = PRODUCT_SUBCATEGORIES_MAP[selectedCategory] as SelectValues<PRODUCT_SUBCATEGORIES>;

  useEffect(() => {
    const currentSubCategoryFields = PRODUCT_SUBCATEGORIES_MAP[selectedCategory];
    const currentSubCategoriesKeys = Object.keys(currentSubCategoryFields);
    const currentSubCategory = getValues(NewProductFormFields.subCategory);

    if (!currentSubCategoriesKeys.includes(currentSubCategory)) {
      const firstSubcategoryInMap = Object.values(currentSubCategoryFields)?.[0];
      onInputChange(firstSubcategoryInMap.value, NewProductFormFields.subCategory);
      onInputChange(Boolean(firstSubcategoryInMap.hasNextStep), NewProductFormFields.hasNextStep);
    }
  }, [getValues, onInputChange, selectedCategory]);

  const handleSubCategoryChange: FormCategorySegmentProps['onInputChange'] = (value, name) => {
    const subCategory = PRODUCT_SUBCATEGORIES_MAP[selectedCategory][value as PRODUCT_SUBCATEGORIES];

    onInputChange(value, name);
    onInputChange(Boolean(subCategory?.hasNextStep), NewProductFormFields.hasNextStep);
    if (subCategory?.initialValues) {
      // TODO: use some damn cache
      setValue(NewProductFormFields.details, {});
    };
  };

  return (
    <div className="pt-1.5 grid grid-cols-2 mt-3 gap-[10px]" >
      <div>
        <InputTitle center >
          Kategori
        </InputTitle>
        <Select
          name={NewProductFormFields.category}
          values={BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS}
          initialValue={selectedCategory}
          onSelect={onInputChange}
        />
      </div>
      <div>
        <InputTitle center >
          Nenkategori
        </InputTitle>
        <Select
          name={NewProductFormFields.subCategory}
          values={productSubcategories}
          onSelect={handleSubCategoryChange}
          initialValue={getValues(NewProductFormFields.subCategory)}
        />
      </div>
    </div>
  )
}
