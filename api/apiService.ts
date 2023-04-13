import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import { RootStackParamList } from "../Navigate";
import { Alert } from "react-native";

const api = axios.create({
  baseURL: "http://192.168.2.101:5000/api",
});

export const handleRegistrationService = async (
  login: string,
  password: string,
  surname: string,
  name: string,
  patronymic: string,
  telephoneNumber: string,
  city: string,
  address: string,
  index: string,
  workingNumber: string,
  assistanceServices: string[], // Массив выбранных услуг сервиса
  navigation: StackNavigationProp<RootStackParamList>
) => {
  try {
    const response = await api.post("/auth/registrationService", {
      login,
      password,
      surname,
      name,
      patronymic,
      telephoneNumber,
      city,
      address,
      index,
      workingNumber,
      assistanceServices, // Включаем выбранные услуги в тело запроса
    });
    console.log(response.data);
    navigation.navigate("ServiceInfo"); // переход на экран логина после успешной регистрации
  } catch (error) {
    console.error(error);
    // обработка ошибки регистрации
  }
};
export const handleLoginService = async (
  login: string,
  password: string,
  navigation: StackNavigationProp<RootStackParamList>
) => {
  try {
    const response = await api.post("/auth/loginService", {
      login,
      password,
    });
    // Handle successful login
    Alert.alert("Успешный вход", "Вы успешно авторизовались!");
    navigation.navigate("ServiceInfo");
  } catch (error) {
    console.error(error);
    // Handle login error
    Alert.alert("Ошибка входа", "Введенные данные не верны.");
  }
};
