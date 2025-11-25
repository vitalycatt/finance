import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { BudgetDialog, type BudgetFormData } from "@/components/organisms";
import { cn } from "@/lib/utils";

interface Budget {
  id: string;
  name: string;
  amount: number;
}

const Budgets = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<BudgetFormData>({
    name: "",
    amount: "",
  });

  const handleOpenForm = (budget?: Budget) => {
    if (budget) {
      setEditingId(budget.id);
      setFormData({ name: budget.name, amount: budget.amount.toString() });
    } else {
      setEditingId(null);
      setFormData({ name: "", amount: "" });
    }
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingId(null);
    setFormData({ name: "", amount: "" });
  };

  const handleOpenChange = (open: boolean) => {
    setIsFormOpen(open);
    if (!open) {
      setEditingId(null);
      setFormData({ name: "", amount: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(formData.amount);

    if (!formData.name.trim() || isNaN(amount) || amount <= 0) {
      return;
    }

    if (editingId) {
      setBudgets(
        budgets.map((budget) =>
          budget.id === editingId
            ? { ...budget, name: formData.name, amount }
            : budget
        )
      );
    } else {
      const newBudget: Budget = {
        id: crypto.randomUUID(),
        name: formData.name,
        amount,
      };
      setBudgets([...budgets, newBudget]);
    }

    handleCloseForm();
  };

  const handleDelete = (id: string) => {
    setBudgets(budgets.filter((budget) => budget.id !== id));
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto pb-4">
        {budgets.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <div className="text-center">
              <p className="text-lg mb-2">Нет счетов</p>
              <p className="text-sm">
                Нажмите кнопку ниже, чтобы создать первый счет
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {budgets.map((budget) => (
              <div
                key={budget.id}
                className={cn(
                  "p-4 rounded-lg border bg-card",
                  "flex items-center justify-between",
                  "hover:shadow-md transition-shadow"
                )}
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{budget.name}</h3>
                  <p className="text-primary font-medium text-xl">
                    {formatAmount(budget.amount)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenForm(budget)}
                    className={cn(
                      "p-2 rounded-md hover:bg-muted transition-colors",
                      "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label="Редактировать счет"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(budget.id)}
                    className={cn(
                      "p-2 rounded-md hover:bg-destructive/10 transition-colors",
                      "text-muted-foreground hover:text-destructive"
                    )}
                    aria-label="Удалить счет"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BudgetDialog
        open={isFormOpen}
        onOpenChange={handleOpenChange}
        formData={formData}
        onFormDataChange={setFormData}
        onSubmit={handleSubmit}
        onCancel={handleCloseForm}
        isEditing={!!editingId}
      />

      <div className="mt-auto pt-4">
        <button
          onClick={() => handleOpenForm()}
          className={cn(
            "w-full h-14 rounded-lg bg-primary hover:bg-primary/90",
            "text-primary-foreground shadow-lg hover:shadow-xl",
            "flex items-center justify-center gap-2",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            "font-semibold text-base"
          )}
          aria-label="Создать счет"
        >
          <Plus className="w-6 h-6 stroke-[2.5]" />
          <span>Создать счет</span>
        </button>
      </div>
    </div>
  );
};

export default Budgets;
