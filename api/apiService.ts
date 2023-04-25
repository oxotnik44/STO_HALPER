import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import { RootStackParamList } from "../Navigate";
import { Alert } from "react-native";
import {
  setDataAuthService,
  setDataRegistredService,
} from "../redux/reducers/registrationReducer/regServiceDataReducer";
import {
  resetService,
  setDataService,
  setIsAdmin,
} from "../redux/reducers/serviceInfoReducer";
import {
  resetReviews,
  setReview,
} from "../redux/reducers/reviewsServiceReducer";
import { Dispatch } from "redux";

const api = axios.create({
  baseURL: "https://stohelperbackend-oxotnik44.onrender.com/api/auth",
});

export const handleRegistrationService = async (
  login: string,
  password: string,
  nameService: string,
  nameAdmin: string,
  webAddress: string,
  startOfWork: string,
  endOfWork: string,
  telephoneNumber: string,
  city: string,
  address: string,
  index: string,
  assistanceServices: string[],
  navigation: StackNavigationProp<RootStackParamList>,
  dispatch: Function
) => {
  try {
    const requestData = {
      login,
      password,
      nameService,
      nameAdmin,
      webAddress,
      startOfWork,
      endOfWork,
      telephoneNumber,
      city,
      address,
      index,
      assistanceServices,
      // Создаем пустой массив reviews
    };

    const response = await api.post("/registrationService", requestData);
    console.log(response.data);

    dispatch(setDataRegistredService(requestData));
    dispatch(setIsAdmin(true));
    navigation.navigate("ServiceInfo");
  } catch (error) {
    console.error(error);
    // обработка ошибки регистрации
  }
};

export const handleLoginService = async (
  login: string,
  password: string,
  navigation: StackNavigationProp<RootStackParamList>,
  dispatch: Function
) => {
  try {
    const response = await api.post("/loginService", {
      login,
      password,
    });

    const { service } = response.data;
    dispatch(setIsAdmin(true));
    dispatch(setDataAuthService(service));

    Alert.alert("Успешный вход", "Вы успешно авторизовались!");

    navigation.navigate("ServiceInfo");
  } catch (error) {
    console.error(error);

    Alert.alert("Ошибка входа", "Введенные данные не верны.");
  }
};

export const handleGetService = async (
  assistanceServices: string[], // Массив выбранных услуг сервиса
  dispatch: Function
) => {
  try {
    const response = await api.post("/shippingAssistance", {
      assistanceServices, // Включаем выбранные услуги в тело запроса
    });
    const serviceData = response.data.map((item) => ({
      whatsappNumber: item.whatsappNumber,
      webAddress: item.webAddress,
      nameAdmin: item.nameAdmin,
      nameService: item.nameService,
      startOfWork: item.startOfWork,
      endOfWork: item.endOfWork,
      telephoneNumber: item.telephoneNumber,
      city: item.city,
      address: item.address,
      index: item.index,
      reviews: item.reviews,
      assistanceServices: item.assistanceServices,
    }));
    dispatch(resetService());
    dispatch(setDataService(serviceData));
    
  } catch (error) {
    console.error(error);
    // обработка ошибки регистрации
  }
  // Импортируем библиотеки для работы с сетью

  // Функция для добавления отзыва на сервер
};
export const addReview = async (
  review: string,
  login: string,
  nameService: string,
  dispatch: Function
) => {
  try {
    // Отправляем POST-запрос на сервер с данными отзыва
    const response = await api.put("/addReview", {
      review: review,
      login: login,
      nameService: nameService,
    });

    // Обрабатываем успешный ответ от сервера
    if (response.data.success) {
      // Выводим сообщение об успешном добавлении отзыва
      console.log("Отзыв успешно добавлен");
    } else {
      // Выводим сообщение об ошибке
      console.error("Ошибка при добавлении отзыва:", response.data.message);
    }
  } catch (error) {
    // Выводим сообщение об ошибке
    console.error("Ошибка при добавлении отзыва:", error);
  }
};

// Изменения в функции getReviews
export const getReviews = async (nameService: string, dispatch: Dispatch) => {
  try {
    // Выполнение запроса на сервер с использованием библиотеки axios или другой аналогичной библиотеки
    const response = await api.post("/getReviews", {
      nameService,
    });

    // Диспатч действий Redux для обновления состояния приложения
    dispatch(resetReviews());
    dispatch(setReview(response.data));
  } catch (error) {
    console.error(error);
    // Обработка ошибки, если она возникнет
    Alert.alert("Ошибка входа", "Введенные данные не верны.");
  }
};
