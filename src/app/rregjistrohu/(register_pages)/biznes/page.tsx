'use client';

import clsx from 'clsx';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SharedRegisterSchemaType } from '../../_formSchema';
import { RegisterBusinessInfoStep } from './_steps/RegisterBusinessInfoStep';
import { BusinessFormStepComp } from './_steps/BusinessFormStepComp';

export default function NewBusinessForm() {
  const form = useFormContext<SharedRegisterSchemaType>();

  return (
    <div className='h-full' >
      <h1 className={clsx(
        font_RedHatDisplay.className,
        'text-grey-95 text-2xl text-center dark:text-grey-5'
      )} >
        Rregjistrohu si Dyqan/Biznes
      </h1>
      <div className='grid grid-cols-[min-content_1px_1fr] gap-5 mt-4' >
        <BusinessFormStepComp
          control={form.control}
        />
        <div className='my-4 bg-grey-20 dark:bg-grey-85' />
        <div className='pt-6' >
          <RegisterBusinessInfoStep
            form={form}
          />
        </div>
      </div>
      {/* <CoverPictureInput
        className='mt-6'
        control={control}
        setValue={setValue}
      />
      <div className='w-full mt-8' >
        <p
          className={clsx(
            font_RedHatDisplay.className,
            'text-grey-90 text-sm text-center font-semibold dark:text-grey-10 pb-8'
          )}
        >
          Informacion
        </p>
        <ProfilePictureInput
          className='rounded-md'
          control={control}
          setValue={setValue}
          imageClass='rounded-md'
        />
      </div> */}
    </div>
  )
}
