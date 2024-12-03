import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Booking } from '@prisma/client';
import { format } from 'date-fns';

const BookingEntry = ({ booking }: { booking: Booking }) => {
  return (
    <div>
      <div className="flex-row justify-center">
        <div className=" mb-4 font-bold bg-yellow-200 border border-yellow-500 px-6 py-4 rounded-md">
          Your booking reference is {booking.id}
        </div>
      </div>
      <Table>
        <TableCaption>Your booking</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Firstname</TableHead>
            <TableHead>Lastname</TableHead>
            <TableHead>Booking date</TableHead>
            <TableHead>Address line 1</TableHead>
            <TableHead>Address line 2</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Booking status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{booking.firstname}</TableCell>
            <TableCell>{booking.lastname}</TableCell>
            <TableCell>{format(new Date(booking.bookingDate), 'yyyy-MM-dd')}</TableCell>
            <TableCell>{booking.streetAddress}</TableCell>
            <TableCell>{booking.postalCode}</TableCell>
            <TableCell>{booking.state}</TableCell>
            <TableCell>{booking.status}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingEntry;
