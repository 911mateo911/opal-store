'use client';

import { useForm } from "react-hook-form";
import { TextInput } from "../_shared/atoms/TextInput";
import { InputTitle } from "../postim/publiko/_components/InputTitle";
import { LoginFormFields, loginSchema, loginSchemaInitialValues } from "./_formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { font_Inter } from "../_shared/fonts";
import { FilledChipButton } from "../_shared/atoms/FilledChipButton";
import { Logo } from "../_shared/atoms/Logo";

export default function LoginPage() {
  const form = useForm({
    defaultValues: loginSchemaInitialValues,
    resolver: zodResolver(loginSchema)
  });

  return (
    <div className="mx-auto h-max-screen-desktop flex flex-col justify-center " >
      <span className="flex items-center mb-4" >
        <Logo
          className="mr-4"
        />
        <h1 className={clsx(
          font_Inter.className, 'text-base'
        )} >
          Opal Store AL
        </h1>
      </span>
      <div className="flex items-center w-full justify-between" >
        <h2 className={clsx(
          font_Inter.className,
          "text-green-40 font-bold text-7xl mb-5"
        )} >
          Streha jote e <b className="text-green-50" >blerjeve</b>
        </h2>
        <div className="rounded-md w-96 grid gap-[10px]">
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
        </div>
      </div>
    </div>
  )
}
