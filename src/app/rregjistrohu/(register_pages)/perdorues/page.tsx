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
    <div>
      <h1 className={clsx(
        font_RedHatDisplay.className,
        'text-grey-95 text-2xl text-center'
      )} >
        Perdorues i ri
      </h1>
      <div className='flex items-stretch justify-between gap-8' >
        <ProfilePictureInput
          imageSrc={UserIcon}
          control={control}
          setValue={setValue}
        />
        <div className='grid grid-cols-2 gap-8 mt-8 w-full' >
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
        </div>
      </div>
    </div>
  )
}
