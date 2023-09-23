'use client';

import clsx from "clsx";
import { Select } from "emeralb/app/_shared/atoms/Select";
import { TextInput } from "emeralb/app/_shared/atoms/TextInput";
import { font_Inter, font_RedHatDisplay } from "emeralb/app/_shared/fonts";
import { BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS, PRODUCT_CURRENCY_SELECT_OPTIONS } from "../_config";

export const PublishForm = () => {
  return (
    <div className="pt-2 px-[10px]" >
      <h2 className={clsx(
        "text-xl mb-2.5 mt-2 tracking-wide font-bold",
        font_RedHatDisplay.className
      )} >
        Produkti juaj?
      </h2>
      <h6 className={clsx(
        "text-base mb-1 font-semibold text-grey-80",
        font_Inter.className
      )} >
        Titulli
      </h6>
      <p className={clsx(
        "text-xs mb-0.5 font-normal text-grey-70",
        font_Inter.className
      )} >
        Nje titull i shkurter dhe permbledhes mbi produktin tend.
      </p>
      <TextInput
        value="mateo"
        name="text"
        onChange={console.log}
      />
      <div className="pt-2 grid grid-cols-3 mt-3 gap-2" >
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
    </div>
  )
}
