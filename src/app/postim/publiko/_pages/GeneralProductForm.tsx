'use client';

import clsx from "clsx";
import { Select } from "emeralb/app/_shared/atoms/Select";
import { TextInput } from "emeralb/app/_shared/atoms/TextInput";
import { font_Inter, font_RedHatDisplay } from "emeralb/app/_shared/fonts";
import {
  PREFERRED_COMMUNICATION_SELECT_OPTIONS,
  PRODUCT_CURRENCY_SELECT_OPTIONS,
  PRODUCT_FORM_IMAGE_PICKER_ID,
  PRODUCT_FORM_STEPS,
  ProductFormComponentBaseProps
} from "../_config";
import { FormSectionTitle } from "../_components/FormSectionTitle";
import { NewProductFormFields, NewProductSchemaType } from "../_formSchema";
import { FormImagePreview } from "../_components/FormImagePreview";
import CameraIcon from 'emeralb/app/_shared/icons/camera.svg';
import Image from 'next/image';
import { FormImageInput } from "../_components/FormImageInput";
import { ImageWithPreview } from "emeralb/app/_shared/types";
import { InputTitle } from "../_components/InputTitle";
import { Checkbox } from "emeralb/app/_shared/atoms/Checkbox";
import { ActionButton } from "emeralb/app/_shared/atoms/ActionButton";
import { FormCategorySegment } from "../_components/FormCategorySegment";

export const GeneralProductForm = ({ form }: ProductFormComponentBaseProps) => {
  const {
    setValue,
    getValues,
    control,
    handleSubmit,
    trigger
  } = form;

  const onSimpleInputChange = (value: string | boolean, field: NewProductFormFields) => {
    setValue(field, value);
  };

  const onInputBlur = (field: NewProductFormFields) => trigger(field);

  const onDeleteImage = (imagePreview: string) => {
    const providedImages = getValues(NewProductFormFields.images);

    const newImages = providedImages.filter(({ preview }) => preview !== imagePreview);

    URL.revokeObjectURL(imagePreview);

    setValue(NewProductFormFields.images, newImages);
  };

  const onSetImages = (images: ImageWithPreview[]) => {
    setValue(NewProductFormFields.images, images);
  };

  const onSubmit = handleSubmit((formData) => {
    // TODO: Validate and go to next form based on subcategory
    console.log({ formData });
    setValue(NewProductFormFields.formStep, PRODUCT_FORM_STEPS.DETAILS_FORM);
  });

  return (
    <div className="pt-6 px-[10px]" >
      <h2 className={clsx(
        "text-xl mb-2.5 mt-2 tracking-wide font-bold text-grey-100",
        font_RedHatDisplay.className,
        'dark:text-grey-5'
      )} >
        Produkti juaj?
      </h2>
      <FormSectionTitle className="mt-5" >
        Titulli
      </FormSectionTitle>
      <InputTitle>
        Nje titull i shkurter dhe permbledhes mbi produktin tend.
      </InputTitle>
      <TextInput<NewProductFormFields.title, NewProductSchemaType>
        name={NewProductFormFields.title}
        onChange={onSimpleInputChange}
        placeholder="Shitet ..."
        onBlur={onInputBlur}
        control={control}
      />
      <div className="pt-1.5 grid grid-cols-3 mt-3 gap-2" >
        <FormCategorySegment
          onInputChange={onSimpleInputChange}
          formControl={control}
          getValues={getValues}
        />
        <div>
          <p className={clsx(
            font_Inter.className,
            'text-sm font-medium mb-1 text-center',
            'dark:text-grey-20'
          )} >
            Monedha
          </p>
          <Select
            name={NewProductFormFields.currency}
            values={PRODUCT_CURRENCY_SELECT_OPTIONS}
            initialValue='USD'
            onSelect={onSimpleInputChange}
          />
        </div>
      </div>
      <div className="pt-3" >
        <FormSectionTitle>
          Ngarko Imazhe
        </FormSectionTitle>
        <div className="grid grid-cols-[1fr,_150px] w-full pb-2 gap-[10px]" >
          <div>
            <FormImagePreview
              formControl={control}
              onDelete={onDeleteImage}
            />
          </div>
          <label
            className={clsx(
              'flex items-center rounded-md justify-center flex-col h-[150px] w-[150px]',
              'bg-grey-2 text-grey-30 shadow cursor-pointer transition-all',
              'hover:bg-green-5 [&>img]:hover:scale-110 [&>p]:hover:text-green-100',
              'dark:bg-grey-85 dark:hover:bg-grey-70 dark:[&>p]:hover:text-grey-10'
            )}
            htmlFor={PRODUCT_FORM_IMAGE_PICKER_ID}
          >
            <Image
              src={CameraIcon}
              alt='camera_icon'
              width={32}
              height={32}
              className="transition-all dark:invert"
            />
            <p className={clsx(
              font_RedHatDisplay.className,
              'text-sm pt-1.5 text-grey-80 font-medium transition-all',
              'dark:text-grey-30'
            )} >
              Ngarko fotografi
            </p>
            <FormImageInput
              id={PRODUCT_FORM_IMAGE_PICKER_ID}
              onChange={onSetImages}
            />
          </label>
        </div>
      </div>
      <div className="pt-4" >
        <FormSectionTitle>
          Pershkrimi
        </FormSectionTitle>
        <TextInput<NewProductFormFields.description, NewProductSchemaType>
          textarea
          name={NewProductFormFields.description}
          onChange={onSimpleInputChange}
          placeholder="Nje permbledhje e vogel mbi produktin"
          onBlur={onInputBlur}
          control={control}
        />
      </div>
      <div className="pt-4" >
        <FormSectionTitle>
          Te tjera
        </FormSectionTitle>
        <div className="grid gap-x-6 gap-y-2 grid-cols-[repeat(2,1fr)] w-full" >
          <div>
            <InputTitle>
              Preferoj te pergjigjem ne:
            </InputTitle>
            <Select
              name={NewProductFormFields.preferredCommunication}
              values={PREFERRED_COMMUNICATION_SELECT_OPTIONS}
              onSelect={onSimpleInputChange}
            />
          </div>
          <div className="flex items-center pt-[22px]" >
            <Checkbox
              name={NewProductFormFields.debatablePrice}
              onChange={onSimpleInputChange}
              placeholder="Cmim i diskutueshem"
            />
          </div>
          <div>
            <InputTitle>
              Vendndodhja
            </InputTitle>
            <TextInput
              name={NewProductFormFields.location}
              onChange={onSimpleInputChange}
              placeholder="Shteti, Qyteti, Rruga"
              onBlur={onInputBlur}
              control={control}
            />
          </div>
          <div className="flex items-center pt-[22px]" >
            <Checkbox
              name={NewProductFormFields.deliveryAtYourPlace}
              onChange={onSimpleInputChange}
              placeholder="Mund te takohem ne vend te caktuar"
            />
          </div>
        </div>
      </div>
      <div className="pb-[10px] pt-6" >
        <ActionButton
          text="Vazhdo"
          onClick={onSubmit}
        />
      </div>
    </div>
  )
}
