import { z } from "zod";
import { GLOBAL_CONFIG } from "../_config";

export enum LoginFormFields {
  emailOrUsername = 'emailOrUsername',
  password = 'password'
}

// TODO: finish this
export const loginSchema = z.object({
  [LoginFormFields.emailOrUsername]:
    z.string()
      .min(1, { message: 'Email ose username nuk mund te jete bosh' })
      .refine(providedString => {
        const isEmail = providedString.indexOf('@') !== -1;

        if (isEmail) {
          if (GLOBAL_CONFIG.emailRegex.test(providedString)) {
            return false;
          };
        };

        return true;
      }, { message: 'Emaili eshte invalid' }),
  [LoginFormFields.password]: z.string()
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const loginSchemaInitialValues: LoginSchemaType = {
  emailOrUsername: '',
  password: ''
}
