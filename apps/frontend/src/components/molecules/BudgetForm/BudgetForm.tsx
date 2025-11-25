import { Check } from "lucide-react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

interface BudgetFormData {
  name: string;
  amount: string;
}

interface BudgetFormProps {
  formData: BudgetFormData;
  onFormDataChange: (data: BudgetFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

const BudgetForm = ({
  formData,
  onFormDataChange,
  onSubmit,
  onCancel,
  isEditing = false,
}: BudgetFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        label="Название счета"
        value={formData.name}
        onChange={(e) =>
          onFormDataChange({ ...formData, name: e.target.value })
        }
        placeholder="Например: Основной счет"
        required
        autoFocus
      />
      <Input
        label="Сумма"
        type="number"
        step="0.01"
        min="0"
        value={formData.amount}
        onChange={(e) =>
          onFormDataChange({ ...formData, amount: e.target.value })
        }
        placeholder="0"
        required
      />
      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          className="flex-1"
        >
          Отмена
        </Button>
        <Button type="submit" className="flex-1">
          <Check className="w-4 h-4 mr-2" />
          {isEditing ? "Сохранить" : "Создать"}
        </Button>
      </div>
    </form>
  );
};

export default BudgetForm;
