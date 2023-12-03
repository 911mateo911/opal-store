'use client';

import { useForm } from "react-hook-form";
import { TextInput } from "../_shared/atoms/TextInput";
import { InputTitle } from "../postim/publiko/_components/InputTitle";
import { LoginFormFields, loginSchema, loginSchemaInitialValues } from "./_formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { font_Inter, font_RedHatDisplay } from "../_shared/fonts";
import { FilledChipButton } from "../_shared/atoms/FilledChipButton";
import { Logo } from "../_shared/atoms/Logo";
import Link from "next/link";

export default function LoginPage() {
  const form = useForm({
    defaultValues: loginSchemaInitialValues,
    resolver: zodResolver(loginSchema)
  });

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
        <div className="w-96 grid gap-[10px] relative ml-auto max-tablet-sm:mx-auto max-tablet-sm:mt-6 max-mobile-slg:w-full">
          <div>
            <InputTitle>
              Username/Email
            </InputTitle>
            <TextInput
              name={LoginFormFields.emailOrUsername}
              placeholder="email@provider.com"
              onChange={console.log}
              control={form.control}
            />
          </div>
          <div>
            <InputTitle>
              Password
            </InputTitle>
            {/* TODO: add password input */}
            <TextInput
              name="email"
              placeholder="email@provider.com"
              onChange={console.log}
              control={form.control}
            />
          </div>
          <FilledChipButton
            text="Logohu"
            textSize="lg"
            className="justify-center mt-2"
          />
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
        </div>
      </div>
    </div>
  )
}
