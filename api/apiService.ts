import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import { RootStackParamList } from "../Navigate";
import { Alert } from "react-native";
import { setDataRegistredService } from "../redux/reducers/registrationReducer/regServiceDataReducer";
import { setIsAdmin } from "../redux/reducers/serviceInfoReducer";

const api = axios.create({
  baseURL: "https://stohelperbackend-oxotnik44.onrender.com/api/auth",
});

export const handleRegistrationService = async (
  login: string,
  password: string,
  nameService: string,
  whatsappNumber: string,
  webAddress: string,
  startOfWork: string,
  endOfWork: string,
  telephoneNumber: string,
  city: string,
  address: string,
  index: string,
  assistanceServices: string[], // Массив выбранных услуг сервиса
  navigation: StackNavigationProp<RootStackParamList>,
  dispatch: Function
) => {
  try {
    const requestData = {
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
      assistanceServices,
    };

    const response = await api.post("/registrationService", requestData);
    console.log(response.data);

    dispatch(setDataRegistredService(requestData));
    dispatch(setIsAdmin(true)); // pass the requestData object to the dispatch function
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
    const response = await api.post("/loginService", {
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
