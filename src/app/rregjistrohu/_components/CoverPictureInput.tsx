'use client';

import React from 'react';
import clsx from 'clsx';
import { font_Inter } from 'opal/app/_shared/fonts';
import BusinessIcon from 'opal/app/_shared/icons/store.svg?url';
import Image from 'next/image';
import { FormImageInput } from 'opal/app/postim/publiko/_components/FormImageInput';
import { ProfilePictureInputProps } from './ProfilePictureInput';
import { useWatch } from 'react-hook-form';
import { SharedRegisterFormFields } from '../_formSchema';
import { ImageWithPreview } from 'opal/app/_shared/types';
import TrashIcon from 'opal/app/_shared/icons/trash.svg';

export const COVER_PIC_HTML_INPUT_ID = 'cover_pic_upload';

export const CoverPictureInput = ({
  className,
  control,
  setValue
}: ProfilePictureInputProps) => {
  const image = useWatch({ control, name: SharedRegisterFormFields.cover_photo });

  const onAttachProfilePic = (files: ImageWithPreview[]) => {
    const [profilePic] = files;

    if (profilePic) {
      setValue(SharedRegisterFormFields.profile_pic, profilePic);
    };
  };

  const onRemoveProfilePic = () => {
    if (image?.preview) {
      URL.revokeObjectURL(image.preview);
    }
    setValue(SharedRegisterFormFields.profile_pic, undefined);
  }

  const sharedClasses = clsx('w-full rounded-md', className);

  if (image?.preview) {
    return (
      <div className={sharedClasses} >
        <Image
          src={image.preview}
          alt='upload_profile_pic'
          width={248}
          height={248}
          className='object-cover rounded-full'
        />
        <TrashIcon
          className={clsx(
            'absolute left-1/2 -translate-x-1/2 -bottom-3.5 w-8 h-8 cursor-pointer [&>path]:stroke-red-60 rounded-full p-1.5',
            'border border-red-60 bg-grey-1 dark:bg-grey-95'
          )}
          onClick={onRemoveProfilePic}
        />
      </div>
    )
  }

  return (
    <label className={clsx(
      sharedClasses,
      'bg-grey-1 border-grey-2 border cursor-pointer flex items-center justify-center',
      'dark:bg-grey-95 dark:border-grey-90 [&>div]:hover:scale-105'
    )} >
      <div className='transition flex items-center' >
        <Image
          src={BusinessIcon}
          alt='cover_profile_pic'
          height={48}
          width={48}
          className='mr-2'
        />
        <p className={clsx(
          font_Inter.className,
          'text-sm py-20 text-grey-95 tracking-wide mt-0.5 dark:text-grey-10'
        )} >
          Ngarko kopertine
        </p>
      </div>
      <FormImageInput
        id={COVER_PIC_HTML_INPUT_ID}
        onChange={console.log}
        multiple={false}
      />
    </label>
  )
}
