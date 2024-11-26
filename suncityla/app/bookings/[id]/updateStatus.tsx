import { BookingStatus } from "@prisma/client"; 


const updateBookingStatus = async (serverBookingId: string, newStatus: string) => {
  

  const validStatuses: BookingStatus[] = [
    BookingStatus.PENDING,
    BookingStatus.CONFIRMED,
    BookingStatus.CANCELLED,
    BookingStatus.VISITED,
  ];

  
}