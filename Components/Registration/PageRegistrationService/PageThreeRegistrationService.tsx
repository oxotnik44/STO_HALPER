import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigate";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Pressable } from "react-native";
import { styles } from "./PageThreeRegistrationServiceStyles";
import CheckBox from "react-native-check-box";
import { updateAssistanceService } from "../../../redux/reducers/registrationReducer/choiceAssistanceReducer";
import { handleRegistrationService } from "../../../api/apiService";
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
interface AuthDataService {
  registrationReducer: {
    login: string;
    password: string;
  };
}
interface PersonalServiceData {
  regServiceDataReducer: {
    nameService:string,
    nameAdmin: string;
    webAddress: string;
    startOfWork: string;
    endOfWork: string;
    telephoneNumber: string;
    city: string;
    address: string;
    index: string;
    workingNumber: string;
  };
}
interface AssistanceServiceState {
  assistanceReducer: {
    dataAssistance: [
      {
        assistanceService: string;
        isSelectedAssistanceService: boolean;
      }
    ];
  };
}

const PageTreeRegistrationService: React.FC<AuthorizationProps> = ({
  navigation,
}) => {
  const dataAssistance = useSelector(
    (state: AssistanceServiceState) => state.assistanceReducer.dataAssistance
  );
  const personalDataService = useSelector(
    (state: PersonalServiceData) => state.regServiceDataReducer
  );
  const authDataService = useSelector(
    (state: AuthDataService) => state.registrationReducer
  );
  const dispatch = useDispatch();
  
  const handleContinuePress = async () => {
    const selectedServices = dataAssistance
      .filter((item) => item.isSelectedAssistanceService)
      .map((item) => item.assistanceService);

    // Добавляем асинхронный вызов функции handleRegistrationService
    // с использованием async/await или промисов
    try {
      await handleRegistrationService(
        authDataService.login,
        authDataService.password,
        personalDataService.nameService,
        personalDataService.nameAdmin,
        personalDataService.webAddress,
        personalDataService.startOfWork,
        personalDataService.endOfWork,
        personalDataService.telephoneNumber,
        personalDataService.city,
        personalDataService.address,
        personalDataService.index,
        selectedServices, // Передаем актуальное значение состояния
        navigation,
        dispatch
      );
      // Действия, выполняемые после успешного выполнения функции handleRegistrationService
    } catch (error) {
      // Обработка ошибок, если они возникнут
    }
  };
  const handleCheckBoxChange = (index, isSelected) => {
    dispatch(updateAssistanceService(index, isSelected));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textAssistanceCaption}>Услуги сервиса:</Text>
      <View style={styles.containerAssistance}>
        {dataAssistance.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Text style={styles.itemTextAssistance}>
              {item.assistanceService}
            </Text>
            <CheckBox
              style={styles.checkBoxStyle}
              onClick={() => {
                handleCheckBoxChange(index, !item.isSelectedAssistanceService); // Передача двух аргументов в функцию handleCheckBoxChange
              }}
              checkBoxColor={"yellow"}
              isChecked={item.isSelectedAssistanceService} // Использование item.isSelectedAssistanceService вместо dataAssistance.isSelectedAssistanceService
            />
          </View>
        ))}
      </View>
      <Pressable style={styles.btnContinue}>
        <Text style={styles.btnTextContinue} onPress={handleContinuePress}>
          Завершить
        </Text>
      </Pressable>
    </View>
  );
};
export default PageTreeRegistrationService;
