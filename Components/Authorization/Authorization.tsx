import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./../../Navigate";
import { TextInput, Image, View, Text, Pressable, KeyboardAvoidingView, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin, setUserPassword } from "../../redux/reducers/authReducer";
import { styles } from "./AuthorizationStyles";

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
      Alert.alert("Внимание!", "Вы ввели неправильные данные");
    } else {
      dispatch(setUserLogin(login));
      dispatch(setUserPassword(password));

      fetch("http://192.168.2.101:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          alert(data);
        })
        .catch((error) => {
          console.error(error);
          Alert.alert("Ошибка!", "Ошибка при отправке данных на сервер.");
        });

      navigation.navigate("ServiceInfo");
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
            onPress={() => navigation.navigate("Registration")}
          >
            Регистрация
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Authorization;