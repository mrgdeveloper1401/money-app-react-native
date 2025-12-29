import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
export function RecentExpenses() {
  return <ExpensesOutput expensesPeriodName="last 7 days" />;
}
