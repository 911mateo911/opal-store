'use client';

import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormFields, loginSchema, loginSchemaInitialValues } from './_formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputTitle } from '../postim/publiko/_components/InputTitle';
import { FilledChipButton } from '../_shared/atoms/FilledChipButton';
import { TextInput } from '../_shared/atoms/TextInput';

interface LoginFormProps {
  children: ReactNode;
};

export const LoginForm = ({ children }: LoginFormProps) => {
  const form = useForm({
    defaultValues: loginSchemaInitialValues,
    resolver: zodResolver(loginSchema)
  });

  const onInputBlur = (field: LoginFormFields) => form.trigger(field);

  const onInputChange = (value: string | number, field: LoginFormFields) => {
    form.setValue(field, value.toString());
  };

  return (
    <div className="w-96 grid gap-3.5 relative ml-auto max-tablet-sm:mx-auto max-tablet-sm:mt-6 max-mobile-slg:w-full">
      <div>
        <InputTitle>
          Username/Email
        </InputTitle>
        <TextInput
          name={LoginFormFields.emailOrUsername}
          placeholder="email@provider.com"
          onChange={onInputChange}
          control={form.control}
          onBlur={onInputBlur}
        />
      </div>
      <div>
        <InputTitle>
          Password
        </InputTitle>
        <TextInput
          name={LoginFormFields.password}
          placeholder="********"
          onChange={onInputChange}
          control={form.control}
          onBlur={onInputBlur}
          type='password'
        />
      </div>
      <FilledChipButton
        text="Logohu"
        textSize="lg"
        className="justify-center mt-2"
      />
      {children}
    </div>
  )
}
