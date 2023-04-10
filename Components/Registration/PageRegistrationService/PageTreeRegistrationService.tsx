import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataCarUser,
} from "../../../redux/reducers/registrationReducer/regCarUserReducer";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigate";
import { styles } from "./PageTreeRegistrationService";
import { handleRegistration } from "../../../api/apiUsers";

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

const PageTreeRegistrationService: React.FC<AuthorizationProps> = ({
  navigation,
}) => {
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
      handleRegistration(
        login,
        password,
        carNumber,
        vinNumber,
        telephoneNumber,
        navigation
      );
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
        <Text style={styles.textReg}>Услуги сервиса</Text>
        <View style={{ position: "relative" }}>
         
        <Pressable style={styles.btnContinue} onPress={checkRegFieldsUser}>
          <Text style={styles.btnTextContinue}>Завершить</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PageTreeRegistrationService;
