import React from 'react';
import { RegisterBusinessStepPageProps } from './types';
import { InputTitle } from 'opal/app/postim/publiko/_components/InputTitle';
import { TextInput } from 'opal/app/_shared/atoms/TextInput';
import { SharedRegisterFormFields } from 'opal/app/rregjistrohu/_formSchema';
import { FilledChipButton } from 'opal/app/_shared/atoms/FilledChipButton';
import { useBusinessForm } from '../_hooks/useBusinessForm';

export const RegisterBusinessContactStep = ({ form }: RegisterBusinessStepPageProps) => {
  // TODO: extract in a fucking hook bitch
  const { setValue, control, trigger } = form;

  const { validateAndGoToNextStep } = useBusinessForm(form);

  const onInputChange = (value: string | number, field: SharedRegisterFormFields) => {
    setValue(field, value.toString());
  };

  const onInputBlur = (field: SharedRegisterFormFields) => trigger(field);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-4 max-tablet-md:gap-x-3 max-mobile-md:grid-cols-1 max-mobile-md:gap-y-3.5" >
        <div>
          <InputTitle>
            Email Pune
          </InputTitle>
          <TextInput
            name={SharedRegisterFormFields.work_email}
            onChange={onInputChange}
            onBlur={onInputBlur}
            control={control}
            placeholder='+355-123456789'
          />
        </div>
        <div>
          <InputTitle>
            Whatsapp
          </InputTitle>
          <TextInput
            name={SharedRegisterFormFields.whatsapp}
            onChange={onInputChange}
            onBlur={onInputBlur}
            control={control}
            placeholder='+355-123456789'
            type='number'
            dontValidateNumber
          />
        </div>
        <div>
          <InputTitle>
            Kontakt Pune
          </InputTitle>
          <TextInput
            name={SharedRegisterFormFields.work_telephone}
            onChange={onInputChange}
            onBlur={onInputBlur}
            control={control}
            placeholder='+355-123456789'
            type='number'
            dontValidateNumber
          />
        </div>
        <div>
          <InputTitle>
            Website
          </InputTitle>
          <TextInput
            name={SharedRegisterFormFields.website}
            onChange={onInputChange}
            onBlur={onInputBlur}
            control={control}
            placeholder='https://websajti-im.com'
          />
        </div>
      </div>
      <FilledChipButton
        text='Vazhdo'
        onClick={validateAndGoToNextStep}
        className='mt-8 mx-auto w-64 justify-center max-tablet-xs:mb-2'
      />
    </div>
  )
}
