import clsx from 'clsx';
import { Chip } from 'emeralb/app/_shared/atoms/Chip';
import { FilledButton } from 'emeralb/app/_shared/atoms/FilledButton';
import backIcon from 'emeralb/app/_shared/icons/backArrow.svg';

export const PublishFormHeader = () => {
  return (
    <div className={clsx(
      'px-[10px] py-3 rounded-lg border-solid border border-grey-10 flex',
      'items-center justify-between bg-white'
    )} >
      <FilledButton
        text='Mbrapa'
        icon={backIcon}
        textSize='sm'
      />
      <div className='flex items-center justify-center gap-2' >
        <Chip
          text='Ploteso Formen'
        />
        <Chip
          text='Verifiko dhe publiko'
        />
        <Chip
          text='Shperndaj'
        />
      </div>
    </div>
  )
}
