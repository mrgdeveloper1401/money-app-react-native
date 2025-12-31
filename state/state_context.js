import { createContext, useReducer } from "react";
import { randomUUID } from "expo-crypto";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-12-25"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2025-12-26"),
  },
  {
    id: "e3",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e4",
    description: "Groceries",
    amount: 125.5,
    date: new Date("2022-11-15"),
  },
  {
    id: "e5",
    description: "Restaurant dinner",
    amount: 78.25,
    date: new Date("2022-10-22"),
  },
  {
    id: "e6",
    description: "Gasoline",
    amount: 65.0,
    date: new Date("2022-09-30"),
  },
  {
    id: "e7",
    description: "Electricity bill",
    amount: 120.75,
    date: new Date("2022-08-10"),
  },
  {
    id: "e8",
    description: "Internet subscription",
    amount: 45.99,
    date: new Date("2022-07-05"),
  },
  {
    id: "e9",
    description: "Movie tickets",
    amount: 32.5,
    date: new Date("2022-06-18"),
  },
  {
    id: "e10",
    description: "Gym membership",
    amount: 39.99,
    date: new Date("2022-05-12"),
  },
  {
    id: "e11",
    description: "Coffee machine",
    amount: 199.99,
    date: new Date("2022-04-03"),
  },
  {
    id: "e12",
    description: "Phone repair",
    amount: 85.0,
    date: new Date("2022-03-21"),
  },
  {
    id: "e13",
    description: "Birthday gift",
    amount: 75.0,
    date: new Date("2022-02-14"),
  },
  {
    id: "e14",
    description: "Taxi rides",
    amount: 42.3,
    date: new Date("2022-01-07"),
  },
  {
    id: "e15",
    description: "Concert tickets",
    amount: 150.0,
    date: new Date("2021-11-25"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: ({ id, description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.method) {
    case "ADD":
      const id = randomUUID();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const itemIndex = state.findIndex((expense) => {
        return expense.id === action.payload.id;
      });
      const updatableExpense = state[itemIndex];
      const updatableItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[itemIndex] = updatableItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

export function ExpensesContextProvider({ children }) {
  // dispath --> action function
  const [expenseState, dispach] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispach({ method: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispach({ method: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispach({ method: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}
