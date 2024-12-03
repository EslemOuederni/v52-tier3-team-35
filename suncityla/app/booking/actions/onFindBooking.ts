'use server';

import prisma from '@/prisma/prismaClient';
import { Booking } from '@prisma/client';
import findBookingFormSchema from '@/app/booking/schemas/findBookingForm';

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  errors?: string[];
  bookingRef?: Booking['id'];
  booking?: Booking;
};

const onFindBookingAction = async (prvState: FormState, data: FormData): Promise<FormState> => {
  const formData = Object.fromEntries(data);
  const parsed = findBookingFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      message: 'Invalid form data',
      fields,
      errors: parsed.error.issues.map((issue) => issue.message),
    };
  }

  const booking = await prisma.booking.findFirst({
    where: {
      id: parsed.data.bookingRef,
    },
  });

  if (!booking) {
    return {
      errors: ['Booking not found'],
      message: 'failed',
    };
  }

  return {
    booking,
    message: 'success',
  };
};

export default onFindBookingAction;
