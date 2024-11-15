import prisma from "@/prisma/prismaClient";

export const dynamic = "force-dynamic";

const getBookings = async () => {
  const bookings = await prisma.booking.findMany();
  return bookings;
};

export default getBookings;
