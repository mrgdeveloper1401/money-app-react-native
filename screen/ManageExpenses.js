import { View, StyleSheet, useEffect } from "react-native";
import { IconButton } from "../components/ui/IconButton";
import { GlobalStyle } from "../constants/style";
export function ManageExpenses({ route, navigation }) {
  const deleteExpensesHandler = () => {
    console.log("delete");
  };
  const expensesId = route.params?.expensesId || null;
  const isEditing = !!expensesId;

  navigation.setOptions(
    {
      title: isEditing ? "Edit Expense" : "Add Expense",
    }[(navigation, isEditing)]
  );
  return (
    <View style={style.container}>
      {isEditing && (
        <IconButton
          icon="trash"
          size={30}
          color={GlobalStyle.colors.error500}
          onPress={deleteExpensesHandler}
        />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary800,
    alignItems: "center"
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
