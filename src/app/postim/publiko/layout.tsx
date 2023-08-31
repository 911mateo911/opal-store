import { ReactNode } from "react";
import { PublishFormSidebar } from "./_components/PublishFormSidebar";

export default function PublishPageLayout(
  { children }: { children: ReactNode }
) {
  return (
    <div className="max-w-5xl mx-auto px-4 my-6 flex justify-center relative" >
      <PublishFormSidebar />
      <div className='w-full' >
        {children}
      </div>
    </div>
  )
}
