import FindBookingForm from './components/BookingForm/FindBookingForm';

export default function Page () {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <h1 className=' font-bold mb-4'>Please enter your booking reference</h1>
      </div>
      <FindBookingForm />;
    </div>
  )
}
