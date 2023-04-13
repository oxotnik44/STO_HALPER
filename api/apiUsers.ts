import axios from "axios";
import { Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Navigate";
import { clearDataCarUser } from "../redux/reducers/registrationReducer/regCarUserReducer";
import { useDispatch } from "react-redux";

const api = axios.create({
  baseURL: "http://192.168.2.101:5000/api",
});

export const handleRegistrationUser = async (
  login: string,
  password: string,
  carNumber: string | null,
  vinNumber: string | null,
  telephoneNumber: string | null,
  navigation: StackNavigationProp<RootStackParamList>
) => {
  try {
    const response = await api.post("/auth/registrationUser", {
      login,
      password,
      carNumber,
      vinNumber,
      telephoneNumber,
    });
    console.log(response.data); // обработка успешной регистрации
    navigation.navigate("ChoiseServises"); // переход на экран логина после успешной регистрации
  } catch (error) {
    console.error(error);
    // обработка ошибки регистрации
  }
};

export const handleLoginUser = async (
  login: string,
  password: string,
  navigation: StackNavigationProp<RootStackParamList>
) => {
  try {
    const response = await api.post("/auth/loginUser", {
      login,
      password,
    });
    // Handle successful login
    Alert.alert("Успешный вход", "Вы успешно авторизовались!");
    navigation.navigate("ChoiseServises");
  } catch (error) {
    console.error(error);
    // Handle login error
    Alert.alert("Ошибка входа", "Введенные данные не верны.");
  }
};
