import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigate";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import { styles } from "./PageThreeRegistrationServiceStyles";
import CheckBox from "react-native-check-box";
import { updateAssistanceService } from "../../../redux/reducers/choiceAssistanceReducer";
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
interface AssistanceServiceState {
  assistanceReducer: {
    dataAssistance: [
      {
        assistanceService: string;
        isSelectedAssistance: boolean;
      }
    ];
  };
}

const PageTreeRegistrationService: React.FC = () => {
  const dataAssistance = useSelector(
    (state: AssistanceServiceState) => state.assistanceReducer.dataAssistance
  );
  const dispatch = useDispatch();

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
                handleCheckBoxChange(index, !item.isSelectedAssistance); // Передача двух аргументов в функцию handleCheckBoxChange
              }}
              checkBoxColor={"yellow"}
              isChecked={item.isSelectedAssistance} // Использование item.isSelectedAssistance вместо dataAssistance.isSelectedAssistance
            />
          </View>
        ))}
      </View>
    </View>
  );
};
export default PageTreeRegistrationService;
