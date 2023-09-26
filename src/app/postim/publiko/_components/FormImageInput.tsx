import { ImageWithPreview } from 'emeralb/app/_shared/types';
import React, { ChangeEvent } from 'react';

interface FormImageInputProps {
  id: string;
}

export const FormImageInput = ({ id }: FormImageInputProps) => {
  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const files = target.files;

    if (!files) return;

    const withPreviewFiles: ImageWithPreview[] = [];

    // TODO: VALIDATE AND SEND TOAST MESSAGE, CREATE TOAST MESSAGE
    for (let index = 0; index < Number(files?.length); index++) {
      withPreviewFiles.push(Object.assign(
        files[index],
        {
          preview: URL.createObjectURL(files[index])
        }
      ));
    }
    // prevImages.current = withPreviewFiles;

    target.value = '';
  }

  return (
    <input
      type='file'
      multiple
      className='invisible h-0.5 w-0'
      id={id}
    // onChange={}
    />
  )
}
