import getBookings from "./action";

export default async function BookingsPage() {
  const bookings = await getBookings();

  return (
    <div>
      <h1>Bookings</h1>
      {JSON.stringify(bookings, null, 2)}
    </div>
  );
}
