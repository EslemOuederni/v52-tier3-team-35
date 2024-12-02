'use client';

import { useActionState, useRef, startTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import BookingFormField from './BookingFormField';
import { DateTimePickerForm } from '../TimeDatePicker/TimeDatePicker';
import LoadingModal from '@/components/modals/Loading';
import onSubmitAction from '@/app/booking/actions/onSubmitAction';
import { bookingFormSchema } from '../../schemas/newBookingForm';

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingForm() {
  const [state, formAction, isPending] = useActionState(onSubmitAction, {
    message: '',
  });

  const router = useRouter();

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fname: '',
      lname: '',
      'street-address': '',
      'postal-code': '',
      state: 'LA',
      bookingDate: new Date().toISOString(),
      ...(state.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleClearForm = () => {
    form.reset();
  };

  useEffect(() => {
    if (state.bookingRef && !isPending) {
      router.push(`/booking/${state.bookingRef}`);
    }
  }, [state.bookingRef, isPending, router]);

  return (
    <div className="w-96 border p-4 bg-slate-100 rounded-md">
      <LoadingModal show={isPending} />
      <Form {...form}>
        <form
          className="space-y-4"
          autoComplete="on"
          ref={formRef}
          action={formAction}
          onSubmit={(evt) => {
            evt.preventDefault();
            form.handleSubmit(() => {
              startTransition(() => {
                if (!formRef.current) {
                  throw Error('Form element not found');
                }
                formAction(new FormData(formRef.current));
              });
            })(evt);
          }}
        >
          <BookingFormField placeholder="First name" name="fname" />
          <BookingFormField placeholder="Last name" name="lname" />
          <BookingFormField placeholder="Address" name="street-address" />
          <BookingFormField placeholder="Postcode" name="postal-code" />
          <BookingFormField placeholder="State" name="state" disabled />
          <DateTimePickerForm />
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
