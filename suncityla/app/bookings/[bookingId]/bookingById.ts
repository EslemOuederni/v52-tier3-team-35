"use server";

import prisma from "@/prisma/prismaClient";

const getBookingById = async (serverBookingId: string) => {
  const booking = await prisma.booking.findUnique({
    
    
    where: { id:serverBookingId},
    
  });
  return booking;
  
};

export default getBookingById;
