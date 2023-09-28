import clsx from 'clsx';
import React from 'react';
import { font_RedHatDisplay } from '../fonts';

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const ActionButton = ({ text, onClick, className }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        font_RedHatDisplay.className,
        'text-white font-bold transition-all text-base w-full bg-green-60 rounded-full py-2',
        className,
        'hover:bg-green-50'
      )}
    >
      {text}
    </button>
  )
}
