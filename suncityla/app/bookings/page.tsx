import Link from "next/link";
import getBookings from "./actions/getBookings";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function BookingsPage() {
  const bookings = await getBookings();

  return (
    <div>
      <h1>Bookings</h1>
      {bookings.map((booking) => (
        <div key={booking.id} className="p-2 border mb-2 w-80">
          <h2>{booking.firstname}</h2>
          <p>{booking.lastname}</p>
          <p>{format(new Date(booking.bookingDate), "EE dd/MM/yyyy")}</p>
          <p>{booking.streetAddress}</p>
          <p>{booking.postalCode}</p>
          <p>{booking.state}</p>
          <p>{booking.status}</p>
        </div>
      ))}
      <Link href="/bookings/new">
        <Button>New Booking</Button>
      </Link>
    </div>
  );
}
