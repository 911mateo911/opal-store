import React from 'react';
import {
  BusinessFormStep,
  SharedRegisterFormFields,
  SharedRegisterSchemaType
} from 'opal/app/rregjistrohu/_formSchema';
import { Control, useWatch } from 'react-hook-form';
import DetailsIcon from 'opal/app/_shared/icons/detailsList.svg?url';
import CallChatIcon from 'opal/app/_shared/icons/callChat.svg?url';
import ClockIcon from 'opal/app/_shared/icons/clock.svg?url';
import CameraIcon from 'opal/app/_shared/icons/camera.svg?url';
import Image from 'next/image';
import clsx from 'clsx';
import { font_Inter } from 'opal/app/_shared/fonts';

interface BusinessFormStepCompProps {
  control: Control<SharedRegisterSchemaType>;
};

export const BusinessFormStepComp = ({ control }: BusinessFormStepCompProps) => {
  const formStep = useWatch({
    control: control,
    name: SharedRegisterFormFields.formStep,
    defaultValue: BusinessFormStep.GENERAL_INFO
  });

  // TODO: add selected state
  return (
    <div className='flex justify-center flex-col' >
      <div className='relative' >
        <h6 className={clsx(
          font_Inter.className,
          'text-sm font-medium text-grey-90 dark:text-grey-10',
          'absolute -top-7 max-tablet-xs:static max-tablet-xs:mb-1.5 max-mobile-slg:text-center max-mobile-slg:mt-6'
        )} >
          Hapat:
        </h6>
        <div className={clsx(
          'max-tablet-xs:flex max-tablet-xs:items-center max-tablet-xs:justify-center max-tablet-xs:gap-2'
        )} >
          <div className={clsx(
            'flex items-center py-1.5 pl-1.5 pr-4 rounded-md transition',
            formStep === BusinessFormStep.GENERAL_INFO ? 'bg-green-20' : 'bg-grey-1 dark:bg-grey-90 max-mobile-slg:pr-1.5'
          )} >
            <div className={clsx(
              'bg-green-20 p-1 rounded-md mr-2.5',
              formStep !== BusinessFormStep.GENERAL_INFO && 'max-mobile-slg:mr-0'
            )} >
              <Image
                src={DetailsIcon}
                alt='business_details'
                width={20}
                height={20}
                className='min-w-[20px]'
              />
            </div>
            <p className={clsx(
              font_Inter.className,
              'text-xs text-grey-95 font-medium dark:text-grey-20',
              formStep === BusinessFormStep.GENERAL_INFO ? 'dark:text-grey-90' : 'max-mobile-slg:hidden'
            )} >
              Informacion
            </p>
          </div>
          <div className='my-1 mx-auto w-px h-3 bg-grey-20 dark:bg-grey-85 max-tablet-xs:hidden' />
          <div className={clsx(
            'flex items-center py-1.5 pl-1.5 pr-4 rounded-md transition',
            formStep === BusinessFormStep.CONTACT ? 'bg-green-20' : 'bg-grey-1 dark:bg-grey-90 max-mobile-slg:pr-1.5'
          )} >
            <div className={clsx(
              'bg-green-20 p-1 rounded-md mr-2.5',
              formStep !== BusinessFormStep.CONTACT && 'max-mobile-slg:mr-0'
            )} >
              <Image
                src={CallChatIcon}
                alt='business_contact'
                width={20}
                height={20}
                className='min-w-[20px]'
              />
            </div>
            <p className={clsx(
              font_Inter.className,
              'text-xs text-grey-95 font-medium dark:text-grey-20',
              formStep === BusinessFormStep.CONTACT ? 'dark:text-grey-90' : 'max-mobile-slg:hidden'
            )} >
              Kontakte
            </p>
          </div>
          <div className='my-1 mx-auto w-px h-3 bg-grey-20 dark:bg-grey-85 max-tablet-xs:hidden' />
          <div className={clsx(
            'flex items-center py-1.5 pl-1.5 pr-4 rounded-md transition',
            formStep === BusinessFormStep.AVAILABILITY ? 'bg-green-20' : 'bg-grey-1 dark:bg-grey-90 max-mobile-slg:pr-1.5'
          )} >
            <div className={clsx(
              'bg-green-20 p-1 rounded-md mr-2.5',
              formStep !== BusinessFormStep.AVAILABILITY && 'max-mobile-slg:mr-0'
            )} >
              <Image
                src={ClockIcon}
                alt='business_availability'
                width={20}
                height={20}
                className='min-w-[20px]'
              />
            </div>
            <p className={clsx(
              font_Inter.className,
              'text-xs text-grey-95 font-medium dark:text-grey-20',
              formStep === BusinessFormStep.AVAILABILITY ? 'dark:text-grey-90' : 'max-mobile-slg:hidden',
            )} >
              Disponueshmeria
            </p>
          </div>
          <div className='my-1 mx-auto w-px h-3 bg-grey-20 dark:bg-grey-85 max-tablet-xs:hidden' />
          <div className={clsx(
            'flex items-center py-1.5 pl-1.5 pr-4 rounded-md transition',
            formStep === BusinessFormStep.PICTURES ? 'bg-green-20' : 'bg-grey-1 dark:bg-grey-90 max-mobile-slg:pr-1.5'
          )} >
            <div className={clsx(
              'bg-green-20 p-1 rounded-md mr-2.5',
              formStep !== BusinessFormStep.PICTURES && 'max-mobile-slg:mr-0'
            )} >
              <Image
                src={CameraIcon}
                alt='business_pictures'
                width={20}
                height={20}
                className='min-w-[20px]'
              />
            </div>
            <p className={clsx(
              font_Inter.className,
              'text-xs text-grey-95 font-medium dark:text-grey-20',
              formStep === BusinessFormStep.PICTURES ? 'dark:text-grey-90' : 'max-mobile-slg:hidden',
            )} >
              Fotografi
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
