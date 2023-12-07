import clsx from "clsx";
import { ReactNode } from "react";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-max-screen-desktop flex justify-center max-mobile-md:px-1.5" >
      <div className={clsx(
        "shadow-navbar_shadow p-8 dark:shadow-none max-mobile-lg:shadow-none",
        'max-tablet-md:px-3 max-mobile-md:py-6 w-full my-auto max-mobile-md:px-2 landscape-mobile:shadow-none'
      )} >
        {children}
      </div>
    </div>
  )
}
