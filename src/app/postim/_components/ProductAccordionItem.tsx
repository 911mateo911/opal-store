import React, { useRef } from 'react';
import { font_RedHatDisplay } from 'opal/app/_shared/fonts';
import Image from 'next/image';
import CopyIcon from 'opal/app/_shared/icons/copy.svg?url';
import clsx from 'clsx';
import StarIconSvg from 'opal/app/_shared/icons/star.svg';
import { useToast } from 'opal/app/_shared/molecules/Toast/useToast';

interface ProductAccordionItemProps {
  icon: string;
  title: string;
  content: string;
  favourite?: boolean;
}

export const ProductAccordionItem = ({
  icon,
  title,
  content,
  favourite
}: ProductAccordionItemProps) => {
  const contentRef = useRef<HTMLElement>(null);
  const { handleAddToast } = useToast();

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      handleAddToast({
        content: 'U kopjua me sukses',
        type: 'success'
      })
    } catch {
      // TODO: implement a logger (pls not sentry);
      console.log('didnt copy')
    }
  }

  return (
    <div className={clsx(
      font_RedHatDisplay.className,
      'bg-grey-5 rounded-md p-3 mt-1 text-grey-90 font-normal flex items-center justify-between',
      'dark:bg-grey-90'
    )} >
      <span className='flex items-center' >
        <Image
          src={icon}
          width={24}
          height={24}
          alt='accordion_icon'
          className='dark:invert'
        />
        <p className={clsx(
          font_RedHatDisplay.className,
          'pl-3 dark:text-grey-20'
        )} >
          {title}
          <b ref={contentRef} className='font-semibold ml-3' >
            {content}
          </b>
        </p>
      </span>
      <div className='flex items-center' >
        {favourite && (
          <div
            className={clsx(
              'flex mr-2 items-center justify-center py-1 px-2 rounded-md bg-green-10',
              'dark:bg-green-30'
            )}
          >
            <StarIconSvg
              className='text-green-60 mr-1 dark:text-green-70'
              height={18}
              width={18}
            />
            <p className={clsx(
              font_RedHatDisplay.className,
              'font-semibold text-sm text-green-90 dark:text-green-100'
            )} >
              E preferuar
            </p>
          </div>
        )}
        <Image
          src={CopyIcon}
          width={22}
          height={22}
          alt='copy_icon'
          className='cursor-pointer dark:invert'
          onClick={onCopy}
        />
      </div>
    </div>
  )
}
