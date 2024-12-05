import prisma from '@/prisma/prismaClient';
import BookingForm from '../../components/BookingForm/BookingForm';

export default async function AmendBooking({ params }: { params: Promise<{ bookingId: string }> }) {
  const { bookingId } = await params;
  const booking = await prisma.booking.findFirst({
    where: {
      id: bookingId,
    },
  });

  if (booking?.status === 'CANCELLED') {
    return <div>Booking has been cancelled</div>;
  }

  return (
    <div>
      <h1>Amend Booking</h1>
      <BookingForm booking={booking} />
    </div>
  );
}
