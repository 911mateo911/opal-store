'use client';

import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import DownArrow from 'emeralb/app/_shared/icons/downArrow.svg'
import { font_Inter, font_RedHatDisplay } from '../fonts';
import { useClickOutside } from '../hooks/useClickOutside';

interface SelectOption {
  element: React.ReactNode;
  value: string;
}

export type SelectValues<T extends string> = Record<T, SelectOption>;

interface SelectProps<T extends string> {
  values: SelectValues<T>;
  selectedValueKey?: T;
  onSelect?: (option: SelectOption) => void;
};

const EMPTY_VALUE: SelectOption = {
  element: '',
  value: ''
};

export function Select<T extends string>({ values, selectedValueKey, onSelect }: SelectProps<T>) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const wrapperRef = useClickOutside<HTMLDivElement>(closeModal);

  const handleSelect = (option: SelectOption) => {
    closeModal();
    onSelect?.(option);
  }

  const selectedValue = useMemo(() => {
    if (!selectedValueKey) {
      return EMPTY_VALUE;
    };

    return values?.[selectedValueKey];
  }, [selectedValueKey, values]);

  const options = Object.values<SelectOption>(values);

  return (
    <div className='relative' ref={wrapperRef} >
      <div
        className={clsx(
          'h-12 border border-solid border-grey-10 rounded-md bg-white cursor-pointer',
          'flex items-center justify-center text-grey-90',
          font_RedHatDisplay.className,
          'focus:outline-1 focus:outline-blue-70 w-full',
          'dark:bg-grey-90 dark:border-grey-80',
          'dark:focus:outline-blue-900 dark:focus:outline-none',
          'dark:placeholder:text-grey-75 dark:focus:bg-grey-80',
          isModalOpen && 'rounded-b-none'
        )}
        onClick={openModal}
      >
        <p className={clsx(
          'text-sm m-0 text-center mx-6 w-full'
        )} >
          {selectedValue.element}
        </p>
        <Image
          src={DownArrow}
          alt='down_select_arrow'
          width={16}
          height={16}
          className={clsx('absolute right-2.5 transition-all', isModalOpen && '-rotate-180')}
        />
      </div>
      <div className={clsx(
        'absolute bg-white border border-solid border-grey-10 rounded-b-md w-full',
        'opacity-0 invisible -z-10 top-1/2 transition-all',
        isModalOpen && '!top-[calc(100%_-_1px)] !visible opacity-100 z-auto'
      )}>
        {options.map(option => (
          <div
            className={clsx(
              'p-[10px] cursor-pointer border-b border-grey-5 [&:last-child]:border-none text-center text-sm font-normal',
              font_Inter.className,
              'text-grey-70 transition-all',
              'hover:bg-grey-5 hover:text-grey-100'
            )}
            onClick={() => handleSelect(option)}
            key={option.value}
          >
            {option.element}
          </div>
        ))}
      </div>
    </div>
  )
}
