import * as z from "zod";
import { store } from "@/store";
import { ForgotPasswordFormSchema } from "@/app/(auth)/forgot-password/validations";
import { LoginFormSchema } from "@/app/(auth)/login/validations";
import { ResetPasswordFormSchema } from "@/app/(auth)/reset-password/validations";
import { SignUpFormSchema } from "@/app/(auth)/sign-in/validations";

export type LoginFormData = z.infer<typeof LoginFormSchema>;
export type ForgotPasswordFormData = z.infer<typeof ForgotPasswordFormSchema>;
export type ResetPasswordFormData = z.infer<typeof ResetPasswordFormSchema>;
export type SignUpFormData = z.infer<typeof SignUpFormSchema>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
