'use client';

import { ReactNode } from "react";
import {
  NewProductSchemaType,
  newProductSchema,
  newProductSchemaInitialValues
} from "./_formSchema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { PublishFormSidebar } from "./_components/PublishFormSidebar";
import { PublishFormHeader } from "./_components/PublishFormHeader";

export default function PublishPageLayout(
  { children }: { children: ReactNode }
) {
  const form = useForm<NewProductSchemaType>({
    resolver: zodResolver(newProductSchema),
    defaultValues: newProductSchemaInitialValues
  });

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-6 flex justify-center" >
      <FormProvider {...form} >
        <PublishFormSidebar form={form} />
        <div className='w-full bg-grey-1 rounded-lg dark:bg-grey-95 mb-28' >
          <PublishFormHeader form={form} />
          {children}
        </div>
      </FormProvider>
    </div>
  )
}
