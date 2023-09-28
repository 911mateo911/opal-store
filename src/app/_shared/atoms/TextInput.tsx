'use client';

import clsx from 'clsx';
import React from 'react';
import { font_RedHatDisplay } from '../fonts';

interface TextInputProps<T extends string> {
  value?: string;
  onChange: (value: string, name: T) => void;
  name: T;
  id?: string;
  type?: 'text' | 'number';
  className?: string;
  validateOn?: 'change' | 'blur';
  pattern?: RegExp;
  placeholder?: string;
  required?: boolean;
  onError?: (name: string) => void;
  textarea?: boolean;
}

// TODO: expand later
export function TextInput<T extends string>({
  name,
  onChange,
  value,
  className,
  id,
  type = 'text',
  onError,
  pattern,
  placeholder,
  required,
  validateOn,
  textarea
}: TextInputProps<T>) {

  const sharedClasses = clsx(
    font_RedHatDisplay.className,
    'focus:outline-1 focus:outline-blue-70',
    'dark:bg-grey-90 dark:border-grey-80',
    'dark:focus:outline-blue-900 dark:focus:outline-none',
    'dark:placeholder:text-grey-75 dark:focus:bg-grey-80 dark:text-grey-20'
  )

  if (textarea) {
    return (
      <textarea
        name={name}
        onChange={({ target }) => onChange(target.value, name)}
        className={clsx(
          'resize-none rounded-md w-full p-4 border border-solid border-grey-10 min-h-[200px]',
          sharedClasses
        )}
        placeholder={placeholder}
      />
    )
  }

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
        sharedClasses
      )}
      onChange={({ target }) => onChange(target.value, name)}
    />
  )
}
