'use client';

import clsx from 'clsx';
import { TextInput } from 'emeralb/app/_shared/atoms/TextInput';
import { font_Inter, font_RedHatDisplay } from 'emeralb/app/_shared/fonts';
import React from 'react';
import { NewProductFormFields, NewProductSchemaType } from '../_formSchema';
import { UseFormReturn } from 'react-hook-form';
import { InputTitle } from './InputTitle';
import { Select } from 'emeralb/app/_shared/atoms/Select';
import { PREFERRED_COMMUNICATION_SELECT_OPTIONS } from '../_config';

interface PublishFormSidebarProps {
  form: UseFormReturn<NewProductSchemaType>
}

export const PublishFormSidebar = ({ form }: PublishFormSidebarProps) => {
  const { setValue } = form;

  const onStringInputChange = (value: string, field: NewProductFormFields) => {
    setValue(field, value);
  };

  return (
    <div className='max-w-xs sticky h-fit top-32 left-0 mr-5' >
      <h2 className={clsx(
        font_RedHatDisplay.className,
        'font-black text-2xl text-grey-100',
        'dark:text-grey-20 mt-3'
      )} >
        Juve jeni?
      </h2>
      <h6 className={clsx(
        font_Inter.className,
        'font-bold text-base text-grey-100 mt-4',
        'dark:text-grey-20'
      )} >
        Informacionet e kontaktit
      </h6>
      <p className={clsx(
        font_Inter.className,
        'font-normal text-base mt-[6px] text-grey-90',
        'dark:text-grey-30'
      )} >
        Prezantohuni duke plotesuar formen e meposhtme:
      </p>
      <div className='mt-4 flex flex-col justify-center items-center gap-3' >
        <div className='w-full' >
          <InputTitle>
            Emer Mbiemer
          </InputTitle>
          <TextInput
            name={NewProductFormFields.fullName}
            onChange={onStringInputChange}
            placeholder='John Doe'
          />
        </div>
        <div className='w-full' >
          <InputTitle>
            Email
          </InputTitle>
          <TextInput
            name={NewProductFormFields.email}
            onChange={onStringInputChange}
            placeholder='johndoe@apple.com'
          />
        </div>
        <div className='w-full' >
          <InputTitle>
            Telefon/Celular
          </InputTitle>
          <TextInput
            name={NewProductFormFields.telephone}
            onChange={onStringInputChange}
            placeholder='+355-123456789'
          />
        </div>
        <div className='w-full' >
          <InputTitle>
            Whatsapp
          </InputTitle>
          <TextInput
            name={NewProductFormFields.whatsapp}
            onChange={onStringInputChange}
            placeholder='+355-123456789'
          />
        </div>
        <div className='w-full' >
          <InputTitle>
            Preferoj te pergjigjem ne:
          </InputTitle>
          <Select
            name={NewProductFormFields.whatsapp}
            // onChange={onStringInputChange}
            // placeholder='+355-123456789'
            values={PREFERRED_COMMUNICATION_SELECT_OPTIONS}
          />
        </div>
      </div>
    </div>
  )
}
