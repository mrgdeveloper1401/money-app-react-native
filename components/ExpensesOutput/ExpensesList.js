import { FlatList, Text } from "react-native";
import { ExpensesItem } from "./ExpensesItem";

function renderExpenseItem(itemData) {
  // console.log(itemData.item);
  
  // return <Text>{itemData.item.description}</Text>;
  return <ExpensesItem {...itemData.item} />
}

export const ExpensesList = ({ expenses }) => {
  // console.log(expenses);
  
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem} // render text item
      keyExtractor={(item) => item.id}
    />
  );
};
