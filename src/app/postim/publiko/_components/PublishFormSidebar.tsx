'use client';

import clsx from 'clsx';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { font_Inter, font_RedHatDisplay } from 'opal/app/_shared/fonts';
import React from 'react';
import { NewProductFormFields, NewProductSchemaType, PRODUCT_FORM_STEPS } from '../_formSchema';
import { InputTitle } from './InputTitle';
import { ProductFormComponentBaseProps } from '../_config';
import { useWatch } from 'react-hook-form';

export const PublishFormSidebar = ({ form }: ProductFormComponentBaseProps) => {
  const { setValue, control, trigger, getValues } = form;

  const formStep = useWatch({
    control: form.control,
    name: NewProductFormFields.formStep,
    defaultValue: PRODUCT_FORM_STEPS.GENERAL_FORM
  });

  if (
    formStep === PRODUCT_FORM_STEPS.VERIFY_AND_PUBLISH ||
    formStep === PRODUCT_FORM_STEPS.SHARE
  ) {
    return null;
  }

  const onStringInputChange = (value: string | number, field: NewProductFormFields) => {
    setValue(field, value);
  };

  const onInputBlur = (field: NewProductFormFields) => trigger(field);

  return (
    <>
      <div className={clsx(
        'max-w-xs sticky h-fit top-28 left-0 mr-5',
        'max-tablet-sm:static max-tablet-sm:max-w-none max-tablet-sm:mb-5 max-tablet-sm:mr-0',
        'max-tablet-sm:rounded-lg max-tablet-sm:px-[10px]',
        'max-tablet-sm:pb-0.5 max-tablet-sm:pt-4',
        formStep !== PRODUCT_FORM_STEPS.GENERAL_FORM && 'max-tablet-sm:hidden'
      )} >
        <h2 className={clsx(
          font_RedHatDisplay.className,
          'font-black text-2xl text-grey-100',
          'dark:text-grey-20 mt-1',
          'max-tablet-sm:mt-0'
        )} >
          Juve jeni?
        </h2>
        <h6 className={clsx(
          font_Inter.className,
          'font-bold text-base text-grey-100 mt-6',
          'dark:text-grey-20 max-tablet-sm:mt-[10px]'
        )} >
          Informacionet e kontaktit
        </h6>
        <p className={clsx(
          font_RedHatDisplay.className,
          'text-sm tracking-wider font-light text-grey-80 dark:text-grey-20'
        )} >
          Prezantohuni duke plotesuar formen e meposhtme:
        </p>
        <div className='mt-4 flex flex-col justify-center items-center gap-5 max-tablet-sm:gap-4 max-tablet-sm:mt-2.5' >
          <div className='w-full mt-0.5' >
            <InputTitle>
              Emer Mbiemer
            </InputTitle>
            <TextInput<NewProductFormFields.fullName, NewProductSchemaType>
              name={NewProductFormFields.fullName}
              onChange={onStringInputChange}
              placeholder='John Doe'
              control={control}
              onBlur={onInputBlur}
              defaultValue={getValues(NewProductFormFields.fullName)}
            />
          </div>
          <div className='w-full' >
            <InputTitle>
              Email
            </InputTitle>
            <TextInput<NewProductFormFields.email, NewProductSchemaType>
              name={NewProductFormFields.email}
              onChange={onStringInputChange}
              placeholder='johndoe@apple.com'
              control={control}
              onBlur={onInputBlur}
              defaultValue={getValues(NewProductFormFields.email)}
            />
          </div>
          <div className='w-full' >
            <InputTitle>
              Telefon/Celular
            </InputTitle>
            <TextInput<NewProductFormFields.telephone, NewProductSchemaType>
              name={NewProductFormFields.telephone}
              onChange={onStringInputChange}
              placeholder='+355-123456789'
              control={control}
              onBlur={onInputBlur}
              defaultValue={getValues(NewProductFormFields.telephone)}
            />
          </div>
          <div className='w-full' >
            <InputTitle>
              Whatsapp
            </InputTitle>
            <TextInput<NewProductFormFields.whatsapp, NewProductSchemaType>
              name={NewProductFormFields.whatsapp}
              onChange={onStringInputChange}
              placeholder='+355-123456789'
              control={control}
              onBlur={onInputBlur}
              defaultValue={getValues(NewProductFormFields.whatsapp)}
            />
          </div>
        </div>
      </div>
      <hr
        className={clsx(
          'max-tablet-sm:block hidden h-[1px] bg-grey-1 mx-[10px] dark:bg-grey-90 border-none',
          formStep !== PRODUCT_FORM_STEPS.GENERAL_FORM && 'max-tablet-sm:hidden'
        )}
      />
    </>
  )
}
