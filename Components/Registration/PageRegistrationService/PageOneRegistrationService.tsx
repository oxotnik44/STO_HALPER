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
import { TextInputMask } from "react-native-masked-text";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
interface RegState {
  regServiceDataReducer: {
    nameAdmin: string;
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
  const { nameAdmin, webAddress, startOfWork, endOfWork, telephoneNumber } =
    useSelector((state: RegState) => state.regServiceDataReducer);
  const checkRegFieldsUser = () => {
    const [endHours, endMinutes] = endOfWork.split(":");
    const [startHours, startMinutes] = startOfWork.split(":");

    const endMinutesNum = parseInt(endHours) * 60 + parseInt(endMinutes);
    const startMinutesNum = parseInt(startHours) * 60 + parseInt(startMinutes);
    if (
      !nameAdmin ||
      !webAddress ||
      !startOfWork ||
      !endOfWork ||
      !telephoneNumber
    ) {
      Alert.alert("Заполните все поля!");
    } else if (endMinutesNum < startMinutesNum) {
      // Выводим сообщение об ошибке, так как endOfWork меньше startOfWork
      Alert.alert("Ошибка","Время окончания работы меньше времени начала работы.");
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
            placeholder="Имя"
            value={nameAdmin}
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
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Адрес страницы"
          value={webAddress}
          placeholderTextColor="white"
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageOne(
                nameAdmin,
                value,
                telephoneNumber,
                startOfWork,
                endOfWork
              )
            )
          }
        ></TextInput>
        <TextInputMask
          style={styles.input}
          placeholder="Номер телефона"
          value={telephoneNumber}
          placeholderTextColor="white"
          type={"custom"}
          options={{
            mask: "+9(999)999-99-99",
          }}
          keyboardType={"numeric"}
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageOne(
                nameAdmin,
                webAddress,
                value,
                startOfWork,
                endOfWork
              )
            )
          }
        />

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
            <TextInputMask
              style={[styles.inputTime, { bottom: screenHeight * 0.05 }]}
              value={startOfWork}
              placeholder="ЧЧ:ММ"
              placeholderTextColor="white"
              type={"datetime"}
              options={{
                format: "HH:mm",
              }}
              onChangeText={(value: string) => {
                const [hours, minutes] = value.split(":");
                const timeInMinutes = parseInt(hours) * 60 + parseInt(minutes);
                if (parseInt(hours) > 23) {
                  dispatch(
                    setDataRegServicePageOne(
                      nameAdmin,
                      webAddress,
                      telephoneNumber,
                      "24:00",
                      endOfWork
                    )
                  );
                }

                if (timeInMinutes >= 1440) {
                  dispatch(
                    setDataRegServicePageOne(
                      nameAdmin,
                      webAddress,
                      telephoneNumber,
                      "24:00",
                      endOfWork
                    )
                  );
                } else {
                  dispatch(
                    setDataRegServicePageOne(
                      nameAdmin,
                      webAddress,
                      telephoneNumber,
                      value,
                      endOfWork
                    )
                  );
                }
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
          <TextInputMask
            style={[styles.inputTime, { bottom: screenHeight * 0.12 }]}
            value={endOfWork}
            placeholder="ЧЧ:ММ"
            placeholderTextColor="white"
            type={"datetime"}
            options={{
              format: "HH:mm",
            }}
            onChangeText={(value: string) => {
              const [hours, minutes] = value.split(":");
              const timeInMinutes = parseInt(hours) * 60 + parseInt(minutes);
              if (timeInMinutes >= 1440) {
                dispatch(
                  setDataRegServicePageOne(
                    nameAdmin,
                    webAddress,
                    telephoneNumber,
                    startOfWork,
                    "24:00"
                  )
                );
              } else {
                dispatch(
                  setDataRegServicePageOne(
                    nameAdmin,
                    webAddress,
                    telephoneNumber,
                    startOfWork,
                    value
                  )
                );
              }
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
