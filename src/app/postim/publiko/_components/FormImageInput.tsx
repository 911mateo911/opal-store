'use client';

import { ImageWithPreview } from 'opal/app/_shared/types';
import React, { ChangeEvent } from 'react';
import { ALLOWED_IMAGE_TYPES } from '../_config';
import { useToast } from 'opal/app/_shared/molecules/Toast/useToast';

type ImagesMap = Record<string, ImageWithPreview>;

interface FormImageInputProps {
  id: string;
  onChange: (images: ImagesMap) => void;
}

export const FormImageInput = ({ id, onChange }: FormImageInputProps) => {
  const { handleAddToast } = useToast();

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const files = target.files;

    if (!files || !files.length) return;

    const withPreviewFiles: ImagesMap = {};

    for (let index = 0; index < Number(files?.length); index++) {

      const currentFile = files[index];

      if (ALLOWED_IMAGE_TYPES.includes(currentFile.type)) {
        withPreviewFiles[currentFile.name] = Object.assign(
          currentFile,
          {
            preview: URL.createObjectURL(files[index])
          }
        );
      }
    };

    const nrOfModifiedFiles = Object.keys(withPreviewFiles).length;

    if (!nrOfModifiedFiles) {
      handleAddToast({
        content: (
          <>
            Formati i lejuar eshte i tipit <b>.png</b> <b>.jpeg</b> <b>.webp</b>
          </>
        ),
        type: 'danger'
      });
    };

    if (nrOfModifiedFiles < files.length) {
      handleAddToast({
        content: (
          <>
            Disa foto jane perjashtuar. <br />
            Formati i lejuar eshte i tipit <b>.png</b> <b>.jpeg</b> <b>.webp</b>
          </>
        ),
        type: 'warning'
      });
    };

    target.value = '';

    onChange(withPreviewFiles);
  }

  return (
    <input
      type='file'
      multiple
      className='invisible h-0.5 w-0'
      id={id}
      onChange={handleOnChange}
      value=''
    />
  )
}
