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
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slice/userService/userService";
import { LoginFormData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { addMilliseconds } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../queryHandler/mutation";
import { setCookie } from "../utils/cookies";
import { LoginFormSchema } from "./validations";

const LoginPage = () => {
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
      //   businessEmailAddress,
      //   businessPhoneNumber,
      // } = data?.data.data?.UserBusinessDetail || {};
      dispatch(
        setUser({
          isAuthenticated: Boolean(accessToken),
          accessToken,
          refreshToken,
          email: form.getValues("email"),
        })
      );

      const tokenExpiration = addMilliseconds(new Date(), expiresIn);
      setCookie("expiresIn", tokenExpiration?.toISOString(), tokenExpiration);

      // setLoginSuccess(true);
      router.push("/change-password");
    } else {
      return;
    }
  }, [router, data, dispatch]);

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    router.push("/change-password");
    dispatch(
      setUser({
        email: form.getValues("email"),
      })
    );
  };
  return (
    <div className="grid grid-cols-12 h-[100dvh] text-text-primary overflow-hidden font-manrope">
      <div className="col-span-12 lg:col-span-6 overflow-auto px-6 md:px-20">
        <div className="flex justify-center h-full">
          <div className="w-full max-w-lg mt-40">
            {" "}
            <div className="flex flex-col text-text-primary text-left">
              <h1 className="text-4xl font-bold text-sidebar text-left">
                Sign In
              </h1>
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

                  <Button
                    className="w-full h-16 text-white"
                    type="submit"
                    size="lg"
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-6 h-full">
        <Image
          src="/images/loginImage.webp"
          alt="Ethica Logo"
          width={150}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
