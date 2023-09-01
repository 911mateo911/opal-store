'use client';

import { TextInput } from "emeralb/app/_shared/atoms/TextInput";

export const PublishForm = () => {
  return (
    <div className="pt-2 px-[10px]" >
      <h2>
        Produkti juaj?
      </h2>
      <h6>
        Titulli
      </h6>
      <TextInput
        value="mateo"
        name="text"
        onChange={console.log}
      />
    </div>
  )
}
