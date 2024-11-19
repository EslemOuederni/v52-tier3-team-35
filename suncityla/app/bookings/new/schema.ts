import { z } from "zod";

export const bookingFormSchema = z.object({
  fname: z.string().min(1, {
    message: "First name is required.",
  }),
  lname: z.string().min(1, {
    message: "Last name is required.",
  }),
  "street-address": z.string().min(1, {
    message: "Street address is required.",
  }),
  "postal-code": z.string().min(5, {
    message: "Postal code is required.",
  }),
});
