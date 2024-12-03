import { z } from 'zod';

const findBookingFormSchema = z.object({
  bookingRef: z.string().uuid({
    message: 'Invalid booking reference',
  }),
});

export default findBookingFormSchema;
