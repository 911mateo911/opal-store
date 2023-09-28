import { ReactNode } from "react";

export default function PublishPageLayout(
  { children }: { children: ReactNode }
) {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-6 flex justify-center" >
      {children}
    </div>
  )
}
