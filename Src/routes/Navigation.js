import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Image from "../Screen/Image/Image";

const Stack = createNativeStackNavigator();


export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Image" component={Image}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
