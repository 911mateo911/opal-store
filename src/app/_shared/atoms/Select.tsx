'use client';

import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import DownArrow from 'opal/app/_shared/icons/downArrow.svg'
import { font_Inter, font_RedHatDisplay } from '../fonts';
import { useClickOutside } from '../hooks/useClickOutside';

export interface SelectOption<V extends string> {
  element: React.ReactNode;
  value: V;
}

export type SelectValues<T extends string> = Record<T, SelectOption<T>>;

// Created this to bypass the automatic sorting of JS object keys
export type MapSelectValues<T extends string> = Map<T, SelectOption<T>>;

interface SelectProps<N extends string, T extends string> {
  name: N;
  values: SelectValues<T> | MapSelectValues<T>;
  initialValue?: T;
  onSelect?: (optionValue: string, name: N) => void;
};

interface SelectModalState<V extends string> {
  isOpen: boolean;
  value?: V;
};

function getOptionsFromProps<N extends string, T extends string>(values: SelectProps<N, T>['values']) {
  if (values instanceof Map) {
    return Array.from(values.values());
  };

  return Object.values<SelectOption<T>>(values);
}

const EMPTY_VALUE: SelectOption<string> = {
  element: '',
  value: ''
};

export function Select<N extends string, T extends string>({
  values,
  initialValue,
  onSelect,
  name
}: SelectProps<N, T>) {
  const [modalState, setModalState] = useState<SelectModalState<T>>({
    isOpen: false,
    value: initialValue
  });

  useEffect(() => {
    if (!initialValue) {
      const currentValues = getOptionsFromProps(values);

      if (currentValues.length) {
        setModalState(currState => ({
          ...currState,
          value: currentValues[0].value
        }))
      }
    }
  }, [initialValue, values]);

  const openModal = () => setModalState(currState => ({ ...currState, isOpen: true }));
  const closeModal = (value?: T) => setModalState(currState => {
    if (value) {
      return {
        value,
        isOpen: false
      }
    } else {
      return ({ ...currState, isOpen: false });
    }
  });

  const wrapperRef = useClickOutside<HTMLDivElement>(closeModal);

  const handleSelect = (option: SelectOption<T>) => {
    closeModal(option.value);
    onSelect?.(option.value, name);
  }

  const selectedValue = useMemo(() => {
    if (!modalState.value) {
      return EMPTY_VALUE;
    };

    if (values instanceof Map) {
      return values.get(modalState.value);
    }

    return values?.[modalState.value];
  }, [modalState.value, values]);

  const options = getOptionsFromProps(values);

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
          modalState.isOpen && 'rounded-b-none'
        )}
        onClick={openModal}
      >
        <p className={clsx(
          'text-sm m-0 text-center mx-6 w-full font-semibold',
          'dark:text-grey-10'
        )} >
          {selectedValue?.element}
        </p>
        <Image
          src={DownArrow}
          alt='down_select_arrow'
          width={16}
          height={16}
          className={clsx('absolute right-2.5 transition-all dark:invert', modalState.isOpen && '-rotate-180')}
        />
      </div>
      <div className={clsx(
        'absolute border border-solid border-grey-10 rounded-b-md w-full',
        'opacity-0 invisible top-1/2 transition-all z-30 overflow-auto max-h-60',
        modalState.isOpen && '!top-[calc(100%_-_1px)] !visible opacity-100',
        'dark:border-grey-85'
      )}>
        {options.map(option => {
          const isOptionSelected = option.value === modalState.value;

          return (
            <div
              className={clsx(
                'p-[10px] cursor-pointer border-b border-grey-5 [&:last-child]:border-none text-center text-sm font-normal',
                font_Inter.className,
                'text-grey-70 transition-all [&:last-child]:rounded-b-md',
                isOptionSelected ?
                  'bg-green-10 hover:bg-green-20 hover:text-green-80' :
                  'bg-white hover:bg-grey-5 hover:text-grey-100',
                'dark:bg-grey-90 dark:[&:first-child]:border-t-none',
                'dark:border-grey-85 dark:text-grey-10',
                'dark:hover:bg-grey-95 dark:hover:text-grey-5',
              )}
              onClick={() => handleSelect(option)}
              key={option.value}
            >
              {option.element}
            </div>
          )
        })}
      </div>
    </div>
  )
}
