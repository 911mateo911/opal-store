import clsx from 'clsx';
import Image from 'next/image';
import { font_Inter } from 'opal/app/_shared/fonts';
import { FormImageInput } from 'opal/app/postim/publiko/_components/FormImageInput';
import React from 'react';
import { Control, UseFormSetValue, useWatch } from 'react-hook-form';
import { RegisterUserSchemaType, SharedRegisterFormFields } from '../_formSchema';
import { ImageWithPreview } from 'opal/app/_shared/types';

interface ProfilePictureInputProps {
  imageSrc: string;
  control: Control<RegisterUserSchemaType>;
  setValue: UseFormSetValue<RegisterUserSchemaType>;
};

export const PROFILE_PIC_HTML_INPUT_ID = 'profile_pic_upload';

const sharedClasses = 'w-full h-full aspect-square max-w-[248px] rounded-full';

export const ProfilePictureInput = ({
  imageSrc,
  control,
  setValue
}: ProfilePictureInputProps) => {
  const image = useWatch({ control, name: SharedRegisterFormFields.profilePic });

  const onAttachProfilePic = (files: ImageWithPreview[]) => {
    const [profilePic] = files;

    if (profilePic) {
      setValue(SharedRegisterFormFields.profilePic, profilePic);
    };
  };

  if (image?.preview) {
    return (
      <div className={clsx(
        sharedClasses,
        'flex items-stretch justify-center'
      )} >
        <Image
          src={image.preview}
          alt='upload_profile_pic'
          width={248}
          height={248}
          className='object-cover rounded-full'
        />
      </div>
    )
  }

  return (
    <label
      className={clsx(
        sharedClasses,
        'bg-grey-1 flex items-center justify-center',
        'cursor-pointer border border-grey-2 [&>div]:hover:scale-105'
      )}
      htmlFor={PROFILE_PIC_HTML_INPUT_ID}
    >
      <div className='transition' >
        <Image
          src={imageSrc}
          alt='upload_profile_pic'
          height={48}
          width={48}
          className='mx-auto'
        />
        <p className={clsx(
          font_Inter.className,
          'text-sm text-grey-95 tracking-wide mt-0.5'
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
