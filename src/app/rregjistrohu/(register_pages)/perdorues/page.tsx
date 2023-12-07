'use client';

import clsx from 'clsx';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ProfilePictureInput } from '../../_components/ProfilePictureInput';
import UserIcon from 'opal/app/_shared/icons/user.svg?url';
import {
  SharedRegisterFormFields,
  UserRegisterFormField,
  registerUserSchema,
  registerUserSchemaInitialValue
} from '../../_formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilledChipButton } from 'opal/app/_shared/atoms/FilledChipButton';

// TODO: maybe add some more info below the heading
export default function NewUserForm() {
  const {
    control,
    setValue,
    trigger
  } = useForm({
    defaultValues: registerUserSchemaInitialValue,
    resolver: zodResolver(registerUserSchema)
  });

  const onInputChange = (value: string | number, field: UserRegisterFormField | SharedRegisterFormFields) => {
    setValue(field, value.toString());
  };

  const onInputBlur = (field: UserRegisterFormField | SharedRegisterFormFields) => trigger(field);

  return (
    <div className='' >
      <h1 className={clsx(
        font_RedHatDisplay.className,
        'text-grey-95 text-2xl text-center dark:text-grey-5'
      )} >
        Perdorues i ri
      </h1>
      <div className='flex justify-between gap-8 mt-6 max-tablet-md:gap-4 max-tablet-xs:flex-col max-tablet-xs:mt-4' >
        <ProfilePictureInput
          imageSrc={UserIcon}
          control={control}
          setValue={setValue}
          className='max-tablet-xs:mx-auto'
        />
        <div>
          <div className='grid grid-cols-2 gap-x-8 gap-y-4 w-full h-fit max-tablet-md:gap-x-4 max-tablet-md:gap-y-3.5 max-mobile-md:grid-cols-1' >
            <div>
              <InputTitle>
                Emer Mbiemer
              </InputTitle>
              <TextInput
                name={UserRegisterFormField.fullName}
                onChange={onInputChange}
                onBlur={onInputBlur}
                control={control}
                placeholder='Emer Mbiemer'
              />
            </div>
            <div>
              <InputTitle>
                Email
              </InputTitle>
              <TextInput
                name={SharedRegisterFormFields.email}
                onChange={onInputChange}
                onBlur={onInputBlur}
                control={control}
                placeholder='johndoe@apple.com'
              />
            </div>
            <div>
              <InputTitle>
                Password
              </InputTitle>
              <TextInput
                name={SharedRegisterFormFields.password}
                onChange={onInputChange}
                onBlur={onInputBlur}
                control={control}
                placeholder='********'
                type='password'
              />
            </div>
            <div>
              <InputTitle>
                Konfirmo password-in
              </InputTitle>
              <TextInput
                name={SharedRegisterFormFields.confirm_password}
                onChange={onInputChange}
                onBlur={onInputBlur}
                control={control}
                placeholder='********'
                type='password'
              />
            </div>
            <div className='w-full' >
              <InputTitle>
                Telefon/Celular
              </InputTitle>
              <TextInput
                name={SharedRegisterFormFields.telephone}
                onChange={onInputChange}
                placeholder='+355-123456789'
                control={control}
                onBlur={onInputBlur}
                type='number'
                dontValidateNumber
              />
            </div>
            <div className='w-full' >
              <InputTitle>
                Whatsapp
              </InputTitle>
              <TextInput
                name={SharedRegisterFormFields.whatsapp}
                onChange={onInputChange}
                placeholder='+355-123456789'
                control={control}
                onBlur={onInputBlur}
                type='number'
                dontValidateNumber
              />
            </div>
          </div>
          <FilledChipButton
            text='Vazhdo'
            onClick={console.log}
            className='mt-6 mx-auto w-64 justify-center'
          />
        </div>
      </div>
    </div>
  )
}
