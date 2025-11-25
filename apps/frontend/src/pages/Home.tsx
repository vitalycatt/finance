import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const Home = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  const handleAdd = () => {
    if (activeTab === "expenses") {
      console.log("Добавить трату");
    } else {
      console.log("Добавить доход");
    }
  };

  const buttonLabel =
    activeTab === "expenses" ? "Добавить трату" : "Добавить доход";

  return (
    <div className="h-full flex flex-col">
      <Tabs
        defaultValue="expenses"
        className="w-full flex flex-col flex-1"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-2 gap-4 mb-8 h-12 bg-muted/50">
          <TabsTrigger
            value="expenses"
            className="text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
          >
            ТРАТЫ
          </TabsTrigger>

          <TabsTrigger
            value="income"
            className="text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
          >
            ДОХОД
          </TabsTrigger>
        </TabsList>

        <TabsContent value="expenses" className="flex-1 mt-0">
          {/* Контент для трат */}
        </TabsContent>

        <TabsContent value="income" className="flex-1 mt-0">
          {/* Контент для доходов */}
        </TabsContent>
      </Tabs>

      <div className="mt-auto pt-4">
        <button
          onClick={handleAdd}
          className={cn(
            "w-full h-14 rounded-lg bg-primary hover:bg-primary/90",
            "text-primary-foreground shadow-lg hover:shadow-xl",
            "flex items-center justify-center gap-2",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            "font-semibold text-base"
          )}
          aria-label={buttonLabel}
        >
          <Plus className="w-6 h-6 stroke-[2.5]" />
          <span>{buttonLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
