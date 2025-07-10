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
import { LoginFormData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "./(auth)/login/validations";
export default function Home() {
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-12 h-[100dvh] text-text-primary overflow-hidden font-manrope">
      <div className="hidden lg:block lg:col-span-5 h-full">
        <Image
          src="/images/sideImage.webp"
          alt="Ethica Logo"
          width={150}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="col-span-12 lg:col-span-7 overflow-auto px-6 md:px-20">
        <div className="flex justify-center h-full">
          <div className="w-full max-w-lg">
            <div className="flex flex-col text-text-primary text-left mt-40">
              <h1 className="text-4xl font-bold text-sidebar text-left">
                Welcome Back!
              </h1>
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

                  <div className="flex justify-end">
                    <Link
                      href="/forgot-passcode"
                      className="text-text-primary text-sm"
                    >
                      Forgot passcode?
                    </Link>
                  </div>

                  <Button
                    className="w-full h-16 text-white"
                    type="submit"
                    size="lg"
                    onClick={() => router.push("/homepage")}
                  >
                    Sign In
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
