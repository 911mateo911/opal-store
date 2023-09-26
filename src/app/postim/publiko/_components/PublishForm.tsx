'use client';

import clsx from "clsx";
import { Select } from "emeralb/app/_shared/atoms/Select";
import { TextInput } from "emeralb/app/_shared/atoms/TextInput";
import { font_Inter, font_RedHatDisplay } from "emeralb/app/_shared/fonts";
import { BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS, PRODUCT_CURRENCY_SELECT_OPTIONS, PRODUCT_FORM_IMAGE_PICKER_ID } from "../_config";
import { FormSectionTitle } from "./FormSectionTitle";
import { useForm, useWatch } from "react-hook-form";
import { NewProductFormFields, NewProductSchemaType, newProductSchema } from "../_formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormImagePreview } from "./FormImagePreview";
import CameraIcon from 'emeralb/app/_shared/icons/camera.svg';
import Image from 'next/image';
import { FormImageInput } from "./FormImageInput";
import { ImageWithPreview } from "emeralb/app/_shared/types";

export const PublishForm = () => {
  const {
    setValue,
    control,
    getValues
  } = useForm<NewProductSchemaType>({
    resolver: zodResolver(newProductSchema),
  });

  const onStringInputChange = (value: string, field: NewProductFormFields) => {
    setValue(field, value);
  };

  const onDeleteImage = (imagePreview: string) => {
    const providedImages = getValues(NewProductFormFields.images);

    const newImages = providedImages.filter(({ preview }) => preview !== imagePreview);

    URL.revokeObjectURL(imagePreview);

    setValue(NewProductFormFields.images, newImages);
  };

  const onSetImages = (images: ImageWithPreview[]) => {
    setValue(NewProductFormFields.images, images);
  };

  return (
    <div className="pt-2 px-[10px]" >
      <h2 className={clsx(
        "text-xl mb-2.5 mt-2 tracking-wide font-bold",
        font_RedHatDisplay.className
      )} >
        Produkti juaj?
      </h2>
      <FormSectionTitle>
        Titulli
      </FormSectionTitle>
      <p className={clsx(
        "text-xs mb-0.5 font-normal text-grey-70",
        font_Inter.className
      )} >
        Nje titull i shkurter dhe permbledhes mbi produktin tend.
      </p>
      <TextInput<NewProductFormFields.title>
        name={NewProductFormFields.title}
        onChange={onStringInputChange}
      />
      <div className="pt-9 grid grid-cols-3 mt-3 gap-2" >
        <div>
          <p className={clsx(
            font_Inter.className,
            'text-sm font-medium mb-1 text-center'
          )} >
            Kategori
          </p>
          <Select
            name={NewProductFormFields.category}
            values={BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS}
            selectedValueKey='APARTMENT'
            onSelect={onStringInputChange}
          />
        </div>
        <div>
          <p className={clsx(
            font_Inter.className,
            'text-sm font-medium mb-1 text-center'
          )} >
            Nenkategori
          </p>
          <Select
            name={NewProductFormFields.currency}
            values={PRODUCT_CURRENCY_SELECT_OPTIONS}
            selectedValueKey='USD'
            onSelect={onStringInputChange}
          />
        </div>
        <div>
          <p className={clsx(
            font_Inter.className,
            'text-sm font-medium mb-1 text-center'
          )} >
            Monedha
          </p>
          <Select
            name={NewProductFormFields.currency}
            values={PRODUCT_CURRENCY_SELECT_OPTIONS}
            selectedValueKey='USD'
            onSelect={onStringInputChange}
          />
        </div>
      </div>
      <div className="pt-4" >
        <FormSectionTitle>
          Ngarko Imazhe
        </FormSectionTitle>
        <div className="grid grid-cols-[1fr,_150px] w-full pb-2" >
          <div>
            <FormImagePreview
              formControl={control}
              onDelete={onDeleteImage}
            />
          </div>
          <label
            className={clsx(
              'flex items-center justify-center flex-col h-[150px] w-[150px] bg-grey-2 text-grey-30 shadow cursor-pointer transition-all',
              'hover:bg-green-5 [&>img]:hover:scale-110 [&>p]:hover:text-green-100'
            )}
            htmlFor={PRODUCT_FORM_IMAGE_PICKER_ID}
          >
            <Image
              src={CameraIcon}
              alt='camera_icon'
              width={32}
              height={32}
              className="transition-all"
            />
            <p className={clsx(
              font_RedHatDisplay.className,
              'text-sm pt-1.5 text-grey-80 font-medium transition-all'
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
    </div>
  )
}
