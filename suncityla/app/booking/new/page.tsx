import BookingForm from '../components/BookingForm/BookingForm';

export default function NewBooking () {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className=' font-bold mb-4'>New Booking</h1>
      <BookingForm />
    </div>
  );
}
