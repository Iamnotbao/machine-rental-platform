import { Modal, Button } from '@machine-rental/ui';
export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p>{description}</p>
      <p className="modal-actions">
        <Button onClick={onConfirm}>Confirm</Button>
        <Button onClick={onClose} variant="secondary">
          Cancel
        </Button>
      </p>
    </Modal>
  );
}
