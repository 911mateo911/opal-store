import React from 'react';
import { font_Inter, font_RedHatDisplay } from 'opal/app/_shared/fonts';
import clsx from 'clsx';
import UserIcon from 'opal/app/_shared/icons/user.svg?url';
import StoreIcon from 'opal/app/_shared/icons/store.svg?url';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from 'opal/app/_shared/atoms/Logo';

export const ChooseUserType = () => {
  return (
    <div className='h-max-screen-desktop flex justify-center max-tablet-sm:px-6 max-mobile-xs:px-0 max-mobile-xs:mx-1.5' >
      <div className='rounded-[10px] shadow-navbar_shadow p-24 my-auto pt-20 max-tablet-sm:p-12 max-mobile-mlg:w-full max-mobile-md:pt-6' >
        <Logo
          className='w-16 h-16 mx-auto mb-4'
          imgClassName='w-10 h-10'
        />
        <h1 className={clsx(
          font_RedHatDisplay.className,
          'text-center text-3xl font-bold text-grey-70'
        )} >
          Rregjistrohu si:
        </h1>
        <div className='grid grid-cols-2 w-full mt-16 gap-24 max-tablet-sm:gap-12 max-mobile-mlg:grid-cols-1 max-mobile-md:mt-8' >
          <Link
            href='/rregjistrohu/dyqan'
            className={clsx(
              'shadow-navbar_shadow bg-grey-1 flex items-center justify-center p-24 rounded-[10px] relative',
              '[&>img]:hover:scale-110 [&>span]:hover:scale-110 max-tablet-sm:p-20 max-tablet-sm:[&>span]:hover:scale-105',
              'max-tablet-sm:[&>img]:hover:scale-105 max-tablet-sm:min-w-[224px] max-mobile-xs:w-[224px] max-mobile-xs:mx-auto',
              'hover:bg-green-5 transition-all'
            )} >
            <Image
              src={StoreIcon}
              alt='store_icon'
              width={64}
              height={64}
              className='transition-all max-tablet-sm:min-w-[64px]'
            />
            <span
              className={clsx(
                font_Inter.className,
                'absolute bottom-14 text-grey-85 text-base transition-all max-tablet-sm:bottom-11',
                'max-tablet-sm:text-sm'
              )}
            >Dyqan/Biznes</span>
          </Link>
          <Link
            href='/rregjistrohu/perdorues'
            className={clsx(
              'shadow-navbar_shadow bg-grey-1 flex items-center justify-center p-24 rounded-[10px] relative',
              '[&>img]:hover:scale-110 [&>span]:hover:scale-110 max-tablet-sm:p-20 max-tablet-sm:[&>span]:hover:scale-105',
              'max-tablet-sm:[&>img]:hover:scale-105 max-tablet-sm:min-w-[224px] max-mobile-xs:w-[224px] max-mobile-xs:mx-auto',
              'hover:bg-green-5 transition-all'
            )} >
            <Image
              src={UserIcon}
              alt='user_icon'
              width={64}
              height={64}
              className='transition-all max-tablet-sm:min-w-[64px]'
            />
            <span
              className={clsx(
                font_Inter.className,
                'absolute bottom-14 text-grey-85 text-base transition-all max-tablet-sm:bottom-11',
                'max-tablet-sm:text-sm'
              )}
            >Perdorues/Shites Privat</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
