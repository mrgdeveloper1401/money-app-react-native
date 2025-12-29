import { View, Text, StyleSheet } from "react-native";
import { GlobalStyle } from "../../constants/style";

export const ExpensesSamuuray = ({ periodName, expenses }) => {
  // console.log(expenses);
  // console.log(periodName);

  const funSum = (sum, expense) => {
    return sum + expense.amount;
  };
  const expensesSum = expenses.reduce(funSum, 0);
  return (
    <View style={style.container}>
      <Text style={style.period}>{periodName}</Text>
      {/* <Text>${expensesSum.toFixes(2)}</Text> */}
      <Text style={style.sum}>${expensesSum}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyle.colors.primary500,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  period: {
    fontSize: 12,
    color: GlobalStyle.colors.primary100
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyle.colors.primary100
  }
});
