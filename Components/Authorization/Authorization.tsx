import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./../../Navigate";
import {
  TextInput,
  Image,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserLogin,
  setUserPassword,
} from "../../redux/reducers/authReducer";
import { styles } from "./AuthorizationStyles";
import { handleLogin } from "../../api/apiUsers";
interface AuthState {
  authReducer: {
    login: string;
    password: string;
  };
}

type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const Authorization: React.FC<AuthorizationProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { login, password } = useSelector(
    (state: AuthState) => state.authReducer
  );

  const setData = async () => {
    if (login == null || password == null) {
      Alert.alert("Внимание!", "Поля не могут быть пустыми");
    } else {
      dispatch(setUserLogin(login));
      dispatch(setUserPassword(password));
      await handleLogin(login, password, navigation);
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.textNameCto}>STO HALPER</Text>
        <Image
          style={styles.imgLogo}
          source={require("./../../assets/cto_logo.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Логин"
          value={login}
          onChangeText={(value: string) => dispatch(setUserLogin(value))}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={(value: string) => dispatch(setUserPassword(value))}
        ></TextInput>
        <Pressable style={styles.loginButton} onPress={setData}>
          <Text style={styles.textLoginButton}>Вход</Text>
        </Pressable>
        <Pressable
          style={styles.registrationButton}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={styles.textRegistrationButton}>Регистрация</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Authorization;
