'use client';

import clsx from 'clsx';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { font_Inter, font_RedHatDisplay } from 'opal/app/_shared/fonts';
import React from 'react';
import { NewProductFormFields, NewProductSchemaType } from '../_formSchema';
import { InputTitle } from './InputTitle';
import { ProductFormComponentBaseProps } from '../_config';

export const PublishFormSidebar = ({ form }: ProductFormComponentBaseProps) => {
  const { setValue, control, trigger } = form;

  const onStringInputChange = (value: string, field: NewProductFormFields) => {
    setValue(field, value);
  };

  const onInputBlur = (field: NewProductFormFields) => trigger(field);

  return (
    <div className='max-w-xs sticky h-fit top-28 left-0 mr-5' >
      <h2 className={clsx(
        font_RedHatDisplay.className,
        'font-black text-2xl text-grey-100',
        'dark:text-grey-20 mt-3'
      )} >
        Juve jeni?
      </h2>
      <h6 className={clsx(
        font_Inter.className,
        'font-bold text-base text-grey-100 mt-2',
        'dark:text-grey-20'
      )} >
        Informacionet e kontaktit
      </h6>
      <p className={clsx(
        font_RedHatDisplay.className,
        'text-sm tracking-wider font-light text-grey-80 dark:text-grey-20 mt-2'
      )} >
        Prezantohuni duke plotesuar formen e meposhtme:
      </p>
      <div className='mt-4 flex flex-col justify-center items-center gap-5' >
        <div className='w-full mt-0.5' >
          <InputTitle>
            Emer Mbiemer
          </InputTitle>
          <TextInput<NewProductFormFields.fullName, NewProductSchemaType>
            name={NewProductFormFields.fullName}
            onChange={onStringInputChange}
            placeholder='John Doe'
            control={control}
            onBlur={onInputBlur}
          />
        </div>
        <div className='w-full' >
          <InputTitle>
            Email
          </InputTitle>
          <TextInput<NewProductFormFields.email, NewProductSchemaType>
            name={NewProductFormFields.email}
            onChange={onStringInputChange}
            placeholder='johndoe@apple.com'
            control={control}
            onBlur={onInputBlur}
          />
        </div>
        <div className='w-full' >
          <InputTitle>
            Telefon/Celular
          </InputTitle>
          <TextInput<NewProductFormFields.telephone, NewProductSchemaType>
            name={NewProductFormFields.telephone}
            onChange={onStringInputChange}
            placeholder='+355-123456789'
            control={control}
            onBlur={onInputBlur}
          />
        </div>
        <div className='w-full' >
          <InputTitle>
            Whatsapp
          </InputTitle>
          <TextInput<NewProductFormFields.whatsapp, NewProductSchemaType>
            name={NewProductFormFields.whatsapp}
            onChange={onStringInputChange}
            placeholder='+355-123456789'
            control={control}
            onBlur={onInputBlur}
          />
        </div>
      </div>
    </div>
  )
}
