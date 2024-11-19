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

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingForm() {
  const [state, formAction] = useActionState(onSubmitAction, {
    message: "",
  });

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fname: "",
      lname: "",
      "street-address": "",
      "postal-code": "",
      ...(state.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleClearForm = () => {
    form.reset({
      fname: "",
      lname: "",
      "street-address": "",
      "postal-code": "",
    });
  };

  return (
    <Form {...form}>
      <form
        autoComplete="on"
        ref={formRef}
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            startTransition(() => {
              formAction(new FormData(formRef.current!));
            });
          })(evt);
        }}
      >
        <BookingFormField placeholder="First name" name="fname" />
        <BookingFormField placeholder="Last name" name="lname" />
        <BookingFormField placeholder="Address" name="street-address" />
        <BookingFormField placeholder="Postcode" name="postal-code" />
        <div className="flex gap-1 justify-end">
          <Button
            type="submit"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            Submit
          </Button>
          <Button onClick={handleClearForm} variant="outline">
            Clear
          </Button>
        </div>
      </form>
    </Form>
  );
}
