import React, { useState } from "react";
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
  setRole,
  setUserLogin,
  setUserPassword,
} from "../../redux/reducers/authReducer";
import { styles } from "./AuthorizationStyles";
import { handleLoginUser } from "../../api/apiUsers";
import * as Animatable from "react-native-animatable";
import { handleLoginService } from "../../api/apiService";

interface AuthState {
  authReducer: {
    login: string;
    password: string;
    role: string;
  };
}

type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const Authorization: React.FC<AuthorizationProps> = ({ navigation }) => {
  const [showInputs, setShowInputs] = useState(false);
  const handleInputPress = () => {
    setShowInputs(!showInputs);
  };
  const dispatch = useDispatch();
  const { login, password, role } = useSelector(
    (state: AuthState) => state.authReducer
  );

  const setData = async () => {
    if (login == null || password == null) {
      Alert.alert("Внимание!", "Поля не могут быть пустыми");
    } else {
      dispatch(setUserLogin(login));
      dispatch(setUserPassword(password));
      if (role == "СТО") {
        try {
          const response = await handleLoginService(
            login,
            password,
            navigation
          );
        } catch (error) {
          console.error(error);
          Alert.alert("Ошибка!", "Ошибка при отправке данных на сервер.");
        }
      } else if (role == "Клиент") {
        try {
          const response = await handleLoginUser(login, password, navigation);
        } catch (error) {
          console.error(error);
          Alert.alert("Ошибка!", "Ошибка при отправке данных на сервер.");
        }
      } else {
        Alert.alert("Ошибка!", "Выберите роль!");
      }
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
        <Pressable onPress={handleInputPress}>
          <View style={{ position: "relative" }}>
            <View style={styles.inputRole}>
              <Text style={{ color: "white", fontSize: 26, top: 10 }}>
                {role}
              </Text>
            </View>
            <Image
              source={require("./../../assets/arrow.png")}
              style={{ right: 70, top: 57, position: "absolute" }}
            />
          </View>
        </Pressable>
        {showInputs && (
          <Animatable.View animation={showInputs ? "fadeInDown" : "fadeOutUp"}>
            <View>
              <Pressable
                onPress={() => {
                  dispatch(setRole("СТО"));
                  handleInputPress();
                }}
              >
                <Animatable.View
                  animation={showInputs ? "fadeInDown" : "fadeOutUp"}
                >
                  <View style={{ ...styles.inputRole, opacity: 1 }}>
                    <Text style={{ color: "white", fontSize: 26, top: 10 }}>
                      СТО
                    </Text>
                  </View>
                </Animatable.View>
              </Pressable>
              <Pressable
                onPress={() => {
                  dispatch(setRole("Клиент"));
                  handleInputPress();
                }}
              >
                <Animatable.View
                  animation={showInputs ? "fadeInDown" : "fadeOutDown"}
                  delay={100}
                >
                  <View style={{ ...styles.inputRole, opacity: 1 }}>
                    <Text style={{ color: "white", fontSize: 26 }}>Клиент</Text>
                  </View>
                </Animatable.View>
              </Pressable>
            </View>
          </Animatable.View>
        )}
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
