import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { font_Inter } from '../fonts';
import Image from 'next/image';

interface ChipProps {
  text: string;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
  icon?: string;
  pointer?: boolean
  children?: ReactNode;
  iconHeight?: number;
  iconWidth?: number;
  iconClassName?: string;
}

export const Chip = ({
  text,
  onClick,
  selected,
  className,
  icon,
  pointer = true,
  iconHeight = 20,
  iconWidth = 20,
  iconClassName,
  children
}: ChipProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        font_Inter.className,
        'py-[6px] flex items-center whitespace-pre px-[10px] bg-green-5 max-h-7 text-green-100 text-xs rounded-full font-medium transition',
        pointer && 'cursor-pointer',
        className,
        'dark:bg-green-30 dark:text-green-100'
      )}
    >
      {icon && (
        <Image
          src={icon}
          alt='btn_icon'
          height={iconHeight}
          width={iconWidth}
          className={clsx('mr-1 -ml-0.5', iconClassName)}
        />
      )}
      {text}
      {children}
    </div>
  )
}
