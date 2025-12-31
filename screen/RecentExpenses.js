import { useContext } from "react";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../state/state_context";
import { getDateMinDays } from "../util/dateCustom";


export function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  
  const resenctCtx = expensesCtx.expenses.filter((item) => {
    const today = new Date();
    const date7DaysAgo = getDateMinDays(today, 7);
    
    return item.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={resenctCtx}
      expensesPeriodName="last 7 days"
    />
  );
}
