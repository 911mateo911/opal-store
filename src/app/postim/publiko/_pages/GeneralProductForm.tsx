'use client';

import clsx from "clsx";
import { Select } from "opal/app/_shared/atoms/Select";
import { TextInput } from "opal/app/_shared/atoms/TextInput";
import { font_RedHatDisplay } from "opal/app/_shared/fonts";
import {
  PREFERRED_COMMUNICATION_SELECT_OPTIONS,
  PRODUCT_FORM_IMAGE_PICKER_ID,
  PRODUCT_FORM_STEPS,
  PRODUCT_STATE_SELECT_OPTIONS,
  ProductFormComponentBaseProps
} from "../_config";
import { FormSectionTitle } from "../_components/FormSectionTitle";
import { NewProductFormFields, NewProductSchemaType } from "../_formSchema";
import { FormImagePreview } from "../_components/FormImagePreview";
import CameraIcon from 'opal/app/_shared/icons/camera.svg';
import Image from 'next/image';
import { FormImageInput } from "../_components/FormImageInput";
import { InputTitle } from "../_components/InputTitle";
import { Checkbox } from "opal/app/_shared/atoms/Checkbox";
import { ActionButton } from "opal/app/_shared/atoms/ActionButton";
import { FormCategorySegment } from "../_components/FormCategorySegment";
import { FormPriceSegment } from "../_components/FormPriceSegment";
import { Accordion } from "opal/app/_shared/atoms/Accordion";

// TODO: IMPORTANT, REVOKE ALL OBJECT URL AFTER LEAVING THE FORM PAGE
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

  const onDeleteImage = (imageName: string) => {
    const images = getValues(NewProductFormFields.images);
    const providedImagesArray = Object.values(images);
    const foundImage = images[imageName];

    if (foundImage) {
      const newImages = providedImagesArray.filter(({ name }) => name !== foundImage.name);

      if (foundImage.preview) {
        URL.revokeObjectURL(foundImage.preview);
      }

      const newImagesMap = newImages.reduce<NewProductSchemaType['images']>((map, currentImage) => {
        return {
          ...map,
          [currentImage.name]: currentImage
        }
      }, {});

      setValue(NewProductFormFields.images, newImagesMap);
    }
  };

  const onSetImages = (images: NewProductSchemaType['images']) => {
    setValue(NewProductFormFields.images, images);
  };

  const onSubmit = handleSubmit((formData) => {
    // TODO: Validate and go to next form based on subcategory
    console.log({ formData });
    setValue(NewProductFormFields.formStep, PRODUCT_FORM_STEPS.DETAILS_FORM);
  });

  // TODO: add hover states to inputs
  return (
    <div className="pt-[14px]">
      <h2 className={clsx(
        "text-xl mt-2 mb-[18px] tracking-wide font-bold text-grey-100",
        font_RedHatDisplay.className,
        'dark:text-grey-5'
      )} >
        Postimi juaj?
      </h2>
      <div className="grid grid-cols-[150px_1fr] gap-[10px]" >
        <div className="flex items-end" >
          <div className="w-full" >
            <InputTitle>
              Dua te:
            </InputTitle>
            <Select
              name={NewProductFormFields.state}
              values={PRODUCT_STATE_SELECT_OPTIONS}
              onSelect={onSimpleInputChange}
              initialValue={getValues(NewProductFormFields.state)}
            />
          </div>
        </div>
        <div>
          <FormSectionTitle>
            Titulli
          </FormSectionTitle>
          <TextInput<NewProductFormFields.title, NewProductSchemaType>
            name={NewProductFormFields.title}
            onChange={onSimpleInputChange}
            placeholder="Shitet ..."
            onBlur={onInputBlur}
            control={control}
            defaultValue={getValues(NewProductFormFields.title)}
          />
        </div>
      </div>
      <FormCategorySegment
        onInputChange={onSimpleInputChange}
        formControl={control}
        getValues={getValues}
      />
      <FormPriceSegment
        control={control}
        onInputBlur={onInputBlur}
        onSimpleInputChange={onSimpleInputChange}
        getValues={getValues}
      />
      <div className="pt-5" >
        <InputTitle>
          Vendndodhja
        </InputTitle>
        <TextInput
          name={NewProductFormFields.location}
          onChange={onSimpleInputChange}
          placeholder="Shteti, Qyteti, Rruga"
          onBlur={onInputBlur}
          control={control}
          defaultValue={getValues(NewProductFormFields.location)}
        />
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
          defaultValue={getValues(NewProductFormFields.description)}
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
              initialValue={getValues(NewProductFormFields.preferredCommunication)}
            />
          </div>
          <div className="flex items-center pt-[22px]" >
            <Checkbox
              name={NewProductFormFields.deliveryAtYourPlace}
              onChange={onSimpleInputChange}
              placeholder="Mund te takohem ne vend te caktuar"
              defaultChecked={getValues(NewProductFormFields.deliveryAtYourPlace)}
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
