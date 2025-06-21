'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ResetPasswordFormData, ResetPasswordFormSchema } from './validations'

const ResetPassword = () => {
  const router = useRouter()

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data: ResetPasswordFormData) => {
    // Only submit the password
    const { password } = data
    console.log({ password })

    // Optional: redirect or show success toast
    // router.push('/login')
  }

  return (
    <div className="flex flex-col text-text-primary text-left">
      <h1 className="text-4xl font-bold text-sidebar">Reset Password</h1>
      <p className="my-4 text-[#516389]">Enter your new password</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-4 w-full"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter New Password"
                    className="border-b w-full border-text-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm New Password"
                    className="border-b w-full border-text-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full h-16 text-white" type="submit" size="lg">
            Reset Password
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ResetPassword
