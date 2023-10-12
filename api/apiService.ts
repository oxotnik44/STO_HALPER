import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import { RootStackParamList } from "../Navigate";
import { Alert } from "react-native";
import {
  removeDataInfo,
  setDataAuthService,
  setDataRegistredService,
} from "../redux/reducers/registrationReducer/regServiceDataReducer";
import {
  resetService,
  setDataInfoService,
  setIsAdmin,
} from "../redux/reducers/serviceInfoReducer";
import {
  resetReviewUser,
  resetReviews,
  setReview,
} from "../redux/reducers/reviewsServiceReducer";

import { resetData } from "../redux/reducers/registrationReducer/registrationReducer";
import {
  setDataServiceForAdmin,
  setDataServiceForUser,
  setIsSend,
} from "../redux/reducers/login/loginReducer";

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
    };

    const response = await api.post("/registrationService", requestData);

    dispatch(setDataInfoService(response.data));
    await handleLoginService(
      requestData.login,
      requestData.password,
      navigation,
      dispatch
    );
    dispatch(removeDataInfo());

    dispatch(setIsAdmin(true));
    dispatch(resetData());

    navigation.navigate("ServiceInfo");
  } catch (error) {
    console.error(error);
    // handle registration error
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
    const { nameService } = service;
    dispatch(setIsAdmin(true));
    dispatch(setDataServiceForAdmin(service));

    getReviews(nameService, dispatch);

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
    dispatch(setDataServiceForUser(serviceData));
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
      dispatch(setReview([{ review, userName: login }]));
      dispatch(resetReviewUser());
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
export const getReviews = async (nameService: string, dispatch: Function) => {
  try {
    // Выполнение запроса на сервер с использованием библиотеки axios или другой аналогичной библиотеки
    const response = await api.post("/getReviews", {
      nameService,
    });

    // Вызов экшн-криэйтора resetReviews для сброса отзывов в состоянии Redux
    dispatch(resetReviews());

    // Вызов экшн-криэйтора setReview с данными из запроса в аргументе
    dispatch(setReview(response.data));
  } catch (error) {
    console.error(error);
    // Обработка ошибки, если она возникнет
    Alert.alert("Ошибка входа", "Введенные данные не верны.");
  }
};

export const handleGetApplication = async (
  nameService: string,
  login: string,
  dispatch:Function
) => {
  try {
    const response = await api.post("/getApplication", {
      nameService,
      login,
    });
    console.log(1)

    dispatch(setIsSend(response.data))
  } catch (error) {
    console.error(error);
    Alert.alert("Ошибка входа", "Ошибка загрузке данных");
  }
};
