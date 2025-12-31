import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

import { ManageExpenses } from "./screen/ManageExpenses";
import { RecentExpenses } from "./screen/RecentExpenses";
import { AllExpenses } from "./screen/AllExpenses";
import { GlobalStyle } from "./constants/style";
import { IconButton } from "./components/ui/IconButton";
import { ExpensesContextProvider } from "./state/state_context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverView() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyle.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyle.colors.primary500 },
        tabBarActiveTintColor: GlobalStyle.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpenses");
            }}
          />
        ),
      })}
    >
      {/* recent screen */}
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={25} />
          ),
        }}
      />
      {/* all expenses screen */}
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={25} />
          ),
        }}
      />
      {/* manage expenses screen */}
      <BottomTabs.Screen
        name="ManageExpenses"
        component={ManageExpenses}
        options={{
          title: "Manage Expenses",
          tabBarLabel: "Manage Expenses",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="money-bill-alt" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <ExpensesContextProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          {/* manage expenses */}
          <Stack.Navigator>
            <Stack.Screen
              name="ExpensesOverView"
              component={ExpensesOverView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
