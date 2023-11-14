import clsx from 'clsx';
import { Chip } from 'opal/app/_shared/atoms/Chip';
import { NewProductFormFields } from '../_formSchema';
import { useWatch } from 'react-hook-form';
import { ProductFormComponentBaseProps } from '../_config';
import { FormGoBack } from './FormGoBack';

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
      'dark:bg-grey-90 dark:border-grey-95',
      'max-tablet-sm:absolute max-tablet-sm:top-24 max-tablet-sm:left-1/2',
      'max-tablet-sm:max-w-[34rem] max-tablet-sm:-translate-x-1/2 max-tablet-sm:w-max'
    )} >
      <FormGoBack
        form={form}
        hideDesktop={false}
        hideMobile
      />
      <div className='flex items-center justify-center gap-2 max-tablet-sm:ml-auto' >
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
