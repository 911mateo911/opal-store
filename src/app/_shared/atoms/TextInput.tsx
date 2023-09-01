'use client';

import clsx from 'clsx';
import React from 'react';
import { font_RedHatDisplay } from '../fonts';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  name: string;
  id?: string;
  type?: 'text' | 'number';
  className?: string;
  validateOn?: 'change' | 'blur';
  pattern?: RegExp;
  placeholder?: string;
  required?: boolean;
  onError?: (name: string) => void;
}

// TODO: expand later
export const TextInput = ({
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
  validateOn
}: TextInputProps) => {
  return (
    <input
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
      type={type}
      className={clsx(
        'h-12 border border-solid border-grey-10 rounded-md pl-4',
        font_RedHatDisplay.className,
        'focus:outline-1 focus:outline-blue-70 w-full',
        className,
        'dark:bg-grey-90 dark:border-grey-80',
        'dark:focus:outline-blue-900 dark:focus:outline-none',
        'dark:placeholder:text-grey-75 dark:focus:bg-grey-80'
      )}
      onChange={({ target }) => onChange(target.value)}
    />
  )
}
