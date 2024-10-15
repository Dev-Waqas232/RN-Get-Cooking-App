import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signin from "./screens/auth/Signin";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Signin" component={Signin} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
