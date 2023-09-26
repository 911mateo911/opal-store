import React from 'react';
import { font_Inter } from 'emeralb/app/_shared/fonts';
import clsx from 'clsx';

export const FormSectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h6 className={clsx(
      "text-base mb-1 font-semibold text-grey-80",
      font_Inter.className,
      'dark:text-grey-10'
    )} >
      {children}
    </h6>
  )
}
