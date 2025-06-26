import * as z from "zod";

export const NewCustomerSchema = z.object({
  firstName: z.string().min(1, { message: "Short code type is required" }),
  lastName: z.string().min(1, { message: "Short code type is required" }),
  phoneNumber: z.string().min(1, { message: "Short code type is required" }),
  city: z.string().min(1, { message: "Short code type is required" }),
  address: z.string().min(1, { message: "Short code type is required" }),
});

export type NewCustomerFormData = z.infer<typeof NewCustomerSchema>;
