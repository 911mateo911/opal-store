'use client';

import { useFormContext, useWatch } from "react-hook-form";
import { GeneralProductForm } from "./_pages/GeneralProductForm";
import {
  NewProductFormFields,
  NewProductSchemaType,
} from "./_formSchema";
import { PRODUCT_FORM_STEPS } from "./_config";
import { DetailsProductForm } from "./_pages/Details/DetailsProductForm";
import { VerifyAndPublish } from "./_pages/VerifyAndPublish/VerifyAndPublish";
import { font_RedHatDisplay } from "opal/app/_shared/fonts";
import clsx from "clsx";
import { FormImagePreview } from "./_components/FormImagePreview";

export default function PublishPage() {
  const form = useFormContext<NewProductSchemaType>();

  const formStep = useWatch({
    control: form.control,
    name: NewProductFormFields.formStep,
    defaultValue: PRODUCT_FORM_STEPS.GENERAL_FORM
  });

  return (
    <div className="pt-2" >
      <div className="grid grid-cols-2" >
        <FormImagePreview
          formControl={form.control}
        />
        <div className="pl-[10px]" >
          <h1 className={clsx(
            font_RedHatDisplay.className,
            'text-2xl font-semibold tracking-wide border-b border-grey-10',
            'dark:text-grey-10'
          )} >
            Dua te shes: Audi Q5 2.0 Nafte 2011 Automatik
          </h1>
        </div>
      </div>
    </div>
  )

  if (formStep === PRODUCT_FORM_STEPS.GENERAL_FORM) {
    return <GeneralProductForm form={form} />
  };

  if (formStep === PRODUCT_FORM_STEPS.DETAILS_FORM) {
    return <DetailsProductForm form={form} />
  };

  if (formStep === PRODUCT_FORM_STEPS.VERIFY_AND_PUBLISH) {
    return <VerifyAndPublish form={form} />
  }

  return null;
}
