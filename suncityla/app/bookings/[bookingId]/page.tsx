export default async function BookingConfirmed({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;
  console.log(bookingId);

  return (
    <div>
      <h1>Booking Confirmed</h1>
      <p>Your booking has been confirmed.</p>
      <p>Booking id: {bookingId}</p>
    </div>
  );
}
