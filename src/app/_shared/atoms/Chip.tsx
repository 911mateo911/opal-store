import clsx from 'clsx';
import React from 'react';
import { font_Inter } from '../fonts';

interface ChipProps {
  text: string;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}

export const Chip = ({ text, onClick, selected, className }: ChipProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        font_Inter.className,
        'py-[6px] px-[10px] bg-green-5 text-green-100 text-xs rounded-full font-medium transition cursor-pointer',
        className,
        'dark:bg-green-30 dark:text-green-100'
      )}
    >
      {text}
    </div>
  )
}
