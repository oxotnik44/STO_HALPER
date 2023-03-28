import { Alert } from "react-native";
import { useSelector } from "react-redux";

interface AuthState {
  authReducer: {
    login: string;
    password: string;
  };
}

const { login, password } = useSelector(
  (state: AuthState) => state.authReducer
);

const sendDataUser = () => {
  return fetch("http://192.168.2.101:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
    }),
  })
    .then((response) => {
      return response.text();
    })
    .catch((error) => {
      console.error(error);
      Alert.alert("Ошибка!", "Ошибка при отправке данных на сервер.");
      throw error;
    });
};

export default sendDataUser;
