"use server";

import prisma from "@/prisma/prismaClient";

const getBookings = async () => {
  const bookings = await prisma.booking.findMany();
  return bookings;
};

export default getBookings;
