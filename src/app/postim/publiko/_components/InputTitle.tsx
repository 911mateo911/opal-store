import React from 'react';
import clsx from 'clsx';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';

export const InputTitle = ({
  children,
  className,
  center
}: {
  children: React.ReactNode;
  className?: string;
  center?: boolean
}) => {
  return (
    <p className={clsx(
      "text-sm tracking-wider mb-0.5 font-light text-grey-80",
      font_RedHatDisplay.className,
      'dark:text-grey-20',
      className,
      center && 'text-center'
    )} >
      {children}
    </p>
  )
}
