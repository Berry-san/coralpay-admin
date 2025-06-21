import * as z from 'zod'

export const ResetPasswordFormSchema = z
  .object({
    password: z.string().trim().min(1, { message: 'Password is required' }),
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type ResetPasswordFormData = z.infer<typeof ResetPasswordFormSchema>
