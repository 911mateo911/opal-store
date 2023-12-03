import clsx from "clsx";
import { font_Inter, font_RedHatDisplay } from "../_shared/fonts";
import { Logo } from "../_shared/atoms/Logo";
import Link from "next/link";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="mx-auto h-max-screen-desktop flex flex-col justify-center px-3 max-tablet-sm:px-[22px] landscape-mobile:h-auto landscape-mobile:py-6" >
      <span className="flex items-center mb-4" >
        <Logo
          className="mr-4"
        />
        <h1 className={clsx(
          font_Inter.className, 'text-grey-95 text-base dark:text-grey-10'
        )} >
          Opal Store AL
        </h1>
      </span>
      <div className="grid grid-cols-2 w-full max-tablet-sm:grid-cols-1" >
        <h2 className={clsx(
          font_Inter.className,
          "text-green-40 font-bold text-7xl mb-5 max-tablet-sm:text-6xl max-tablet-xs:text-5xl max-mobile-slg:text-4xl"
        )} >
          Streha jote e <b className="text-green-50" >blerjeve</b>
        </h2>
        <LoginForm>
          <div className="absolute left-0 -bottom-9 flex w-full items-center justify-center max-tablet-sm:static max-tablet-sm:mt-2" >
            <p
              className={clsx(
                font_RedHatDisplay.className,
                'text-grey-95 font-normal text-sm dark:text-grey-10'
              )}
            >
              Nuk keni nje adrese?
            </p>
            &nbsp;
            <Link
              className={clsx(
                font_RedHatDisplay.className,
                'text-blue-90 font-semibold text-base dark:text-blue-40'
              )}
              href='/rregjistrohu' >
              Rregjistrohu
            </Link>
          </div>
        </LoginForm>
      </div>
    </div>
  )
}
