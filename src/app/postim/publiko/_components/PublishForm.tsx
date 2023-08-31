'use client';

import { TextInput } from "emeralb/app/_shared/atoms/TextInput/TextInput";

export const PublishForm = () => {
  return (
    <div>
      <TextInput
        value="mateo"
        name="text"
        onChange={console.log}
      />
    </div>
  )
}
