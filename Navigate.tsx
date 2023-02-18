import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Authorization from "./Components/Authorization/Authorization";
import Main from "./Components/Main/Main";
import React from "react";
import ChoiseServises from "./Components/ChoiseServises/ChoiseServises";
import ServiceInfo from "./Components/ServiceInfo/ServiceInfo";
import ServiceChat from "./Components/ServiceChat/ServiceChat";
import PageOneRegistrationUser from "./Components/Registration/PageRegistrationUser/PageOneRegistrationUser";
import PageTwoRegistrationUser from "./Components/Registration/PageRegistrationUser/PageTwoRegistrationUser";

export type RootStackParamList = {
  Main: undefined;
  Authorization: undefined;
  Registration: undefined;
  ChoiseServises: undefined;
  ServiceInfo: undefined;
  ServiceChat: undefined;
  PageOneRegistrationUser: undefined;
  PageTwoRegistrationUser: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigate: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Authorization" component={Authorization} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ChoiseServises" component={ChoiseServises} />
        <Stack.Screen name="ServiceInfo" component={ServiceInfo} />
        <Stack.Screen name="ServiceChat" component={ServiceChat} />
        <Stack.Screen
          name="PageOneRegistrationUser"
          component={PageOneRegistrationUser}
        />
        <Stack.Screen
          name="PageTwoRegistrationUser"
          component={PageTwoRegistrationUser}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigate;
