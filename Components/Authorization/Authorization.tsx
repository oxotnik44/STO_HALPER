import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./../../Navigate";
import {
  StyleSheet,
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
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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

  const setData = () => {
    if (login == null || password == null) {
      Alert.alert("Внимание!", "Вы ввели неправильный логин или пароль");
    } else {
      dispatch(setUserLogin(login));
      dispatch(setUserPassword(password));
      navigation.navigate("ServiceChat");
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
        <Pressable style={styles.registrationButton}>
          <Text
            style={styles.textRegistrationButton}
            onPress={() => navigation.navigate("ChoiseServises")}
          >
            Регистрация
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
  },
  inner: {
    padding: 24,
  },
  textNameCto: {
    width: 235,
    height: 45,
    alignSelf: "center",
    fontSize: 36,
    color: "#FFFFFF",
    marginBottom: 15,
  },
  imgLogo: {
    width: screenWidth * 0.56,
    height: screenWidth * 0.5,
    alignSelf: "center",
    borderBottomWidth: 1,
    marginBottom: 12,
    margin: "auto",
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    height: screenHeight * 0.072,
    width: screenWidth * 0.6,
    margin: 13,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#AEAEAE",
    padding: 10,
    borderColor: "#FFD83D",
  },
  loginButton: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.07,
    alignSelf: "center",
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    borderBottomWidth: 1,
    marginBottom: 25,
    marginTop: 24,
  },
  textLoginButton: {
    top: "19%",
    fontStyle: "normal",
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
  },
  registrationButton: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.07,
    alignSelf: "center",
  },
  textRegistrationButton: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default Authorization;
