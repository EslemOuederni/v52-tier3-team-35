"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { bookingFormSchema } from "../../new/schema";
import { useActionState, useRef, startTransition } from "react";
import onSubmitAction from "../../actions/onSubmitAction";
import BookingFormField from "./BookingFormField";
import { DateTimePickerForm } from "../TimeDatePicker/TimeDatePicker";

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingForm() {
  const [state, formAction] = useActionState(onSubmitAction, {
    message: "",
  });

  console.log(state);

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fname: "",
      lname: "",
      "street-address": "",
      "postal-code": "",
      state: "LA",
      bookingDate: "",
      ...(state.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleClearForm = () => {
    form.reset();
  };

  console.log(form.getValues());

  return (
    <div className="w-96 border p-4 bg-slate-100 rounded-md">
      <Form {...form}>
        <form
          className="space-y-4"
          autoComplete="on"
          ref={formRef}
          action={formAction}
          onSubmit={(evt) => {
            evt.preventDefault();
            form.handleSubmit(() => {
              startTransition(() => {
                if (!formRef.current) {
                  throw Error("Form element not found");
                }
                formAction(new FormData(formRef.current));
              });
            })(evt);
          }}
        >
          <BookingFormField placeholder="First name" name="fname" />
          <BookingFormField placeholder="Last name" name="lname" />
          <BookingFormField placeholder="Address" name="street-address" />
          <BookingFormField placeholder="Postcode" name="postal-code" />
          <BookingFormField placeholder="State" name="state" disabled />
          <DateTimePickerForm />
          <div className="flex gap-1 justify-end mt-4">
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Submit
            </Button>
            <Button onClick={handleClearForm} variant="outline">
              Clear
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
