import { View, StyleSheet } from "react-native";
import { ExpensesSamuuray } from "./ExpensesSummery";
import { ExpensesList } from "./ExpensesList";
import { GlobalStyle } from "../../constants/style";


export function ExpensesOutput({ expenses, expensesPeriodName }) {
  // console.log(expenses);
  // console.log(expensesPeriodName);
  
  return (
    <View style={style.container}>
      <ExpensesSamuuray periodName={expensesPeriodName} expenses={expenses}/>
      <ExpensesList expenses={expenses}/>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyle.colors.primary700
  }
})