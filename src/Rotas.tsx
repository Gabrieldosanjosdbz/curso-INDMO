import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Cadastro from "./Cadastro";
import Login from "./Login";

export default function Rotas(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}