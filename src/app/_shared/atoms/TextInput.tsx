'use client';

import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useMemo, useRef, useState } from 'react';
import { font_RedHatDisplay } from '../fonts';
import { Control, FieldValues, useFormState } from 'react-hook-form';
import { getInputDefaultValue } from '../helpers';
import get from 'lodash.get';
import EyeOpenIcon from 'opal/app/_shared/icons/eyeOpen.svg?url';
import EyeCloseIcon from 'opal/app/_shared/icons/eyeClosed.svg?url';
import Image from 'next/image';

type TextInputType = 'text' | 'number' | 'password';

interface TextInputProps<T extends string, F extends FieldValues> {
  onChange: (value: string | number, name: T) => void;
  name: T;
  id?: string;
  type?: TextInputType;
  className?: string;
  placeholder?: string;
  textarea?: boolean;
  onBlur?: (name: T, context?: string) => void;
  defaultValue?: string | number | Record<T, string | boolean | number>;
  control?: Control<F>;
  adornment?: React.ReactNode;
  errorPath?: string;
  context?: string;
  dontValidateNumber?: boolean;
};

const numberInputAndDotsRegex = /^\d+(\.\d+)*$/;
const matchAllNonNumericsRegex = /[^\d.-]/g;

const inputTypeMap: Record<TextInputType, InputHTMLAttributes<HTMLInputElement>['type']> = {
  number: 'tel',
  password: 'password',
  text: 'text'
};

const getInputType = (inputType: TextInputType, passwordOpen: boolean) => {
  if (inputType !== 'password') {
    return inputTypeMap[inputType];
  };

  return passwordOpen ? inputTypeMap.text : inputTypeMap.password;
};

// TODO: REFACTOR THAT HORRENDOUS MEMO PLEASE JA QIFSHA ROBT SE MA SHPIFI
export function TextInput<T extends string, F extends FieldValues>({
  name,
  onChange,
  className,
  id,
  type = 'text',
  placeholder,
  textarea,
  onBlur,
  control,
  defaultValue,
  adornment,
  errorPath,
  context,
  dontValidateNumber = false,
}: TextInputProps<T, F>) {
  const { errors } = useFormState({ control });
  const isPasswordInput = type === 'password';
  const [passwordOpen, setPasswordOpen] = useState<boolean>(false);

  const getInputError = useCallback(() => {
    const foundError = get(errors, errorPath || name);

    if (foundError && name in foundError) {
      const deepErrorPath: string = `${errorPath}.${name}`;
      const deepError = get(errors, deepErrorPath);

      return deepError;
    };

    return foundError;
  }, [errorPath, errors, name]);

  const inputError = getInputError();

  // FIX THIS FUCKING MESS OF A CODE JA QIFSHA ROBT NPIDH
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    const { target } = event;
    let value: string | number = target.value.toString();
    const hasUnallowedChars = value.match(matchAllNonNumericsRegex)?.length;

    if (type === 'number' && !dontValidateNumber) {
      const numberOfDots = value.match(/\./g)?.length || 0;

      const isNegativeNumber = value.at(0) === '-';
      const startsWithDot = value.at(0) === '.';

      if (isNegativeNumber || startsWithDot) {
        value = value.slice(1);
        target.value = value;
      };

      if (numberOfDots > 1) {
        const indexOfFirstDot = value.indexOf('.');
        const replacedAllOtherDots = value.slice(indexOfFirstDot).replace(/\./g, '');
        value = `${value.slice(0, indexOfFirstDot)}.${replacedAllOtherDots}`;
        target.value = value;
      }

      if (!numberInputAndDotsRegex.test(value)) {
        const lastCharIsDot = value.at(value.length - 1) === '.';

        if (!lastCharIsDot && !hasUnallowedChars) {
          value = value.slice(0, value.length - 1);
          target.value = value;
        };
      };

      if (hasUnallowedChars) {
        value = value.replace(/[^\d.-]/g, '');
        target.value = value;
      };

      if (!target.value.length) {
        value = '';
      } else {
        value = Number(value);
      };
    }

    onChange(value, name);
  }, [name, onChange, type, dontValidateNumber]);

  // TODO: refactor this piece of dogshit
  const renderedInput = useMemo(() => {
    const sharedClasses = clsx(
      font_RedHatDisplay.className,
      'focus:outline-1 focus:outline-blue-70 !outline-none',
      'dark:bg-grey-90 dark:border-grey-80',
      'dark:focus:outline-blue-900 dark:focus:outline-none',
      'dark:placeholder:text-grey-75 dark:focus:bg-grey-80 dark:text-grey-20',
      inputError && 'border-red-50 border-2 dark:border-red-60',
      inputError && isPasswordInput && 'border-r-0'
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
          onBlur={() => onBlur?.(name, context)}
          defaultValue={getInputDefaultValue(defaultValue, name)}
        />
      );
    } else {
      return (
        <div className='w-full flex items-stretch' >
          <input
            name={name}
            id={id}
            placeholder={placeholder}
            className={clsx(
              'h-12 border border-solid border-grey-10 rounded-md px-4 w-full',
              className,
              adornment || isPasswordInput && 'rounded-r-none',
              sharedClasses
            )}
            onChange={handleChange}
            onBlur={() => onBlur?.(name, context)}
            defaultValue={getInputDefaultValue(defaultValue, name)}
            type={getInputType(type, passwordOpen)}
          />
          {isPasswordInput && (
            <div className={clsx(
              'w-14 rounded-r-md flex items-center justify-center border border-l-0 border-solid border-grey-10',
              'dark:border-grey-80 dark:bg-grey-90',
              inputError && '!border-l-red-50 border-l-2'
            )} >
              <Image
                src={passwordOpen ? EyeOpenIcon : EyeCloseIcon}
                alt='show_password'
                width={24}
                height={24}
                className='cursor-pointer dark:invert opacity-90'
                onClick={() => setPasswordOpen(isOpen => !isOpen)}
              />
            </div>
          )}
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
    id,
    className,
    adornment,
    handleChange,
    context,
    type,
    isPasswordInput,
    passwordOpen
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
