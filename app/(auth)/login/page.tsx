"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "./validations";
import { LoginFormData } from "@/types";
import { useLoginMutation } from "@/app/queryHandler/mutation";
import { setCookie } from "@/app/utils/cookies";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slice/userService/userService";
import { addMilliseconds } from "date-fns";

const Login = () => {
  const router = useRouter();
  const { mutate: loginMutation, data } = useLoginMutation();
  const dispatch = useAppDispatch();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!data) return;

    if (data) {
      const { accessToken, refreshToken, expiresIn } = data?.data.data || {};
      // const {
      //   balance,
      //   firstName,
      //   lastName,
      //   businessAccountNumber,
      //   ccif,
      //   profilePicture,
      //   bvn,
      //   nin,
      //   middleName,
      //   email,
      //   phoneNumber,
      //   rcnumber,
      //   businessEmailAddress,
      //   businessPhoneNumber,
      // } = data?.data.data?.UserBusinessDetail || {};
      dispatch(
        setUser({
          isAuthenticated: Boolean(accessToken),
          accessToken,
          refreshToken,
        })
      );

      const tokenExpiration = addMilliseconds(new Date(), expiresIn);
      setCookie("expiresIn", tokenExpiration?.toISOString(), tokenExpiration);

      // setLoginSuccess(true);
      router.push("/overview");
    } else {
      return;
    }
  }, [router, data, dispatch]);

  const onSubmit = async (data: LoginFormData) => {
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
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
