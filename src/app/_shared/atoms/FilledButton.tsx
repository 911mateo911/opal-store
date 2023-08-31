import clsx from "clsx";

interface FilledButtonProps {
  text: string;
  className?: string
}

export const FilledButton = ({ text, className }: FilledButtonProps) => {
  return (
    <button className={clsx(
      className,
      'select-none text-green-80 font-medium rounded-full bg-green-20 transition',
      'py-1 px-4',
      'hover:bg-green-30 hover:text-green-70',
      'active:bg-green-10 active:text-green-50',
      'dark:bg-green-30 dark:text-green-100'
    )} >
      {text}
    </button>
  )
}
