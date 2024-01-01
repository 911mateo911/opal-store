import { InputTitle } from "opal/app/postim/publiko/_components/InputTitle";
import { RegisterBusinessStepPageProps } from "./types"
import { TextInput } from "opal/app/_shared/atoms/TextInput";
import {
  BUSINESS_TYPE_SELECT_OPTION,
  SharedRegisterFormFields
} from "opal/app/rregjistrohu/_formSchema";
import { Select } from "opal/app/_shared/atoms/Select";
import clsx from "clsx";
import { font_RedHatDisplay } from "opal/app/_shared/fonts";
import { FilledChipButton } from "opal/app/_shared/atoms/FilledChipButton";
import { useBusinessForm } from "../_hooks/useBusinessForm";

export const RegisterBusinessInfoStep = ({ form }: RegisterBusinessStepPageProps) => {
  const { setValue, control, trigger } = form;

  const onInputChange = (value: string | number, field: SharedRegisterFormFields) => {
    setValue(field, value.toString());
  };

  const onInputBlur = (field: SharedRegisterFormFields) => trigger(field);

  const { validateAndGoToNextStep } = useBusinessForm(form);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-5 max-tablet-md:gap-x-3 max-mobile-md:grid-cols-1 max-mobile-md:gap-y-3.5" >
        <div>
          <InputTitle>
            Emri i biznesit
          </InputTitle>
          <TextInput
            name={SharedRegisterFormFields.name}
            onChange={onInputChange}
            onBlur={onInputBlur}
            control={control}
            placeholder='Emri i biznesit'
          />
        </div>
        <div>
          <InputTitle center >
            Vendndodhja
          </InputTitle>
          <Select
            name={SharedRegisterFormFields.type}
            onSelect={onInputChange}
            values={BUSINESS_TYPE_SELECT_OPTION}
          />
        </div>
      </div>
      <div className="h-px bg-grey-10 dark:bg-grey-90 mt-6 mx-2" />
      <p className={clsx(
        font_RedHatDisplay.className,
        'text-sm font-medium text-grey-85 dark:text-grey-20 mt-[18px] mb-1.5'
      )} >
        Te dhena autentifikimi:
      </p>
      <div className="grid grid-cols-2 gap-x-5 gap-y-4 max-tablet-md:gap-x-3 max-mobile-md:grid-cols-1 max-mobile-md:gap-y-3.5" >
        <div>
          <InputTitle>
            Email
          </InputTitle>
          <TextInput
            name={SharedRegisterFormFields.email}
            onChange={onInputChange}
            onBlur={onInputBlur}
            control={control}
            placeholder='johndoe@apple.com'
          />
        </div>
        <div>
          <InputTitle>
            Telefon/Celular
          </InputTitle>
          <TextInput
            name={SharedRegisterFormFields.telephone}
            onChange={onInputChange}
            placeholder='+355-123456789'
            control={control}
            onBlur={onInputBlur}
            type='number'
            dontValidateNumber
          />
        </div>
        <div>
          <InputTitle>
            Password
          </InputTitle>
          <TextInput
            name={SharedRegisterFormFields.password}
            onChange={onInputChange}
            onBlur={onInputBlur}
            control={control}
            placeholder='********'
            type='password'
          />
        </div>
        <div>
          <InputTitle>
            Konfirmo password-in
          </InputTitle>
          <TextInput
            name={SharedRegisterFormFields.confirm_password}
            onChange={onInputChange}
            onBlur={onInputBlur}
            control={control}
            placeholder='********'
            type='password'
          />
        </div>
      </div>
      {/* TODO: maybe reuse this */}
      <FilledChipButton
        text='Vazhdo'
        onClick={validateAndGoToNextStep}
        className='mt-8 mx-auto w-64 justify-center max-tablet-xs:mb-2'
      />
    </div>
  )
}
