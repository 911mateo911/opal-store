import clsx from 'clsx';
import { Chip } from 'opal/app/_shared/atoms/Chip';
import { NewProductFormFields, PRODUCT_FORM_STEPS } from '../_formSchema';
import { useWatch } from 'react-hook-form';
import { ProductFormComponentBaseProps } from '../_config';
import { FormGoBack } from './FormGoBack';
import ShareIcon from 'opal/app/_shared/icons/share.svg?url';
import DetailsIcon from 'opal/app/_shared/icons/detailsList.svg?url';
import CloudUploadIcon from 'opal/app/_shared/icons/cloudUpload.svg?url';
import FormWriteIcon from 'opal/app/_shared/icons/formWrite.svg?url';

export const PublishFormHeader = ({ form }: ProductFormComponentBaseProps) => {
  const { control } = form;

  const hasNextStep = useWatch({
    control,
    name: NewProductFormFields.hasNextStep,
    defaultValue: true
  });

  const formStep = useWatch({
    control,
    name: NewProductFormFields.formStep,
    defaultValue: PRODUCT_FORM_STEPS.GENERAL_FORM
  });

  const isGeneralForm = formStep === PRODUCT_FORM_STEPS.GENERAL_FORM;
  const isDetailsForm = formStep === PRODUCT_FORM_STEPS.DETAILS_FORM;
  const isVerifyAndPublishForm = formStep === PRODUCT_FORM_STEPS.VERIFY_AND_PUBLISH;
  const isSharePage = formStep === PRODUCT_FORM_STEPS.SHARE;

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
          icon={FormWriteIcon}
          selected={isGeneralForm}
          iconClassName={clsx('between-tablet-sm-md:hidden', !isGeneralForm && 'max-mobile:mx-0')}
          textClass={clsx(!isGeneralForm && 'max-mobile:hidden')}
          className={clsx(!isGeneralForm && 'max-mobile:px-1.5')}
        />
        {hasNextStep && (
          <Chip
            text='Detaje'
            icon={DetailsIcon}
            selected={isDetailsForm}
            iconClassName={clsx('between-tablet-sm-md:hidden', !isDetailsForm && 'max-mobile:mx-0')}
            textClass={clsx(!isDetailsForm && 'max-mobile:hidden')}
            className={clsx(!isDetailsForm && 'max-mobile:px-1.5')}
          />
        )}
        <Chip
          text='Verifiko dhe publiko'
          icon={CloudUploadIcon}
          selected={isVerifyAndPublishForm}
          iconClassName={clsx('between-tablet-sm-md:hidden', !isVerifyAndPublishForm && 'max-mobile:mx-0')}
          textClass={clsx(!isVerifyAndPublishForm && 'max-mobile:hidden')}
          className={clsx(!isVerifyAndPublishForm && 'max-mobile:px-1.5')}
        />
        <Chip
          text='Shperndaj'
          icon={ShareIcon}
          selected={isSharePage}
          iconClassName={clsx('between-tablet-sm-md:hidden', !isSharePage && 'max-mobile:mx-0')}
          textClass={clsx(!isSharePage && 'max-mobile:hidden')}
          className={clsx(!isSharePage && 'max-mobile:px-1.5')}
        />
      </div>
    </div>
  )
}
