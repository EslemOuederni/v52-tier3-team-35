import BookingCard from '@/app/components/BookingCard/BookingCard';
import prisma from '@/prisma/prismaClient';
import BackButton from '../components/BackButton/BackButton';

export default async function BookingConfirmed({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;

  const booking = await prisma.booking.findUnique({
    where: {
      id: bookingId,
    },
  });

  if (!booking) {
    return <div>No booking found</div>;
  }

  return (
    <div>
      <h1>Your booking status.</h1>
      <BookingCard
        userData={{
          firstname: booking.firstname,
          lastname: booking.lastname,
          streetAddress: booking.streetAddress,
          postalCode: booking.postalCode,
          state: booking.state,
        }}
        bookingDate={booking.bookingDate}
        status={booking.status}
      />
      <BackButton />
    </div>
  );
}
