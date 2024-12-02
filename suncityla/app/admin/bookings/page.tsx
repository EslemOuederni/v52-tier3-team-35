import Link from 'next/link';
import getBookings from './actions/getBookings';
import { Button } from '@/components/ui/button';
import BookingCard from '../../components/BookingCard/BookingCard';

export const dynamic = 'force-dynamic';

export default async function BookingsPage() {
  const bookings = await getBookings();

  return (
    <div>
      <h1>Bookings</h1>
      <>
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
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
        ))}
      </>
      <Link href="/booking/new">
        <Button>New Booking</Button>
      </Link>
    </div>
  );
}
