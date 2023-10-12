import React, { CSSProperties, ReactNode, useRef, useState } from 'react';
import clsx from 'clsx';
import { font_RedHatDisplay } from '../fonts';
import Image from 'next/image';
import DownArrow from 'opal/app/_shared/icons/downArrow.svg?url';

interface AccordionProps {
  title: string;
  children: ReactNode;
};

type AccordionWrapperStyles = Pick<CSSProperties, 'height'>;

interface AccordionStyles {
  wrapperStyles: AccordionWrapperStyles;
  childClasses: string;
};

const initialAccordionStyles: AccordionStyles = {
  wrapperStyles: {
    height: 0
  },
  childClasses: 'invisible z-[-1]'
};

export const Accordion = ({ title, children }: AccordionProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const childWrapperRef = useRef<HTMLDivElement>(null);
  const [accordionStyles, setAccordionStyles] = useState<AccordionStyles>(initialAccordionStyles);

  const onToggleAccordion = () => {
    if (!childWrapperRef.current) {
      return;
    }
    const isAccordionOpen = accordionStyles.wrapperStyles.height;
    requestAnimationFrame(() => {
      if (isAccordionOpen) {
        setAccordionStyles(initialAccordionStyles);
      } else {
        setAccordionStyles({
          wrapperStyles: {
            height: childWrapperRef.current?.offsetHeight
          },
          childClasses: 'visible z-auto'
        });
      }
    })
  }

  return (
    <div>
      <div
        ref={headerRef}
        className={clsx(
          font_RedHatDisplay.className,
          'p-3 rounded-md cursor-pointer bg-grey-10 font-semibold tracking-wide flex justify-between items-center',
          'dark:text-grey-10 dark:bg-grey-90'
        )}
        onClick={onToggleAccordion}
      >
        {title}
        <Image
          src={DownArrow}
          alt='down_accordion_arrow'
          width={24}
          height={24}
          className={clsx('transition-all dark:invert', accordionStyles.wrapperStyles.height && '-rotate-180')}
        />
      </div>
      <div
        style={accordionStyles.wrapperStyles}
        className='transition-all relative w-full overflow-y-hidden duration-300'
      >
        <div
          ref={childWrapperRef}
          className={clsx(
            accordionStyles.childClasses,
            'absolute w-full overflow-hidden bottom-0 left-0'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
