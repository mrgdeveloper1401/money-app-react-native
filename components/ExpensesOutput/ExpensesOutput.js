import { View, StyleSheet } from "react-native";
import { ExpensesSamuuray } from "./ExpensesSummery";
import { ExpensesList } from "./ExpensesList";
import { GlobalStyle } from "../../constants/style";

const DUMMY_EXPENSES = [
  {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date('2021-12-19')
  },
  {
      id: "e2",
      description: "A pair of trousers",
      amount: 89.29,
      date: new Date('2021-12-01')
  },
  {
      id: "e3",
      description: "A book",
      amount: 14.99,
      date: new Date('2022-12-01')
  },
  {
      id: "e4",
      description: "Groceries",
      amount: 125.50,
      date: new Date('2022-11-15')
  },
  {
      id: "e5",
      description: "Restaurant dinner",
      amount: 78.25,
      date: new Date('2022-10-22')
  },
  {
      id: "e6",
      description: "Gasoline",
      amount: 65.00,
      date: new Date('2022-09-30')
  },
  {
      id: "e7",
      description: "Electricity bill",
      amount: 120.75,
      date: new Date('2022-08-10')
  },
  {
      id: "e8",
      description: "Internet subscription",
      amount: 45.99,
      date: new Date('2022-07-05')
  },
  {
      id: "e9",
      description: "Movie tickets",
      amount: 32.50,
      date: new Date('2022-06-18')
  },
  {
      id: "e10",
      description: "Gym membership",
      amount: 39.99,
      date: new Date('2022-05-12')
  },
  {
      id: "e11",
      description: "Coffee machine",
      amount: 199.99,
      date: new Date('2022-04-03')
  },
  {
      id: "e12",
      description: "Phone repair",
      amount: 85.00,
      date: new Date('2022-03-21')
  },
  {
      id: "e13",
      description: "Birthday gift",
      amount: 75.00,
      date: new Date('2022-02-14')
  },
  {
      id: "e14",
      description: "Taxi rides",
      amount: 42.30,
      date: new Date('2022-01-07')
  },
  {
      id: "e15",
      description: "Concert tickets",
      amount: 150.00,
      date: new Date('2021-11-25')
  }
];

export function ExpensesOutput({ expenses, expensesPeriodName }) {
  // console.log(expenses);
  // console.log(expensesPeriodName);
  
  return (
    <View style={style.container}>
      <ExpensesSamuuray periodName={expensesPeriodName} expenses={DUMMY_EXPENSES}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
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