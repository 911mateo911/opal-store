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
      <div className='flex items-center py-1.5 pl-1.5 pr-4 rounded-md bg-grey-1 dark:bg-grey-90 relative' >
        <h6 className={clsx(
          font_Inter.className,
          'text-sm font-medium text-grey-90 dark:text-grey-10',
          'absolute -top-7'
        )} >
          Hapat:
        </h6>
        <div className='bg-green-20 p-1 rounded-md mr-2.5' >
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
          'text-xs text-grey-95 font-medium dark:text-grey-20'
        )} >
          Informacion
        </p>
      </div>
      <div className='my-1 mx-auto w-px h-3 bg-grey-20 dark:bg-grey-85' />
      <div className='flex items-center py-1.5 pl-1.5 pr-4 rounded-md bg-grey-1 dark:bg-grey-90' >
        <div className='bg-green-20 p-1 rounded-md mr-2.5' >
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
          'text-xs text-grey-95 font-medium dark:text-grey-20'
        )} >
          Kontakte
        </p>
      </div>
      <div className='my-1 mx-auto w-px h-3 bg-grey-20 dark:bg-grey-85' />
      <div className='flex items-center py-1.5 pl-1.5 pr-4 rounded-md bg-grey-1 dark:bg-grey-90' >
        <div className='bg-green-20 p-1 rounded-md mr-2.5' >
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
          'text-xs text-grey-95 font-medium dark:text-grey-20'
        )} >
          Disponueshmeria
        </p>
      </div>
      <div className='my-1 mx-auto w-px h-3 bg-grey-20 dark:bg-grey-85' />
      <div className='flex items-center py-1.5 pl-1.5 pr-4 rounded-md bg-grey-1 dark:bg-grey-90' >
        <div className='bg-green-20 p-1 rounded-md mr-2.5' >
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
          'text-xs text-grey-95 font-medium dark:text-grey-20'
        )} >
          Fotografi
        </p>
      </div>
    </div>
  )
}
