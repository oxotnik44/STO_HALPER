import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import * as Animatable from "react-native-animatable";
import { setUserData } from "../../redux/reducers/registrationReducer/registrationReducer";
import { styles } from "./RegistrationStyles";

interface RegState {
  registrationReducer: {
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
    (state: RegState) => state.registrationReducer
  );
  const checkFieldsReg = () => {
    if (!login || !password || !repeatPassword) {
      Alert.alert("Заполните все поля!");
    } else if (password !== repeatPassword) {
      Alert.alert("Пароли не совпадают");
    } else {
      if (userRole === "Клиент") {
        navigation.navigate("PageRegistrationUser");
      } else if (userRole === "СТО") {
        navigation.navigate("PageOneRegistrationService");
      } else {
        Alert.alert("Выберите свою роль!");
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
              style={[
                { right: 25, top: 52, position: "absolute" },
                {
                  transform: [{ rotate: showInputs ? "90deg" : "0deg" }],
                },
              ]}
            />
          </View>
        </Pressable>
        {showInputs && (
          <Animatable.View animation={showInputs ? "fadeInDown" : "fadeOutUp"}>
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
                  delay={150}
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

export default Registration;
