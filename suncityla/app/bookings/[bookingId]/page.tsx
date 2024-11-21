import getBookingById from  "./bookingById";

export default async function BookingConfirmed({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;
  console.log(bookingId);
  

  const booking = await getBookingById(bookingId);

  if (!booking) {
    return (
      <div>
        <h1>Booking Not Found</h1>
        <p>No booking was found with the provided ID.</p>
      </div>
    );
  }



  return (
    <div>
      <h1>Booking Confirmed</h1>
      <p>Your booking has been confirmed.</p>
      <p>Booking id: {bookingId}</p>
    </div>
  );
}
