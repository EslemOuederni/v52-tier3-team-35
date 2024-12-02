'use client';

import { useActionState, useRef, startTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import BookingFormField from './BookingFormField';
import LoadingModal from '@/app/components/modals/Loading';
import onFindBookingAction from '../../actions/onFindBooking';
import findBookingFormSchema from '../../schemas/findBookingForm';

export type BookingFormData = z.infer<typeof findBookingFormSchema>;

export default function FindBookingForm() {
  const [state, formAction, isPending] = useActionState(onFindBookingAction, {
    message: '',
    errors: [],
  });

  const router = useRouter();

  const form = useForm<z.infer<typeof findBookingFormSchema>>({
    resolver: zodResolver(findBookingFormSchema),
    defaultValues: {
      bookingRef: '',
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleClearForm = () => {
    form.reset();
  };

  useEffect(() => {
    if (state.booking && !isPending) {
      router.push(`/booking/${state.booking.id}`);
    }
    if (state.errors) {
      form.setError('bookingRef', {
        message: state.errors.join(' '),
      });
    }
  }, [state, isPending, router, form]);
  console.log(isPending);

  return (
    <div className="w-96 border p-4 bg-slate-100 rounded-md">
      {<LoadingModal show={isPending} />}
      <Form {...form}>
        <form
          className="space-y-4"
          autoComplete="on"
          ref={formRef}
          action={formAction}
          onSubmit={(evt) => {
            evt.preventDefault();
            form.handleSubmit(() => {
              formRef.current?.reset();
              startTransition(() => {
                if (!formRef.current) {
                  throw Error('Form element not found');
                }
                formAction(new FormData(formRef.current));
              });
            })(evt);
          }}
        >
          <BookingFormField placeholder="Booking reference" name="bookingRef" />
          <div className="flex gap-1 justify-end mt-4">
            <Button onClick={handleClearForm} variant="outline">
              Clear
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
