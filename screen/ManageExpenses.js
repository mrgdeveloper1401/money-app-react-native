import { Text } from "react-native";
export function ManageExpenses({ route, navigation }) {

  const expensesId = route.params?.expensesId || null;
  const isEditing = !!expensesId;
  
  navigation.setOptions({
    title: isEditing ? "Edit Expense" : "add Expense",
  });
  return <Text>Manage Expenses screen</Text>;
}
