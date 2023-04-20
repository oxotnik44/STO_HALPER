import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./ChoiseAssistanceServiceStyle";
import { updateAssistanceUser } from "../../redux/reducers/registrationReducer/choiceAssistanceReducer";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import { handleGetService } from "../../api/apiUsers";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
type Navigation = {
  navigation: StackNavigationProp<RootStackParamList>;
};
interface FoundServiceState {
  assistanceReducer: {
    dataAssistance: [
      {
        assistanceService: string;
        urlAssistance: string;
        isSelectedAssistanceUser: boolean;
      }
    ];
  };
}
const ChoiseAssistanceService: React.FC<Navigation> = ({ navigation }) => {
  const dataService = useSelector(
    (state: FoundServiceState) => state.assistanceReducer.dataAssistance
  );
  const dispatch = useDispatch();
  const handleContinuePress = async () => {
    const selectedAssistance = dataService
      .filter((item) => item.isSelectedAssistanceUser)
      .map((item) => item.assistanceService);
    try {
      await handleGetService(
        selectedAssistance, // Передаем актуальное значение состояния
        navigation,
        dispatch
      );
      // Действия, выполняемые после успешного выполнения функции handleRegistrationService
    } catch (error) {
      // Обработка ошибок, если они возникнут
    }
  };

  const handlePressAssistance = (index, isSelected) => {
    dispatch(updateAssistanceUser(index, isSelected));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Поиск"
        style={styles.searchAssistance}
        placeholderTextColor="white"
      />
      <Image
        source={require("./../../assets/loupe2.png")}
        style={styles.loupeImg}
      />
      <Text style={styles.textChoiseAssistance}>Выберите вид услуг</Text>
      {dataService.length > 0 ? (
        dataService.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              handlePressAssistance(index, !item.isSelectedAssistanceUser);
            }}
            style={[
              styles.itemAssistance,
              {
                marginLeft: index % 2 === 0 ? 10 : 20,
                marginTop: 20,
              },
            ]}
          >
            <Image
              source={{ uri: item.urlAssistance }}
              style={[
                styles.imgAssistance,
                {
                  borderWidth: item.isSelectedAssistanceUser ? 5 : 0,
                  borderColor: item.isSelectedAssistanceUser
                    ? "yellow"
                    : "transparent",
                },
              ]}
            />
            <Text style={styles.textAssistance}>{item.assistanceService}</Text>
          </Pressable>
        ))
      ) : (
        <Text>Загрузка данных...</Text>
      )}
      <Pressable style={styles.btnContinue} onPress={handleContinuePress}>
        <Text style={styles.textBtnContinue}>Продолжить</Text>
      </Pressable>
    </View>
  );
};

export default ChoiseAssistanceService;
