import React, { useEffect } from 'react';
import clsx from 'clsx';
import { font_Inter } from 'emeralb/app/_shared/fonts';
import { Select, SelectValues } from 'emeralb/app/_shared/atoms/Select';
import { NewProductFormFields, NewProductSchemaType, newProductSchema } from '../_formSchema';
import { BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS, PRODUCT_SUBCATEGORIES_MAP } from '../_config';
import { Control, UseFormGetValues, useWatch } from 'react-hook-form';
import { PRODUCT_CATEGORIES } from '@prisma/client';

interface FormCategorySegmentProps {
  onInputChange: (value: string, name: NewProductFormFields) => void;
  formControl: Control<NewProductSchemaType>;
  getValues: UseFormGetValues<NewProductSchemaType>;
}

export const FormCategorySegment = ({
  onInputChange,
  formControl,
  getValues
}: FormCategorySegmentProps) => {
  const selectedCategory = useWatch({
    control: formControl,
    name: NewProductFormFields.category,
    defaultValue: BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS.APARTMENT.value
  });

  const productSubcategories = PRODUCT_SUBCATEGORIES_MAP[selectedCategory] as SelectValues<PRODUCT_CATEGORIES>;

  useEffect(() => {
    const currentSubCategoryFields = PRODUCT_SUBCATEGORIES_MAP[selectedCategory];
    const currentSubCategoriesKeys = Object.keys(currentSubCategoryFields);
    const currentSubCategory = getValues(NewProductFormFields.subCategory);

    if (!currentSubCategoriesKeys.includes(currentSubCategory)) {
      const firstSubcategoryInMap = Object.values(currentSubCategoryFields)?.[0];
      onInputChange(firstSubcategoryInMap.value, NewProductFormFields.subCategory)
    }
  }, [getValues, onInputChange, selectedCategory]);

  return (
    <>
      <div>
        <p className={clsx(
          font_Inter.className,
          'text-sm font-medium mb-1 text-center',
          'dark:text-grey-20'
        )} >
          Kategori
        </p>
        <Select
          name={NewProductFormFields.category}
          values={BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS}
          initialValue={selectedCategory}
          onSelect={onInputChange}
        />
      </div>
      <div>
        <p className={clsx(
          font_Inter.className,
          'text-sm font-medium mb-1 text-center',
          'dark:text-grey-20'
        )} >
          Nenkategori
        </p>
        <Select
          name={NewProductFormFields.subCategory}
          values={productSubcategories}
          onSelect={onInputChange}
        />
      </div>
    </>
  )
}
