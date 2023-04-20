import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setDataCarUser } from "../../../redux/reducers/registrationReducer/regCarUserReducer";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigate";
import { styles } from "./PageRegistrationUserStyles";
import {
  handleGetAssistance,
  handleRegistrationUser,
} from "../../../api/apiUsers";

interface RegState {
  regCarUserReducer: {
    carNumber: string;
    vinNumber: string;
    telephoneNumber: string;
  };
}
interface AuthState {
  registrationReducer: {
    login: string;
    password: string;
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const PageRegistrationUser: React.FC<AuthorizationProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { login, password } = useSelector(
    (state: AuthState) => state.registrationReducer
  );
  const { carNumber, vinNumber, telephoneNumber } = useSelector(
    (state: RegState) => state.regCarUserReducer
  );
  const checkRegFieldsUser = () => {
    if (!carNumber || !vinNumber || !telephoneNumber) {
      Alert.alert("Заполните все поля!");
    } else {
      try {
        handleRegistrationUser(
          login,
          password,
          carNumber,
          vinNumber,
          telephoneNumber,
          navigation
        );
      } catch (e) {}
      try {
        handleGetAssistance(dispatch);
      } catch (e) {}
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
        <Text style={styles.textReg}>Данные авто</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="Госномер"
            placeholderTextColor="white"
            onChangeText={(value: string) =>
              dispatch(setDataCarUser(value, vinNumber, telephoneNumber))
            }
          ></TextInput>
        </View>
        <TextInput
          style={styles.input}
          placeholder="VIN-номер"
          placeholderTextColor="white"
          value={vinNumber}
          onChangeText={(value: string) =>
            dispatch(setDataCarUser(carNumber, value, telephoneNumber))
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          placeholderTextColor="white"
          value={telephoneNumber}
          onChangeText={(value: string) =>
            dispatch(setDataCarUser(carNumber, vinNumber, value))
          }
        ></TextInput>
        <Pressable style={styles.btnContinue} onPress={checkRegFieldsUser}>
          <Text style={styles.btnTextContinue}>Завершить</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PageRegistrationUser;
