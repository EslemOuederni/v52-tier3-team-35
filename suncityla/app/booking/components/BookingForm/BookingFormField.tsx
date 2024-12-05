import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const BookingFormField = ({
  placeholder,
  name,
  type,
  disabled,
}: {
  placeholder: string;
  name: string;
  type?: string;
  disabled?: boolean;
}) => {
  return (
    <FormField
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel />
            <FormControl>
              <Input
                type={type || 'text'}
                className="bg-white"
                placeholder={placeholder}
                readOnly={disabled}
                {...field}
              />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default BookingFormField;
