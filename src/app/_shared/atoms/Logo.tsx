import React from 'react';
import Image from 'next/image';
import logoSvg from 'opal/app/_shared/icons/logo.svg?url';

export const Logo = () => {
  return (
    <div
      className='h-10 w-10 bg-green-40 flex items-center justify-center rounded-md'
    >
      <Image
        src={logoSvg}
        alt='opal_logo'
        priority
        width={22}
        height={22}
      />
    </div>
  )
}
