'use client';

import clsx from "clsx";
import { TextInput } from "emeralb/app/_shared/atoms/TextInput";
import { font_Inter, font_RedHatDisplay } from "emeralb/app/_shared/fonts";

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
      <div className="pt-2 grid grid-cols-3" >
      </div>
    </div>
  )
}
