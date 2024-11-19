import Link from "next/link";
import getBookings from "./actions/getBookings";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function BookingsPage() {
  const bookings = await getBookings();

  return (
    <div>
      <h1>Bookings</h1>
      {JSON.stringify(bookings, null, 2)}
      <Link href="/bookings/new">
        <Button>New Booking</Button>
      </Link>
    </div>
  );
}
