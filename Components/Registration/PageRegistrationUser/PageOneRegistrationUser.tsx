import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setNumberPage,
  setUserData,
} from "../../../redux/reducers/regUserReducer";
import PageTwoRegistrarionUser from "./PageTwoRegistrationUser";
import PageTwoRegistrationUser from "./PageTwoRegistrationUser";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigate";

interface RegState {
  regUserReducer: {
    login: string;
    password: string;
    repeatPassword: string;
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
const PageOneRegistrationUser: React.FC<AuthorizationProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const { login, password, repeatPassword } = useSelector(
    (state: RegState) => state.regUserReducer
  );
  const checkFieldsOnePageUser = () => {
    if (!login || !password || !repeatPassword) {
      Alert.alert("Заполните все поля!");
    } else if (password !== repeatPassword) {
      Alert.alert("Пароли не совпадают");
    } else {
      navigation.navigate("PageTwoRegistrationUser");
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
        <Text style={styles.textReg}>Данные аккаунта</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="Кто вы?"
            placeholderTextColor="white"
          ></TextInput>
          <Image
            source={require("./../../../assets/arrow.png")}
            style={{ right: 25, top: 52, position: "absolute" }}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Логин"
          placeholderTextColor="white"
          value={login}
          onChangeText={(value: string) =>
            dispatch(setUserData(value, password, repeatPassword))
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="white"
          value={password}
          onChangeText={(value: string) =>
            dispatch(setUserData(login, value, repeatPassword))
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Подтвердите пароль"
          placeholderTextColor="white"
          value={repeatPassword}
          onChangeText={(value: string) =>
            dispatch(setUserData(login, password, value))
          }
        ></TextInput>
        <Pressable style={styles.btnContinue} onPress={checkFieldsOnePageUser}>
          <Text style={styles.btnTextContinue}>Продолжить</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",

    backgroundColor: "#3B3B3B",
  },
  input: {
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "#FFD83D99",
    width: Dimensions.get("window").width * 0.9,
    height: 100,
    alignSelf: "center",
    paddingLeft: 20,
    paddingTop: Dimensions.get("window").height * 0.05,
    color: "white",
    fontSize: 24,
    opacity: 0.6,
    marginTop: Dimensions.get("window").height * 0,
  },
  textReg: {
    fontSize: 32,
    color: "rgba(174, 174, 174, 0.7)",
    opacity: 0.7,
    marginTop: Dimensions.get("window").height * 0.1,
    left: Dimensions.get("window").width * 0.08,
  },
  btnContinue: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").height * 0.07,
    top: Dimensions.get("window").height * 0.87,
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
  },
  btnTextContinue: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
  },
});
export default PageOneRegistrationUser;
