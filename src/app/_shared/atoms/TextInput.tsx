'use client';

import clsx from 'clsx';
import React, { useMemo } from 'react';
import { font_RedHatDisplay } from '../fonts';
import { Control, FieldError, FieldValues, useFormState } from 'react-hook-form';

interface TextInputProps<T extends string, F extends FieldValues> {
  value?: string;
  onChange: (value: string, name: T) => void;
  name: T;
  id?: string;
  type?: 'text' | 'number';
  className?: string;
  placeholder?: string;
  textarea?: boolean;
  onBlur?: (name: T) => void;
  formError?: FieldError;
  defaultValue?: string;
  control?: Control<F>;
}

export function TextInput<T extends string, F extends FieldValues>({
  name,
  onChange,
  value,
  className,
  id,
  type = 'text',
  placeholder,
  textarea,
  onBlur,
  control,
  defaultValue
}: TextInputProps<T, F>) {
  const { errors } = useFormState({ control });

  const inputError = errors[name];

  // TODO: refactor this piece of dogshit
  const renderedInput = useMemo(() => {
    const sharedClasses = clsx(
      font_RedHatDisplay.className,
      'focus:outline-1 focus:outline-blue-70',
      'dark:bg-grey-90 dark:border-grey-80',
      'dark:focus:outline-blue-900 dark:focus:outline-none',
      'dark:placeholder:text-grey-75 dark:focus:bg-grey-80 dark:text-grey-20'
    );

    if (textarea) {
      return (
        <textarea
          name={name}
          onChange={({ target }) => onChange(target.value, name)}
          className={clsx(
            'resize-none rounded-md w-full p-4 border border-solid border-grey-10 h-[200px]',
            sharedClasses,
            inputError && 'border-red-50 border-2'
          )}
          placeholder={placeholder}
          onBlur={() => onBlur?.(name)}
        />
      );
    } else {
      return (
        <input
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
          type={type}
          className={clsx(
            'h-12 border border-solid border-grey-10 rounded-md pl-4 w-full',
            className,
            sharedClasses,
            inputError && 'border-red-50 border-2'
          )}
          onChange={({ target }) => onChange(target.value, name)}
          onBlur={() => onBlur?.(name)}
          defaultValue={defaultValue}
        />
      )
    }
  }, [
    className,
    defaultValue,
    id,
    name,
    onBlur,
    onChange,
    placeholder,
    textarea,
    type,
    value,
    inputError
  ]);

  return (
    <div className={clsx('w-full relative', textarea && 'h-[200px]')} >
      {renderedInput}
      {inputError?.message && (
        <p
          className={clsx(
            font_RedHatDisplay.className,
            'text-xs text-red-60 font-semibold absolute top-full'
          )}
        >
          {inputError.message.toString()}
        </p>
      )}
    </div>
  )
}
