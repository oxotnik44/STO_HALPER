import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigate";
import { setDataRegServicePageOne } from "../../../redux/reducers/registrationReducer/regServiceDataReducer";
import { styles } from "./PageOneRegistrationServiceStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
interface RegState {
  regServiceDataReducer: {
    whatsappNumber: string;
    webAddress: string;
    telephoneNumber: string;
    startOfWork: string;
    endOfWork: string;
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
const PageOneRegistrationService: React.FC<AuthorizationProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const {
    whatsappNumber,
    webAddress,
    startOfWork,
    endOfWork,
    telephoneNumber,
  } = useSelector((state: RegState) => state.regServiceDataReducer);
  const checkRegFieldsUser = () => {
    if (
      !whatsappNumber ||
      !webAddress ||
      !startOfWork ||
      !endOfWork ||
      !telephoneNumber
    ) {
      Alert.alert("Заполните все поля!");
    } else {
      navigation.navigate("PageTwoRegistrationService");
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-40}>
        <Text style={styles.textReg}>Личные данные</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="Whatsapp"
            value={whatsappNumber}
            placeholderTextColor="white"
            onChangeText={(value: string) =>
              dispatch(
                setDataRegServicePageOne(
                  value,
                  webAddress,
                  telephoneNumber,
                  startOfWork,
                  endOfWork
                )
              )
            }
          ></TextInput>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Адрес страницы"
          value={webAddress}
          placeholderTextColor="white"
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageOne(
                whatsappNumber,
                value,
                telephoneNumber,
                startOfWork,
                endOfWork
              )
            )
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          value={telephoneNumber}
          placeholderTextColor="white"
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageOne(
                whatsappNumber,
                webAddress,
                value,
                startOfWork,
                endOfWork
              )
            )
          }
        ></TextInput>
        <Text
          style={{
            color: "white",
            fontSize: 23,
            left: screenWidth * 0.1,
            top: screenHeight * 0.04,
          }}
        >
          Время работы:
        </Text>
        <View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 27,
                left: screenWidth * 0.1,
                top: screenHeight * 0.08,
              }}
            >
              C
            </Text>
            <TextInput
              style={[styles.inputTime, { bottom: screenHeight * 0.052 }]}
              value={startOfWork}
              onChangeText={(value) => {
                dispatch(
                  setDataRegServicePageOne(
                    whatsappNumber,
                    webAddress,
                    telephoneNumber,
                    value,
                    endOfWork
                  )
                );
              }}
            />
          </View>
          <View></View>
          <Text
            style={{
              color: "white",
              fontSize: 27,
              left: screenWidth * 0.1,
              bottom: -screenHeight * 0.01,
            }}
          >
            До
          </Text>
          <TextInput
            style={[styles.inputTime, { bottom: screenHeight * 0.122 }]}
            value={endOfWork}
            onChangeText={(value) => {
              dispatch(
                setDataRegServicePageOne(
                  whatsappNumber,
                  webAddress,
                  telephoneNumber,
                  startOfWork,
                  value
                )
              );
            }}
          />
        </View>
        <Pressable style={styles.btnContinue} onPress={checkRegFieldsUser}>
          <Text style={styles.btnTextContinue}>Продолжить</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PageOneRegistrationService;
