import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const BookingFormField = ({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel />
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default BookingFormField;
