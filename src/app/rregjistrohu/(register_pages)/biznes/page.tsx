'use client';

import clsx from 'clsx';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';
import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { BusinessFormStep, SharedRegisterFormFields, SharedRegisterSchemaType } from '../../_formSchema';
import { RegisterBusinessInfoStep } from './_steps/RegisterBusinessInfoStep';
import { BusinessFormStepComp } from './_steps/BusinessFormStepComp';
import { RegisterBusinessContactStep } from './_steps/RegisterBusinessContactStep';

export default function NewBusinessForm() {
  const form = useFormContext<SharedRegisterSchemaType>();

  const formStep = useWatch({
    control: form.control,
    name: SharedRegisterFormFields.formStep,
    defaultValue: BusinessFormStep.GENERAL_INFO
  });

  return (
    <div className='h-full' >
      <h1 className={clsx(
        font_RedHatDisplay.className,
        'text-grey-95 text-2xl text-center dark:text-grey-5'
      )} >
        Rregjistrohu si Dyqan/Biznes
      </h1>
      <div className='grid grid-cols-[min-content_1px_1fr] gap-5 mt-4 max-tablet-xs:grid-cols-1 max-tablet-xs:gap-0' >
        <BusinessFormStepComp
          control={form.control}
        />
        <div className='my-4 bg-grey-20 dark:bg-grey-85 max-tablet-xs:hidden' />
        <div className='pt-6' >
          {formStep === BusinessFormStep.GENERAL_INFO && (
            <RegisterBusinessInfoStep
              form={form}
            />
          )}
          {formStep === BusinessFormStep.CONTACT && (
            <RegisterBusinessContactStep
              form={form}
            />
          )}
        </div>
      </div>
    </div>
  )
}
