import React from 'react';
import { font_RedHatDisplay } from 'emeralb/app/_shared/fonts';
import clsx from 'clsx';

export const FormSectionTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h6 className={clsx(
      "text-lg mb-1 font-bold tracking-wide text-grey-90",
      font_RedHatDisplay.className,
      'dark:text-grey-10',
      className
    )} >
      {children}
    </h6>
  )
}
