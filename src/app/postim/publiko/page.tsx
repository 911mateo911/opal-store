'use client';

import { useForm } from "react-hook-form";
import { PublishForm } from "./_components/PublishForm";
import { PublishFormHeader } from "./_components/PublishFormHeader";
import { PublishFormSidebar } from "./_components/PublishFormSidebar";
import { NewProductSchemaType, newProductSchema } from "./_formSchema";
import { zodResolver } from '@hookform/resolvers/zod';

export default function PublishPage() {
  const form = useForm<NewProductSchemaType>({
    resolver: zodResolver(newProductSchema),
  });

  return (
    <>
      <PublishFormSidebar form={form} />
      <div className='w-full bg-grey-1 rounded-lg dark:bg-grey-95' >
        <PublishFormHeader />
        <PublishForm form={form} />
      </div>
    </>
  )
}
