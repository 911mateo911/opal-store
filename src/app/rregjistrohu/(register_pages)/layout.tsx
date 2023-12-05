import { ReactNode } from "react";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="shadow-navbar_shadow mt-8 p-8" >
      {children}
    </div>
  )
}
