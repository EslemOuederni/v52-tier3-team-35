import prisma from '@/prisma/prismaClient';
import BackButton from '../components/BackButton/BackButton';
import BookingEntry from '../components/BookingCard/BookingEntry';

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
      <BookingEntry booking={booking} />
      <BackButton />
    </div>
  );
}
