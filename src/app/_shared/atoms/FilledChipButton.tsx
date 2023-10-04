import clsx from "clsx";
import Link from "next/link";
import Image from 'next/image';

interface FilledChipButtonProps {
  text: string;
  className?: string;
  asLink?: boolean;
  icon?: string;
  textSize?: 'sm' | 'md';
  onClick?: () => void;
};

// Conditional Type
type LinkOrBtnType =
  | {
    asLink?: true;
    to: string;
  }
  | {
    asLink?: never;
    to?: never;
  };

export const FilledChipButton = (props: FilledChipButtonProps & LinkOrBtnType) => {
  const { textSize, onClick } = props;

  const btnClassName = clsx(
    props.className,
    'select-none text-green-80 font-medium rounded-full bg-green-20 transition text-base',
    'py-1 flex items-center',
    'hover:bg-green-30 hover:text-green-70',
    'active:bg-green-10 active:text-green-50',
    'dark:bg-green-30 dark:text-green-100',
    props.icon ? 'pl-2 pr-3' : 'px-4',
    {
      ['text-sm']: textSize === 'sm'
    }
  );

  const icon = props.icon ? (
    <Image
      src={props.icon}
      alt='btn_icon'
      width={16}
      height={16}
      className="mr-1"
    />
  ) : null;

  if (props.asLink) {
    <Link onClick={onClick} href={props.to} >
      {icon}
      {props.text}
    </Link>
  }

  return (
    <button onClick={onClick} className={btnClassName} >
      {icon}
      {props.text}
    </button>
  )
}
