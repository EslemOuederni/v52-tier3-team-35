'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';
import { BookingActionAlert } from './BookingActionAlert';
import { useState } from 'react';
import onCancelBooking from '@/app/booking/actions/onCancelBooking';
import { BookingStatus } from '@prisma/client';
import Link from 'next/link';

const BookingActions = ({
  bookingId,
  bookingStatus,
}: {
  bookingId: string;
  bookingStatus: BookingStatus;
}) => {
  const [open, setOpen] = useState(false);

  const handleShowWarningModal = async () => {
    setOpen(true);
  };

  const handleCancelBooking = async () => {
    await onCancelBooking(bookingId);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" onClick={() => setOpen(!open)}>
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Manange booking</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {bookingStatus === 'PENDING' && (
          <Link href={`${bookingId}/amend`}>
            <DropdownMenuItem>Amend</DropdownMenuItem>
          </Link>
        )}

        <BookingActionAlert
          header="Cancel booking"
          description="Are you sure you want to cancel this booking?"
          TriggerButton={
            <DropdownMenuItem
              className="text-destructive font-bold"
              onClick={handleShowWarningModal}
            >
              Cancel
            </DropdownMenuItem>
          }
          onClose={() => setOpen(false)}
          onContinue={handleCancelBooking}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BookingActions;
