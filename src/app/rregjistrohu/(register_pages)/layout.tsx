'use client';

import clsx from "clsx";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { generateSharedRegisterSchema, registerUserSchemaInitialValue } from "../_formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isBusinessForm = pathname.includes('biznes');

  const form = useForm({
    defaultValues: registerUserSchemaInitialValue,
    resolver: zodResolver(generateSharedRegisterSchema(isBusinessForm))
  });

  return (
    <div className="h-max-screen-desktop flex justify-center max-mobile-md:px-1.5" >
      <div className={clsx(
        "shadow-navbar_shadow p-8 dark:shadow-none max-mobile-lg:shadow-none rounded-md",
        'max-tablet-md:px-3 max-mobile-md:py-6 w-full my-auto max-mobile-md:px-2 landscape-mobile:shadow-none'
      )} >
        <FormProvider {...form} >
          {children}
        </FormProvider>
      </div>
    </div>
  )
}
