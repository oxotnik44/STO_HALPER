import axios from "axios";
import { Alert } from "react-native";
import { RootStackParamList } from "../Navigate";
import {
  getAssistance,
  resetAssistance,
} from "../redux/reducers/registrationReducer/choiceAssistanceReducer";
import {
  resetService,
  setDataService,
  setIsAdmin,
} from "../redux/reducers/serviceInfoReducer";
import { StackNavigationProp } from "@react-navigation/stack";
import { resetData } from "../redux/reducers/registrationReducer/registrationReducer";

const api = axios.create({
  baseURL: "https://stohelperbackend-oxotnik44.onrender.com/api/auth",
});

export const handleRegistrationUser = async (
  login: string,
  password: string,
  carNumber: string,
  vinNumber: string,
  telephoneNumber: string,
  navigation: StackNavigationProp<RootStackParamList>,
  dispatch: Function
) => {
  try {
    const response = await api.post("/registrationUser", {
      login,
      password,
      carNumber,
      vinNumber,
      telephoneNumber,
    });
    console.log(response.data);
    dispatch(resetData());
    dispatch(setIsAdmin(false)); // pass the requestData object to the dispatch function
    // обработка успешной регистрации
    navigation.navigate("ChoiseAssistanceService"); // переход на экран логина после успешной регистрации
  } catch (error) {
    Alert.alert("Ошибка!", "Ошибка регистрации");
  }
};

export const handleLoginUser = async (
  login: string,
  password: string,
  navigation: StackNavigationProp<RootStackParamList>,
  dispatch: Function
) => {
  try {
    const response = await api.post("/loginUser", {
      login,
      password,
    });
    dispatch(resetAssistance());
    dispatch(setIsAdmin(false));
    await handleGetAssistance(dispatch);
    Alert.alert("Успешный вход", "Вы успешно авторизовались!");
    navigation.navigate("ChoiseAssistanceService");
  } catch (error) {
    console.error(error);
    Alert.alert("Ошибка входа", "Введенные данные не верны.");
  }
};
export const handleGetAssistance = async (
  dispatch: Function // Передаем dispatch в качестве аргумента
) => {
  try {
    const response = await api.get("/retrievedAssistance");
    const assistanceData = response.data.map((item) => ({
      assistanceService: item.assistance, // обновляем название поля
      urlAssistance: item.urlAssistance,
    }));
    dispatch(resetAssistance());
    dispatch(getAssistance(assistanceData));
  } catch (error) {
    console.error(error);
    Alert.alert("Ошибка входа", "Ошибка загрузке данных");
  }
};
