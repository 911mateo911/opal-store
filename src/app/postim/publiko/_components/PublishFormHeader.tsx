import clsx from 'clsx';
import { Chip } from 'opal/app/_shared/atoms/Chip';
import { FilledChipButton } from 'opal/app/_shared/atoms/FilledChipButton';
import backIcon from 'opal/app/_shared/icons/backArrow.svg';
import { NewProductFormFields } from '../_formSchema';
import { useWatch } from 'react-hook-form';
import { PRODUCT_FORM_STEPS, ProductFormComponentBaseProps } from '../_config';
import { useRouter } from 'next/navigation';

export const PublishFormHeader = ({ form }: ProductFormComponentBaseProps) => {
  const router = useRouter();
  const { control, setValue, getValues } = form;

  const hasNextStep = useWatch({
    control,
    name: NewProductFormFields.hasNextStep,
    defaultValue: true
  });

  const onGoBack = () => {
    // TODO: refactor this piece of dogshit
    const currentStep = getValues(NewProductFormFields.formStep);

    if (currentStep === PRODUCT_FORM_STEPS.GENERAL_FORM) {
      router.back();
    };

    if (currentStep === PRODUCT_FORM_STEPS.DETAILS_FORM) {
      setValue(NewProductFormFields.formStep, PRODUCT_FORM_STEPS.GENERAL_FORM);
    };

    if (currentStep === PRODUCT_FORM_STEPS.VERIFY_AND_PUBLISH) {
      setValue(NewProductFormFields.formStep, PRODUCT_FORM_STEPS.GENERAL_FORM);
    };
  }

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
        onClick={onGoBack}
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
