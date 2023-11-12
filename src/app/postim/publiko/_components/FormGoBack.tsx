import React from 'react';
import backIcon from 'opal/app/_shared/icons/backArrow.svg?url';
import { FilledChipButton } from 'opal/app/_shared/atoms/FilledChipButton';
import { ProductFormComponentBaseProps } from '../_config';
import { NewProductFormFields, PRODUCT_FORM_STEPS } from '../_formSchema';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

interface FormGoBackProps extends ProductFormComponentBaseProps {
  hideMobile: boolean;
  hideDesktop: boolean;
  className?: string;
};

export const FormGoBack = ({ form, hideDesktop, hideMobile, className }: FormGoBackProps) => {
  const router = useRouter();
  const { getValues, setValue, clearErrors } = form;

  const onGoBack = () => {
    // TODO: refactor this piece of dogshit
    const currentStep = getValues(NewProductFormFields.formStep);

    if (currentStep === PRODUCT_FORM_STEPS.GENERAL_FORM) {
      router.back();
    };

    let nextStep: PRODUCT_FORM_STEPS = PRODUCT_FORM_STEPS.GENERAL_FORM;

    if (currentStep === PRODUCT_FORM_STEPS.DETAILS_FORM) {
      nextStep = PRODUCT_FORM_STEPS.GENERAL_FORM;
    };

    if (currentStep === PRODUCT_FORM_STEPS.VERIFY_AND_PUBLISH) {
      nextStep = PRODUCT_FORM_STEPS.DETAILS_FORM;
    };

    clearErrors();
    setValue(NewProductFormFields.formStep, nextStep);
  }

  return (
    <FilledChipButton
      text='Mbrapa'
      icon={backIcon}
      onClick={onGoBack}
      textSize='sm'
      className={clsx(
        className,
        hideMobile && 'max-tablet-sm:hidden',
        hideDesktop && 'hidden max-tablet-sm:flex',
      )}
    />
  )
}
