import { View, StyleSheet } from "react-native";
import { IconButton } from "../components/ui/IconButton";
import { GlobalStyle } from "../constants/style";
import { ButtonComp } from "../components/ui/Button";
export function ManageExpenses({ route, navigation }) {
  const deleteExpensesHandler = () => {
    console.log("delete");
  };

  const cancelHandler = () => {
    // console.log("cancel");
    navigation.goBack();
  };

  const deleteExpense = () => {
    navigation.goBack();
  };
  const confrimHandler = () => {
    console.log("confrim");
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
      <View style={style.buttonStyle}>
        <ButtonComp
          mode="flat"
          onPres={cancelHandler}
          styleProps={style.CancelCompStyle}
        >
          Cancel
        </ButtonComp>
        <ButtonComp
          mode="flat"
          onPres={confrimHandler}
          styleProps={style.confiemCompStyle}
        >
          {isEditing ? "Update" : "Add"}
        </ButtonComp>
      </View>
      <View style={style.deleteContainer}>
        {isEditing && (
          <IconButton
            icon="trash"
            size={30}
            color={GlobalStyle.colors.error500}
            onPress={deleteExpensesHandler}
          />
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary800,
    alignItems: "center",
  },
  buttonStyle: {
    // flex: 1
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: "center",
  },

  CancelCompStyle: {
    backgroundColor: GlobalStyle.colors.primary700,
    marginBottom: 8,
    width: 100,
  },

  confiemCompStyle: {
    backgroundColor: GlobalStyle.colors.primary700,
    width: 100,
  },
});
