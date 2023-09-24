'use client';

import clsx from "clsx";
import { Select } from "emeralb/app/_shared/atoms/Select";
import { TextInput } from "emeralb/app/_shared/atoms/TextInput";
import { font_Inter, font_RedHatDisplay } from "emeralb/app/_shared/fonts";
import { BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS, PRODUCT_CURRENCY_SELECT_OPTIONS } from "../_config";
import { FormSectionTitle } from "./FormSectionTitle";
import { useForm } from "react-hook-form";
import { NewProductFormFields, NewProductSchemaType, newProductSchema } from "../_formConfig";
import { zodResolver } from "@hookform/resolvers/zod";

export const PublishForm = () => {
  const {
    setValue
  } = useForm<NewProductSchemaType>({
    resolver: zodResolver(newProductSchema),
  });

  const onStringInputChange = (value: string, field: NewProductFormFields) => {
    setValue(field, value);
  };

  return (
    <div className="pt-2 px-[10px]" >
      <h2 className={clsx(
        "text-xl mb-2.5 mt-2 tracking-wide font-bold",
        font_RedHatDisplay.className
      )} >
        Produkti juaj?
      </h2>
      <FormSectionTitle>
        Titulli
      </FormSectionTitle>
      <p className={clsx(
        "text-xs mb-0.5 font-normal text-grey-70",
        font_Inter.className
      )} >
        Nje titull i shkurter dhe permbledhes mbi produktin tend.
      </p>
      <TextInput<NewProductFormFields.title>
        name={NewProductFormFields.title}
        onChange={onStringInputChange}
      />
      <div className="pt-9 grid grid-cols-3 mt-3 gap-2" >
        <div>
          <p className={clsx(
            font_Inter.className,
            'text-sm font-medium mb-1 text-center'
          )} >
            Kategori
          </p>
          <Select
            values={BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS}
            selectedValueKey='APARTMENT'
          />
        </div>
        <div>
          <p className={clsx(
            font_Inter.className,
            'text-sm font-medium mb-1 text-center'
          )} >
            Nenkategori
          </p>
          <Select
            values={PRODUCT_CURRENCY_SELECT_OPTIONS}
            selectedValueKey='USD'
          />
        </div>
        <div>
          <p className={clsx(
            font_Inter.className,
            'text-sm font-medium mb-1 text-center'
          )} >
            Monedha
          </p>
          <Select
            values={PRODUCT_CURRENCY_SELECT_OPTIONS}
            selectedValueKey='USD'
          />
        </div>
      </div>
      <div className="pt-4" >
        <FormSectionTitle>
          Ngarko Imazhe
        </FormSectionTitle>
      </div>
    </div>
  )
}
