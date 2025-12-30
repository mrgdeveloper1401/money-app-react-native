import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyle } from "../../constants/style";

export function ButtonComp({ children, onPres, mode, styleProps }) {
  return (
    <View style={styleProps}>
      <Pressable onPress={onPres} style={({pressed}) => pressed && style.pressed}>
        <View style={[style.button, mode === "flat" && style.flat]}>
          <Text style={[style.buttonText, mode === "flat" && style.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  styleButton: {
    backgroundColor: GlobalStyle.colors.primary700,
  },
  button: {
    borderRaduis: 4,
    padding: 8,
    backgroundColor: GlobalStyle.colors.primary800,
  },

  flat: {
    backgroundColor: "transparent",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  flatText: {
    color: GlobalStyle.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyle.colors.primary400,
    borderRadius: 4,
  },
});
