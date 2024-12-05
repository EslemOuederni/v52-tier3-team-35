import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export function BookingActionAlert({
  header,
  description,
  TriggerButton,
  onClose,
  onContinue,
}: {
  header: string;
  description: string;
  TriggerButton: React.ReactNode;
  onClose: () => void;
  onContinue: () => void;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{TriggerButton}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>No</AlertDialogCancel>
          <AlertDialogAction
            onClick={onContinue}
            className="bg-destructive text-white font-bold hover:bg-destructive"
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
