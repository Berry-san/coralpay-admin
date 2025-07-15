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
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { UssdApplicationFormData, UssdApplicationSchema } from "./validations";

const UssdApplication = () => {
  const form = useForm<UssdApplicationFormData>({
    resolver: zodResolver(UssdApplicationSchema),
    defaultValues: {
      authorizationLetter: undefined,
      shortCodeType: "",
    },
  });

  const onSubmit = async (data: UssdApplicationFormData) => {
    console.log(data);
  };
  return (
    <div>
      <div className="bg-[url('/images/backgroundImage.jpg')] bg-center bg-no-repeat bg-cover h-[500px] w-full rounded-md ">
        <div className="border-b-2 border-secondary py-2 px-4">
          <p className="text-lg font-semibold">USSD application</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <p className="text-4xl font-bold max-w-sm text-sidebar">
            You do want a dedicated ussd right?
          </p>
          <div className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mt-4 max-w-lg mx-auto w-full"
              >
                <FormField
                  control={form.control}
                  name="authorizationLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf,.jpg,.png"
                          onChange={(e) => {
                            field.onChange(e.target.files?.[0] || null);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shortCodeType"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <select
                          className="border-b w-full border-text-primary py-2 bg-white"
                          {...field}
                        >
                          <option value="">Select Short Code Type</option>
                          <option value="shared">Shared</option>
                          <option value="dedicated">Dedicated</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex w-full items-center justify-end">
                  <Button className="w-fit text-white rounded-sm" type="submit">
                    Apply for USSD <ChevronRight />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UssdApplication;
