"use server";

import { bookingFormSchema } from "../new/schema";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  errors?: string[];
};

const onSubmitAction = async (
  prvState: FormState,
  data: FormData
): Promise<FormState> => {
  const formData = Object.fromEntries(data);
  const parsed = bookingFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      message: "Invalid form data",
      fields,
      errors: parsed.error.issues.map((issue) => issue.message),
    };
  }

  return {
    message: "Booking created",
  };
};

export default onSubmitAction;
