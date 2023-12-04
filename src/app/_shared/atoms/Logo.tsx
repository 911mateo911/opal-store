import React from 'react';
import Image from 'next/image';
import logoSvg from 'opal/app/_shared/icons/logo.svg?url';
import clsx from 'clsx';

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export const Logo = ({ className, imgClassName }: LogoProps) => {
  return (
    <div
      className={clsx('h-10 w-10 bg-green-40 flex items-center justify-center rounded-md', className)}
    >
      <Image
        src={logoSvg}
        alt='opal_logo'
        priority
        width={22}
        height={22}
        className={imgClassName}
      />
    </div>
  )
}
