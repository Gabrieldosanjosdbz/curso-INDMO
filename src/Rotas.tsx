import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Cadastro from "./Cadastro";
import Login from "./Login";
import Tabs from "./tabs/Index";

export default function Rotas(){
    return (
         // NavigationContainer é o componente de nível superior que gerencia o estado da navegação do Navigation
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}