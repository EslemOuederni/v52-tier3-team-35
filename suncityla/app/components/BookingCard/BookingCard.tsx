import { BookingStatus } from '@prisma/client';
import { format } from 'date-fns';

type UserData = {
  firstname: string;
  lastname: string;
  streetAddress: string;
  postalCode: string;
  state: string;
};

type BookingCardProps = {
  userData: UserData;
  bookingDate: Date;
  status: BookingStatus;
};

const BookingCard = ({
  userData: { firstname, lastname, streetAddress, postalCode, state },
  bookingDate,
  status,
}: BookingCardProps) => {
  return (
    <div className="p-2 border mb-2 w-80">
      <h2>{firstname}</h2>
      <p>{lastname}</p>
      <p>{format(new Date(bookingDate), 'EE dd/MM/yyyy')}</p>
      <p>{streetAddress}</p>
      <p>{postalCode}</p>
      <p>{state}</p>
      <p>{status}</p>
    </div>
  );
};

export default BookingCard;
