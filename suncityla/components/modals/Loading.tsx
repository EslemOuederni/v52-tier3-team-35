import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const LoadingModal = ({
  show,
  title,
  description,
}: {
  show: boolean;
  title?: string;
  description?: string;
}) => {
  return (
    <Dialog open={show}>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle>{title || 'Loading, please wait a moment'}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
