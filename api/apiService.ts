import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import { RootStackParamList } from "../Navigate";
import { Alert } from "react-native";

const api = axios.create({
  baseURL: "http://192.168.2.100:5000/api",
});

export const handleRegistrationService = async (
  login: string,
  password: string,
  nameService:string,
  whatsappNumber: string,
  webAddress: string,
  startOfWork: string,
  endOfWork: string,
  telephoneNumber: string,
  city: string,
  address: string,
  index: string,
  assistanceServices: string[], // Массив выбранных услуг сервиса
  navigation: StackNavigationProp<RootStackParamList>
) => {
  try {
    const response = await api.post("/auth/registrationService", {
      login,
      password,
      nameService,
      whatsappNumber,
      webAddress,
      startOfWork,
      endOfWork,
      telephoneNumber,
      city,
      address,
      index,
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
  } catch (error) {
    console.error(error);
    // Handle login error
    Alert.alert("Ошибка входа", "Введенные данные не верны.");
  }
};
