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

export default function PublishPage() {
  const form = useFormContext<NewProductSchemaType>();

  const formStep = useWatch({
    control: form.control,
    name: NewProductFormFields.formStep,
    defaultValue: PRODUCT_FORM_STEPS.GENERAL_FORM
  });

  return (
    <VerifyAndPublish form={form} />
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
