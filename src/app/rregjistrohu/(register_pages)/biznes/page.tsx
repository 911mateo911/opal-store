'use client';

import clsx from 'clsx';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';
import React from 'react';
import { CoverPictureInput } from '../../_components/CoverPictureInput';
import { useFormContext } from 'react-hook-form';
import { SharedRegisterSchemaType } from '../../_formSchema';

export default function NewBusinessForm() {
  const { control, setValue } = useFormContext<SharedRegisterSchemaType>();

  return (
    <div>
      <h1 className={clsx(
        font_RedHatDisplay.className,
        'text-grey-95 text-2xl text-center dark:text-grey-5'
      )} >
        Rregjistrohu si Dyqan/Biznes
      </h1>
      <CoverPictureInput
        className='mt-6'
        control={control}
        setValue={setValue}
      />
    </div>
  )
}
