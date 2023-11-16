import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface FormDoubleInputSectionWrapperProps {
  children: ReactNode;
  // meaning its not first on the grid
  stacked?: boolean;
};

export const FormDoubleInputSectionWrapper = ({ children, stacked }: FormDoubleInputSectionWrapperProps) => {
  return (
    <div className={clsx(
      'grid grid-cols-2 gap-[10px] max-mobile:grid-cols-1 max-tablet-sm:gap-3.5',
      stacked && 'pt-5 max-tablet-sm:pt-3.5'
    )} >
      {children}
    </div>
  );
};
