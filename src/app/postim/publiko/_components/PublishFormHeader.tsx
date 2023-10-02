import clsx from 'clsx';
import { Chip } from 'opal/app/_shared/atoms/Chip';
import { FilledChipButton } from 'opal/app/_shared/atoms/FilledChipButton';
import backIcon from 'opal/app/_shared/icons/backArrow.svg';
import { NewProductFormFields } from '../_formSchema';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { ProductFormComponentBaseProps } from '../_config';

export const PublishFormHeader = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const hasNextStep = useWatch({
    control,
    name: NewProductFormFields.hasNextStep,
    defaultValue: true
  });

  return (
    <div className={clsx(
      'px-[10px] py-3 rounded-lg border-solid border border-grey-10 flex',
      'items-center justify-between bg-white',
      'dark:bg-grey-90 dark:border-grey-95'
    )} >
      <FilledChipButton
        text='Mbrapa'
        icon={backIcon}
        textSize='sm'
      />
      <div className='flex items-center justify-center gap-2' >
        <Chip
          text='Ploteso Formen'
        />
        {hasNextStep && (
          <Chip
            text='Detaje'
          />
        )}
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
