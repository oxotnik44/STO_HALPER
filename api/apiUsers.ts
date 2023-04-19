import axios from "axios";
import { Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Navigate";
import { getAssistance } from "../redux/reducers/registrationReducer/choiceAssistanceReducer";
import { setDataService } from "../redux/reducers/serviceInfoReducer";

const api = axios.create({
  baseURL: "http://192.168.2.100:5000/api/auth",
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
    const response = await api.post("/registrationUser", {
      login,
      password,
      carNumber,
      vinNumber,
      telephoneNumber,
    });
    console.log(response.data); // обработка успешной регистрации
    navigation.navigate("ChoiseAssistanceService"); // переход на экран логина после успешной регистрации
  } catch (error) {
    console.error(error);
    // обработка ошибки регистрации
  }
};

export const handleLoginUser = async (login: string, password: string) => {
  try {
    const response = await api.post("/loginUser", {
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
export const handleReceivingAssistance = async (
  dispatch: Function // Передаем dispatch в качестве аргумента
) => {
  try {
    const response = await api.get("/retrievedAssistance");
    const assistanceData = response.data.map((item) => ({
      assistanceService: item.assistance, // обновляем название поля
      urlAssistance: item.urlAssistance,
    }));
    dispatch(getAssistance(assistanceData));

  } catch (error) {
    console.error(error);
    Alert.alert("Ошибка входа", "Введенные данные не верны.");
  }
};

export const handleGetAssistance = async (
  assistanceServices: string[], // Массив выбранных услуг сервиса
  navigation: StackNavigationProp<RootStackParamList>,
  dispatch: Function
) => {
  try {
    const response = await api.post("/shippingAssistance", {
      assistanceServices, // Включаем выбранные услуги в тело запроса
    });
    const serviceData = response.data.map((item) => ({
      whatsappNumber: item.whatsappNumber,
      nameService: item.nameService,
      startOfWork: item.startOfWork,
      endOfWork: item.endOfWork,
      telephoneNumber: item.telephoneNumber,
      city: item.city,
      address: item.address,
      index: item.index,
      assistanceServices: item.assistanceServices,
    }));
    dispatch(setDataService(serviceData));
    console.log(response.data);
    navigation.navigate("ChoiseService"); // переход на экран логина после успешной регистрации
  } catch (error) {
    console.error(error);
    // обработка ошибки регистрации
  }
};
