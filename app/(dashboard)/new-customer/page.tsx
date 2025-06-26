"use client";

import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewCustomerFormData, NewCustomerSchema } from "./validations";

const NewCustomer = () => {
  const form = useForm<NewCustomerFormData>({
    resolver: zodResolver(NewCustomerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      city: "",
      address: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (data: NewCustomerFormData) => {
    console.log(data);
  };
  return (
    <div>
      <div className="bg-[url('/images/backgroundImage.jpg')] bg-center bg-no-repeat bg-cover h-[500px] w-full rounded-md ">
        <div className="border-b-2 border-secondary py-2 px-4">
          <p className="text-lg font-semibold">Customer application</p>
        </div>
        <div className="flex gap-4 p-4">
          <p className="text-4xl font-bold max-w-sm text-sidebar">
            Customer Info{" "}
          </p>
          <div className="w-full flex-1">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-12 mt-4 max-w-lg mx-auto w-full"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <p>First Name</p>
                      <FormControl>
                        <Input
                          placeholder="Enter Email Address"
                          {...field}
                          className="border-b w-full border-text-primary bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <p>Last Name</p>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter Password"
                          className="border-b w-full border-text-primary bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <p>Phone Number</p>
                      <FormControl>
                        <Input
                          placeholder="Enter Email Address"
                          {...field}
                          className="border-b w-full border-text-primary bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <p>City</p>
                      <FormControl>
                        <Input
                          placeholder="Enter Password"
                          className="border-b w-full border-text-primary bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <p>Residential Address</p>
                      <FormControl>
                        <Input
                          placeholder="Enter Password"
                          className="border-b w-full border-text-primary bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
              {/* <Button
                className="my-6 py-2 px-4 flex items-end justify-end text-white"
                type="submit"
              >
                Submit
              </Button> */}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomer;
