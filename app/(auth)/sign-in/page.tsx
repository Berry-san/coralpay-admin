"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { SignUpFormData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SignUpFormSchema } from "./validations";

// import { useAppDispatch } from '@/store/hooks'

const SignUp = () => {
  const router = useRouter();
  //   const dispatch = useAppDispatch()

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col text-text-primary text-left">
      <h1 className="text-4xl font-bold text-sidebar text-left">Sign In</h1>
      <p className="my-4 text-[#516389]">Welcome, we missed you!</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-4 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Email Address"
                    {...field}
                    className="border-b w-full border-text-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    className="border-b w-full border-text-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full h-16 text-white" type="submit" size="lg">
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
