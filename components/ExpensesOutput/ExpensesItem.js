import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyle } from "../../constants/style";
import { getFormattedDate } from "../../util/dateCustom.js";

export function ExpensesItem({description, amount, date}) {
  return (
    <Pressable>
      <View style={style.expensesItem}>

        <View>
          <Text style={[style.textBase, style.description]}>{description}</Text>
          <Text style={style.textBase}>{getFormattedDate(date)}</Text>
        </View>

        <View style={style.priceContainer}>
          <Text style={style.amount}>{amount}</Text>
        </View>

      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
    expensesItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyle.colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyle.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyle.colors.primary100
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold"
    },
    priceContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    amount: {
        color: GlobalStyle.colors.primary500,
        fontWeight: "bold"
    }
})