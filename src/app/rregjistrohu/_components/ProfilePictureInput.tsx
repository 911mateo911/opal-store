import clsx from 'clsx';
import Image from 'next/image';
import { font_Inter } from 'opal/app/_shared/fonts';
import { FormImageInput } from 'opal/app/postim/publiko/_components/FormImageInput';
import React from 'react';
import { Control, UseFormSetValue, useWatch } from 'react-hook-form';
import { SharedRegisterSchemaType, SharedRegisterFormFields } from '../_formSchema';
import { ImageWithPreview } from 'opal/app/_shared/types';
import TrashIcon from 'opal/app/_shared/icons/trash.svg';
import UserIcon from 'opal/app/_shared/icons/user.svg?url';

export interface ProfilePictureInputProps {
  control: Control<SharedRegisterSchemaType>;
  setValue: UseFormSetValue<SharedRegisterSchemaType>;
  className?: string;
  imageClass?: string;
};

export const PROFILE_PIC_HTML_INPUT_ID = 'profile_pic_upload';

export const ProfilePictureInput = ({
  control,
  setValue,
  className,
  imageClass
}: ProfilePictureInputProps) => {
  const image = useWatch({ control, name: SharedRegisterFormFields.profile_pic });

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

  const sharedClasses = clsx('w-full h-full aspect-square max-w-[248px] rounded-full', className);

  if (image?.preview) {
    return (
      <div className={clsx(
        sharedClasses,
        'flex items-stretch justify-center relative'
      )} >
        <Image
          src={image.preview}
          alt='upload_profile_pic'
          width={248}
          height={248}
          className={clsx('object-cover rounded-full', imageClass)}
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
    <label
      className={clsx(
        sharedClasses,
        'bg-grey-1 flex items-center justify-center',
        'cursor-pointer border border-grey-2 [&>div]:hover:scale-105',
        'dark:bg-grey-95 dark:border-grey-90 relative'
      )}
      htmlFor={PROFILE_PIC_HTML_INPUT_ID}
    >
      <div className='transition' >
        <Image
          src={UserIcon}
          alt='upload_profile_pic'
          height={48}
          width={48}
          className='mx-auto'
        />
        <p className={clsx(
          font_Inter.className,
          'text-sm text-grey-95 tracking-wide mt-0.5 dark:text-grey-10'
        )} >
          Ngarko fotografi
        </p>
      </div>
      <FormImageInput
        id={PROFILE_PIC_HTML_INPUT_ID}
        onChange={onAttachProfilePic}
        multiple={false}
      />
    </label>
  )
}
