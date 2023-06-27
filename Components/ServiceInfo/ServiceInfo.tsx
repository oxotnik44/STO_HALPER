import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";

import { useSelector } from "react-redux";
import ServiceInfoForAdmin from "./ServiceInfoForAdmin";
import ServiceInfoForUser from "./ServiceInfoForUser";
import { NavigationContainer } from "@react-navigation/native";

interface ServiceInfoState {
  serviceInfoReducer: {
    numberService: number;
    isAdmin: boolean;
    dataService: [
      {
        nameAdmin: string;
        webAddress: string;
        nameService: string;
        startOfWork: string;
        endOfWork: string;
        telephoneNumber: string;
        city: string;
        address: string;
        index: string;
      }
    ];
  };
}
interface ServiceInfo {
  regServiceDataReducer: {
    nameAdmin: string;
    webAddress: string;
    nameService: string;
    startOfWork: string;
    endOfWork: string;
    telephoneNumber: string;
    city: string;
    address: string;
    index: string;
    workingNumber: string;
  };
}

type ChoiseServiceProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const ServiceInfo: React.FC<ChoiseServiceProps> = ({ navigation }) => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.serviceInfoReducer  
  );

  return (
    <NavigationContainer independent={true}>
      {dataServiceInfo.isAdmin ? (
        <ServiceInfoForAdmin navigation={navigation} />
      ) : (
        <ServiceInfoForUser />
      )}
    </NavigationContainer>
  );
};

export default ServiceInfo;
