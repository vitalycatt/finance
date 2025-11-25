import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { BudgetForm } from "@/components/molecules/BudgetForm";

export interface BudgetFormData {
  name: string;
  amount: string;
}

interface BudgetDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: BudgetFormData;
  onFormDataChange: (data: BudgetFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

const BudgetDialog = ({
  open,
  onOpenChange,
  formData,
  onFormDataChange,
  onSubmit,
  onCancel,
  isEditing = false,
}: BudgetDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Редактировать счет" : "Создать счет"}
          </DialogTitle>
        </DialogHeader>
        <BudgetForm
          formData={formData}
          onFormDataChange={onFormDataChange}
          onSubmit={onSubmit}
          onCancel={onCancel}
          isEditing={isEditing}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BudgetDialog;
