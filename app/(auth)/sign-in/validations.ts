import * as z from 'zod'

export const SignInFormSchema = z.object({
  email: z.string().trim().min(1, { message: 'Email is required' }),
  password: z.string().trim().min(1, { message: 'Password is required' }),
})

export type SignInFormData = z.infer<typeof SignInFormSchema>
