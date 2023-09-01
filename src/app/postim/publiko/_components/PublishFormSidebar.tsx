'use client';

import clsx from 'clsx';
import { TextInput } from 'emeralb/app/_shared/atoms/TextInput';
import { font_Inter, font_RedHatDisplay } from 'emeralb/app/_shared/fonts';
import React from 'react';

export const PublishFormSidebar = () => {
  return (
    <div className='max-w-xs sticky top-32 left-0 mr-5' >
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
        <TextInput
          name='full_name'
          onChange={console.log}
          value=''
          placeholder='Emer Mbiemer'
        />
        <TextInput
          name='email'
          onChange={console.log}
          value=''
          placeholder='Email'
        />
        <TextInput
          name='mobile'
          onChange={console.log}
          value=''
          placeholder='Telefon/Celular'
        />
        <TextInput
          name='whatsapp'
          onChange={console.log}
          value=''
          placeholder='Whatsapp'
        />
      </div>
    </div>
  )
}
