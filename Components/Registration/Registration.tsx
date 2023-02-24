import React, { useState } from "react";
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
import { setUserData } from "../../redux/reducers/regUserReducer";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import * as Animatable from "react-native-animatable";
interface RegState {
  regUserReducer: {
    userRole: string;
    login: string;
    password: string;
    repeatPassword: string;
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
const Registration: React.FC<AuthorizationProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userRole, login, password, repeatPassword } = useSelector(
    (state: RegState) => state.regUserReducer
  );
  const checkFieldsReg = () => {
    if (!login || !password || !repeatPassword) {
      Alert.alert("Заполните все поля!");
    } else if (password !== repeatPassword) {
      Alert.alert("Пароли не совпадают");
    } else {
      if (userRole == "Клиент") {
        navigation.navigate("PageRegistrationUser");
      } else {
        navigation.navigate("Authorization");
      }
    }
  };
  const [showInputs, setShowInputs] = useState(false);
  const handleInputPress = () => {
    setShowInputs(!showInputs);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
        <Text style={styles.textReg}>Данные аккаунта</Text>
        <Pressable onPress={handleInputPress}>
          <View style={{ position: "relative" }}>
            <View style={styles.input}>
              <Text style={{ color: "white", fontSize: 26, top: 10 }}>
                {userRole}
              </Text>
            </View>
            <Image
              source={require("./../../assets/arrow.png")}
              style={{ right: 25, top: 52, position: "absolute" }}
            />
          </View>
        </Pressable>
        {showInputs && (
          <Animatable.View animation={showInputs ? "fadeInDown" : "fadeOutUp"}
          >
            <View>
              <Pressable
                onPress={() => {
                  dispatch(setUserData("СТО", login, password, repeatPassword));
                  handleInputPress();
                }}
              >
                <Animatable.View
                  animation={showInputs ? "fadeInDown" : "fadeOutUp"}
                >
                  <View style={{ ...styles.input, opacity: 1 }}>
                    <Text style={{ color: "white", fontSize: 26, top: 10 }}>
                      СТО
                    </Text>
                  </View>
                </Animatable.View>
              </Pressable>
              <Pressable
                onPress={() => {
                  dispatch(
                    setUserData("Клиент", login, password, repeatPassword)
                  );
                  handleInputPress();
                }}
              >
                <Animatable.View
                  animation={showInputs ? "fadeInDown" : "fadeOutDown"}
                  delay={100}
                >
                  <View style={{ ...styles.input, opacity: 1 }}>
                    <Text style={{ color: "white", fontSize: 26, top: 10 }}>
                      Клиент
                    </Text>
                  </View>
                </Animatable.View>
              </Pressable>
            </View>
          </Animatable.View>
        )}

        <TextInput
          style={styles.input}
          placeholder="Логин"
          placeholderTextColor="white"
          value={login}
          onChangeText={(value: string) =>
            dispatch(setUserData(userRole, value, password, repeatPassword))
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="white"
          value={password}
          onChangeText={(value: string) =>
            dispatch(setUserData(userRole, login, value, repeatPassword))
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Подтвердите пароль"
          placeholderTextColor="white"
          value={repeatPassword}
          onChangeText={(value: string) =>
            dispatch(setUserData(userRole, login, password, value))
          }
        ></TextInput>
        <Pressable style={styles.btnContinue} onPress={checkFieldsReg}>
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
    marginTop: Dimensions.get("window").height * 0.2,
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
  },
  btnTextContinue: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
  },
});
export default Registration;
