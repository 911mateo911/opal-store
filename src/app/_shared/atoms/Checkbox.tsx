import React, { useState } from 'react';
import CheckIcon from 'opal/app/_shared/icons/check.svg?url';
import clsx from 'clsx';
import Image from 'next/image';
import { font_RedHatDisplay } from '../fonts';
import { getBooleanInputDefaultValue } from '../helpers';

interface CheckboxProps<F extends string> {
  name: F;
  defaultChecked?: boolean | Record<F, string | boolean | number>;
  onChange: (isChecked: boolean, field: F) => void;
  placeholder?: string;
}

export function Checkbox<T extends string>({
  name,
  defaultChecked,
  onChange,
  placeholder
}: CheckboxProps<T>) {
  const initial = getBooleanInputDefaultValue(defaultChecked, name);
  const [isChecked, setChecked] = useState<boolean>(initial);

  const handleChange = () => {
    const newValue = !isChecked;
    setChecked(newValue);
    onChange(newValue, name);
  }

  return (
    <div
      className='flex items-center gap-4 cursor-pointer min-w-[200px]'
      onClick={handleChange} >
      <div
        className={clsx(
          'border-2 border-solid h-6 w-6 rounded-md',
          'flex items-center justify-center select-none',
          isChecked ? 'bg-green-50 border-green-50' : 'border-grey-30 bg-white dark:bg-grey-85'
        )}
      >
        {isChecked && (
          <Image
            alt='check_icon'
            src={CheckIcon}
            width={18}
            height={18}
            className='invert'
          />
        )}
      </div>
      {placeholder && (
        <p className={clsx(
          font_RedHatDisplay.className,
          'text-sm tracking-wide text-grey-90 select-none',
          isChecked ? 'font-semibold' : 'font-normal',
          'dark:text-grey-20'
        )} >
          {placeholder}
        </p>
      )}
    </div>
  )
}
