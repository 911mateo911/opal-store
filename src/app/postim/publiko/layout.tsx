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
import clsx from "clsx";
import { FormGoBack } from "./_components/FormGoBack";

export default function PublishPageLayout(
  { children }: { children: ReactNode }
) {
  const form = useForm<NewProductSchemaType>({
    resolver: zodResolver(newProductSchema),
    defaultValues: newProductSchemaInitialValues
  });

  return (
    <div className={clsx(
      "py-6 flex justify-center",
      'max-tablet-sm:flex-col max-tablet-sm:pt-16 max-mobile:pb-0'
    )} >
      <FormProvider {...form} >
        <FormGoBack
          form={form}
          hideMobile={false}
          hideDesktop
          className='justify-center max-w-xs mx-auto w-full my-2 max-tablet-sm:mb-0'
        />
        <PublishFormSidebar form={form} />
        <div className='w-full bg-grey-1 rounded-lg dark:bg-grey-95 h-fit max-tablet-sm:bg-inherit max-tablet-sm:dark:bg-inherit' >
          <PublishFormHeader form={form} />
          <div className="p-[10px]" >
            {children}
          </div>
        </div>
      </FormProvider>
    </div>
  )
}
