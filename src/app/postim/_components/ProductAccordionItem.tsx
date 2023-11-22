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
      'rounded-md p-3 mt-1 text-grey-90 font-normal grid grid-cols-[calc(100%_-_2rem)_2rem]',
      'bg-grey-5 dark:bg-grey-90 relative'
    )} >
      {favourite && (
        <StarIconSvg
          height={18}
          width={18}
          className='text-green-70 absolute left-0 -top-1'
        />
      )}
      <div className='flex items-center' >
        <Image
          src={icon}
          width={24}
          height={24}
          alt='accordion_icon'
          className='dark:invert'
        />
        <p className={clsx(
          font_RedHatDisplay.className,
          'pl-3 dark:text-grey-20',
          'whitespace-pre text-ellipsis overflow-hidden'
        )} >
          {title}
          <b ref={contentRef} className='font-semibold ml-3' >
            {content}
          </b>
        </p>
      </div>
      <div className='flex items-center' >
        <Image
          src={CopyIcon}
          width={22}
          height={22}
          alt='copy_icon'
          className='cursor-pointer dark:invert ml-auto'
          onClick={onCopy}
        />
      </div>
    </div>
  )
}
