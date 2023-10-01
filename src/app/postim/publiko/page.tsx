'use client';

import { useFormContext } from "react-hook-form";
import { PublishForm } from "./_components/PublishForm";
import {
  NewProductSchemaType,
} from "./_formSchema";

export default function PublishPage() {
  const form = useFormContext<NewProductSchemaType>();

  return (
    <>
      <PublishForm form={form} />
    </>
  )
}
