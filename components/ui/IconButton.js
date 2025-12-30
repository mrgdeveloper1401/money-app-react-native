import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyle } from "../../constants/style";

export function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && style.press}>
      <View style={style.buttonContainer}>
        <Ionicons name={icon} size={size} color={color}/>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginRight: 15,
    // color: GlobalStyle.colors.white
    // backgroundColor: GlobalStyle.colors.white,
  },

  press: {
    opacity: 0.75,
  },
});
