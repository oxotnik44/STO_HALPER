import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Authorization from "./Components/Authorization/Authorization";
import Main from "./Components/Main/Main";
import React from "react";
import ServiceInfo from "./Components/ServiceInfo/ServiceInfo";
import ServiceChat from "./Components/ServiceChat/ServiceChat";
import PageRegistrationUser from "./Components/Registration/PageRegistrationUser/PageRegistrationUser";
import Registration from "./Components/Registration/Registration";
import PageOneRegistrationService from "./Components/Registration/PageRegistrationService/PageOneRegistrationService";
import PageTwoRegistrationService from "./Components/Registration/PageRegistrationService/PageTwoRegistrationService";
import PageThreeRegistrationService from "./Components/Registration/PageRegistrationService/PageThreeRegistrationService";
import UserChoiceOfServices from "./Components/UserChoiceOfServices/UserChoiceOfServices";
import ChoiseService from "./Components/ChoiseService/ChoiseService";
import ChoiseAssistanceService from "./Components/ChoiseAssistanceService/ChoiseAssistanceService";

export type RootStackParamList = {
  Main: undefined;
  Authorization: undefined;
  Registration: undefined;
  ChoiseServises: undefined;
  ServiceInfo: undefined;
  ServiceChat: undefined;
  PageRegistrationUser: undefined;
  PageOneRegistrationService: undefined;
  PageTwoRegistrationService: undefined;
  PageThreeRegistrationService: undefined;
  Example: undefined;
  ChoiseService: undefined;
  UserChoiceOfServices: undefined;
  ChoiseAssistanceService: undefined;
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
        <Stack.Screen
          name="UserChoiceOfServices"
          component={UserChoiceOfServices}
        />
        <Stack.Screen name="Authorization" component={Authorization} />

        <Stack.Screen
          name="PageOneRegistrationService"
          component={PageOneRegistrationService}
        />
        <Stack.Screen
          name="ChoiseAssistanceService"
          component={ChoiseAssistanceService}
        />
        <Stack.Screen name="ChoiseService" component={ChoiseService} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen
          name="PageThreeRegistrationService"
          component={PageThreeRegistrationService}
        />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ServiceInfo" component={ServiceInfo} />
        <Stack.Screen
          name="PageRegistrationUser"
          component={PageRegistrationUser}
        />

        <Stack.Screen
          name="PageTwoRegistrationService"
          component={PageTwoRegistrationService}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigate;
