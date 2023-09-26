import clsx from 'clsx';
import React from 'react';
import { font_RedHatDisplay } from '../fonts';
import Link from 'next/link';
import { Logo } from '../atoms/Logo';
import { FilledButton } from '../atoms/FilledButton';

export const Navbar = () => {
  return (
    <div className={clsx(
      font_RedHatDisplay.className,
      'p-4 flex items-center justify-between fixed top-3 left-1/2 -translate-x-1/2 z-40 bg-white',
      'w-navbar_width shadow-navbar_shadow border border-solid border-grey-10 rounded-[10px]',
      'dark:bg-grey-90 dark:border-grey-80'
    )} >
      <Link href='/' >
        <Logo />
      </Link>
      <div className='flex items-center justify-center' >
        <Link
          href='/'
          className='text-grey-70 dark:text-grey-10 select-none mx-4 text-base'
        >
          Shtepia
        </Link>
        <Link
          href='/'
          className='text-grey-70 dark:text-grey-10 select-none mx-4 text-base'
        >
          Kategori
        </Link>
        <FilledButton
          className='ml-4'
          text='Kycu'
        />
      </div>
    </div>
  )
}
