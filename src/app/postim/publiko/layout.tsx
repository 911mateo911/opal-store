import { ReactNode } from "react";
import { PublishFormSidebar } from "./_components/PublishFormSidebar";
import { PublishFormHeader } from "./_components/PublishFormHeader";

export default function PublishPageLayout(
  { children }: { children: ReactNode }
) {
  return (
    <div className="max-w-[1000px] mx-auto px-4 my-6 flex justify-center relative" >
      <PublishFormSidebar />
      <div className='w-full bg-grey-1 rounded-lg' >
        <PublishFormHeader />
        {children}
      </div>
    </div>
  )
}
