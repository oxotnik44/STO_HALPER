import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Authorization from "./Components/Authorization/Authorization";
import Main from "./Components/Main/Main";
import React from "react";
import Registration from "./Components/Registration/Registration";
import ChoiseServises from "./Components/ChoiseServises/ChoiseServises";
import ServiceInfo from "./Components/ServiceInfo/ServiceInfo";

export type RootStackParamList = {
  Main: undefined;
  Authorization: undefined;
  Registration: undefined;
  ChoiseServises: undefined;
  ServiceInfo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigate: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authorization" component={Authorization} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="ChoiseServises" component={ChoiseServises} />
        <Stack.Screen name="ServiceInfo" component={ServiceInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigate;
