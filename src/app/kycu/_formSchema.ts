import { z } from "zod";
import { GLOBAL_CONFIG } from "../_config";

export enum LoginFormFields {
  emailOrUsername = 'emailOrUsername',
  password = 'password'
}

export const loginSchema = z.object({
  [LoginFormFields.emailOrUsername]:
    z.string()
      .min(1, { message: 'Email ose username nuk mund te jete bosh' })
      .superRefine((providedString, ctx) => {
        const isEmail = providedString.indexOf('@') !== -1;

        if (isEmail) {
          if (!GLOBAL_CONFIG.emailRegex.test(providedString)) {
            return ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Email eshte invalid',
              path: []
            });
          };
        } else {
          if (!GLOBAL_CONFIG.usernameRegex.test(providedString)) {
            // TODO: add shif rregullat tooltip
            return ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Username eshte invalid',
              path: []
            });
          }
        }
      }),
  [LoginFormFields.password]:
    z.string()
      .min(1, { message: 'Passwordi nuk mund te jete bosh' })
      .regex(GLOBAL_CONFIG.passwordRegex, { message: 'Password eshte invalid' })
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const loginSchemaInitialValues: LoginSchemaType = {
  emailOrUsername: '',
  password: ''
}
