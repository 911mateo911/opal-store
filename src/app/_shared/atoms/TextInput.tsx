'use client';

import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { font_RedHatDisplay } from '../fonts';
import { Control, FieldValues, useFormState } from 'react-hook-form';
import { getInputDefaultValue } from '../helpers';
import get from 'lodash.get';

interface TextInputProps<T extends string, F extends FieldValues> {
  value?: string;
  onChange: (value: string | number, name: T) => void;
  name: T;
  id?: string;
  type?: 'text' | 'number';
  className?: string;
  placeholder?: string;
  textarea?: boolean;
  onBlur?: (name: T) => void;
  defaultValue?: string | Record<T, string | boolean | number>;
  control?: Control<F>;
  adornment?: React.ReactNode;
  errorPath?: string;
};

const numberInputAndDotsRegex = /^\d+(\.\d+)*$/;

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
  defaultValue,
  adornment,
  errorPath
}: TextInputProps<T, F>) {
  const { errors } = useFormState({ control });

  const inputError = get(errors, errorPath || name);

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    const { target } = event;
    let value: string | number = target.value.toString();

    if (type === 'number') {
      if (!numberInputAndDotsRegex.test(value)) {
        const lastCharIsDot = value.at(value.length - 1) === '.';

        if (!lastCharIsDot) {
          value = value.slice(0, value.length - 1);
          target.value = value;
        }
      }

      const firstCharIsMinus = value.at(0) === '-';

      if (firstCharIsMinus) {
        value = value.slice(1);
        target.value = value;
      };

      value = Number(value);
    }

    onChange(value, name);
  }, [name, onChange, type]);

  // TODO: refactor this piece of dogshit
  const renderedInput = useMemo(() => {
    const sharedClasses = clsx(
      font_RedHatDisplay.className,
      'focus:outline-1 focus:outline-blue-70 !outline-none',
      'dark:bg-grey-90 dark:border-grey-80',
      'dark:focus:outline-blue-900 dark:focus:outline-none',
      'dark:placeholder:text-grey-75 dark:focus:bg-grey-80 dark:text-grey-20',
      inputError && 'border-red-50 border-2 dark:border-red-60'
    );

    if (textarea) {
      return (
        <textarea
          name={name}
          onChange={({ target }) => onChange(target.value, name)}
          className={clsx(
            'resize-none rounded-md w-full p-4 border border-solid border-grey-10 h-[200px]',
            sharedClasses
          )}
          placeholder={placeholder}
          onBlur={() => onBlur?.(name)}
          defaultValue={getInputDefaultValue(defaultValue, name)}
        />
      );
    } else {
      return (
        <div className='w-full flex items-stretch' >
          <input
            value={value}
            name={name}
            id={id}
            placeholder={placeholder}
            className={clsx(
              'h-12 border border-solid border-grey-10 rounded-md px-4 w-full',
              className,
              adornment && 'rounded-r-none',
              sharedClasses,
            )}
            onChange={handleChange}
            onBlur={() => onBlur?.(name)}
            defaultValue={getInputDefaultValue(defaultValue, name)}
          />
          {adornment && (
            <div className={clsx(
              font_RedHatDisplay.className,
              'min-w-[48px] rounded-r-md bg-white border border-l-0 text-xs border-solid border-grey-10',
              'flex items-center justify-center font-bold text-grey-60',
              'dark:bg-grey-90 dark:border-grey-80 dark:text-grey-40'
            )} >
              {adornment}
            </div>
          )}
        </div>
      )
    }
  }, [
    inputError,
    textarea,
    name,
    placeholder,
    defaultValue,
    onChange,
    onBlur,
    value,
    id,
    type,
    className,
    adornment,
    handleChange
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
