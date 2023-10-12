import React, { useState } from "react";
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
import RNDateTimePicker from "@react-native-community/datetimepicker";

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
  const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const showStartTimePicker = () => {
    if (!isStartTimePickerVisible) {
      setStartTimePickerVisible(true);
    }
  };

  const showEndTimePicker = () => {
    if (!isEndTimePickerVisible) {
      setEndTimePickerVisible(true);
    }
  };

  const handleTimeConfirmStart = (event, selectedTime) => {
    if (event.type === "dismissed") {
      setStartTimePickerVisible(false);
    } else {
      const formattedTime = selectedTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setStartTimePickerVisible(false);
      setStartTime(formattedTime);
    }
  };

  const handleTimeConfirmEnd = (event, selectedTime) => {
    if (event.type === "dismissed") {
      setEndTimePickerVisible(false);
    } else {
      const formattedTime = selectedTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setEndTimePickerVisible(false);
      setEndTime(formattedTime);
    }
  };
  const checkRegFieldsUser = () => {
    if (
      !nameAdmin ||
      !webAddress ||
      !startTime ||
      !endTime ||
      !telephoneNumber
    ) {
      Alert.alert("Заполните все поля!");
    } else if (endTime <= startTime) {
      Alert.alert(
        "Ошибка",
        "Время окончания работы не может быть меньше или равно времени начала работы."
      );
    } else {
      dispatch(
        setDataRegServicePageOne(
          nameAdmin,
          webAddress,
          telephoneNumber,
          startTime,
          endTime
        )
      );
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
          options={{ mask: "+7 (999)-999-99-99" }}
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
            fontSize: screenWidth*0.07,
            left: screenWidth * 0.1,
            top: screenHeight * 0.04,
          }}
        >
          Время работы:
        </Text>

        <View style={{ marginTop: screenHeight * 0.05 }}>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 27,
                left: screenWidth * 0.1,
              }}
            >
              Начало рабочего дня: {startTime}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 27,
                left: screenWidth * 0.1,
                top: screenHeight * 0.03,
              }}
            >
              Конец рабочего дня: {endTime}
            </Text>
          </View>
        </View>
        <View style={styles.containerTime}>
          <View style={styles.leftContainer}>
            <Pressable
              onPress={showStartTimePicker}
              style={styles.btnTimePickerStart}
            >
              <Text style={styles.buttonText}>Время начала</Text>
            </Pressable>
            {isStartTimePickerVisible && (
              <RNDateTimePicker
                value={new Date()} // Начальное значение времени
                mode="time" // Режим выбора времени
                display="spinner"
                is24Hour={true}
                minuteInterval={10}
                onChange={handleTimeConfirmStart}
              />
            )}
          </View>
          <View style={styles.rightContainer}>
            <Pressable
              onPress={showEndTimePicker}
              style={styles.btnTimePickerEnd}
            >
              <Text style={styles.buttonText}>Время окончания</Text>
            </Pressable>
            {isEndTimePickerVisible && (
              <RNDateTimePicker
                value={new Date()} // Начальное значение времени
                mode="time" // Режим выбора времени
                display="spinner"
                is24Hour={true}
                minuteInterval={10}
                onChange={handleTimeConfirmEnd}
              />
            )}
          </View>
        </View>
        <Pressable style={styles.btnContinue} onPress={checkRegFieldsUser}>
          <Text style={styles.btnTextContinue}>Продолжить</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PageOneRegistrationService;
