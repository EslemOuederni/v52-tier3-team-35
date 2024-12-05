'use server';
import { revalidatePath } from 'next/cache';

import prisma from '@/prisma/prismaClient';

async function onCancelBooking(bookingId: string) {
  try {
    const booking = await prisma.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        status: 'CANCELLED',
      },
    });
    revalidatePath(`/booking/${bookingId}`);
    return booking;
  } catch (error) {
    return error;
  }
}

export default onCancelBooking;
