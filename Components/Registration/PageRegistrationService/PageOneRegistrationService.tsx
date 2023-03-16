import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Pressable, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigate";
import { setDataRegServicePageOne } from "../../../redux/reducers/registrationReducer/regServiceDataReducer";
import { styles } from "./PageOneRegistrationServiceStyles";

interface RegState {
  regServiceDataReducer: {
    surname: string;
    name: string;
    patronymic: string;
    telephoneNumber: string;
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
const PageOneRegistrationService: React.FC<AuthorizationProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const { surname, name, patronymic, telephoneNumber } = useSelector(
    (state: RegState) => state.regServiceDataReducer
  );
  const checkRegFieldsUser = () => {
    if (!surname || !name || !patronymic || !telephoneNumber) {
      Alert.alert("Заполните все поля!");
    } else {
      navigation.navigate("PageTwoRegistrationService");
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
        <Text style={styles.textReg}>Личные данные</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="Фамилия"
            placeholderTextColor="white"
            onChangeText={(value: string) =>
              dispatch(
                setDataRegServicePageOne(
                  value,
                  name,
                  patronymic,
                  telephoneNumber
                )
              )
            }
          ></TextInput>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Имя"
          placeholderTextColor="white"
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageOne(
                surname,
                value,
                patronymic,
                telephoneNumber
              )
            )
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Отчество"
          placeholderTextColor="white"
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageOne(surname, name, value, telephoneNumber)
            )
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          placeholderTextColor="white"
          onChangeText={(value: string) =>
            dispatch(setDataRegServicePageOne(surname, name, patronymic, value))
          }
        ></TextInput>
        <Pressable style={styles.btnContinue} onPress={checkRegFieldsUser}>
          <Text style={styles.btnTextContinue}>Продолжить</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PageOneRegistrationService;