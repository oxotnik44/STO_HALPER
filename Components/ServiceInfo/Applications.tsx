import React, { FC, useEffect, useState } from "react";
import { View, Text, Dimensions, Alert, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ServiceInfoStyles";
import DropDownPicker from "react-native-dropdown-picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { handleSendApplication } from "../../api/apiUsers";
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
interface ServiceInfoState {
  loginReducer: {
    dataServiceForUser: any[];
    numberService: number;
    isAdmin: boolean;
    dataServiceForAdmin: any;
    isSend: boolean;
  };
}
interface UserInfo {
  authReducer: {
    login: string;
  };
}
const ApplicationsForUser: FC = () => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.loginReducer
  );
  const login = useSelector((state: UserInfo) => state.authReducer.login);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (!dataServiceInfo.isAdmin) {
      const selectedService =
        dataServiceInfo.dataServiceForUser[dataServiceInfo.numberService];
      const items = selectedService?.assistanceServices
        .filter((service) => service) // Исключение пустых элементов
        .map((service) => ({
          label: service,
          value: service,
        }));
      setItems(items);
    } else if (dataServiceInfo.isAdmin) {
      const selectedService = dataServiceInfo.dataServiceForAdmin;
      const items = selectedService?.assistanceServices
        .filter((service) => service) // Исключение пустых элементов
        .map((service) => ({
          label: service,
          value: service,
        }));
      setItems(items);
    }
  }, []);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [date, setDate] = useState();

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const handleConfirm = (event, date) => {
    if (event.type === "dismissed") {
      setDatePickerVisible(false);
    } else {
      // Обработка выбранной даты в нужном формате
      const formattedDate = date.toISOString().split("T")[0];
      setDatePickerVisible(false);

      setDate(formattedDate);
    }
  };
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [time, setSelectedTime] = useState();

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };
  const dispatch = useDispatch();
  const handleTimeConfirm = (event, selectedTime) => {
    if (event.type === "dismissed") {
      setTimePickerVisible(false);
    } else {
      const formattedTime = selectedTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTimePickerVisible(false);
      const startOfWorkParts =
        dataServiceInfo.dataServiceForUser[
          dataServiceInfo.numberService
        ].startOfWork.split(":");
      const endOfWorkParts =
        dataServiceInfo.dataServiceForUser[
          dataServiceInfo.numberService
        ].endOfWork.split(":");

      const selectedDateTime = new Date();
      selectedDateTime.setHours(selectedTime.getHours());
      selectedDateTime.setMinutes(selectedTime.getMinutes());

      const minimumDateTime = new Date();
      minimumDateTime.setHours(Number(startOfWorkParts[0]));
      minimumDateTime.setMinutes(Number(startOfWorkParts[1]));

      const maximumDateTime = new Date();
      maximumDateTime.setHours(Number(endOfWorkParts[0]));
      maximumDateTime.setMinutes(Number(endOfWorkParts[1]));

      if (
        selectedDateTime < minimumDateTime ||
        selectedDateTime > maximumDateTime
      ) {
        // Выводите алерт, если выбранное время не входит в интервал
        Alert.alert("Ошибка", "Выбранное время не входит в интервал работы.");
      } else {
        setSelectedTime(formattedTime);
      }
    }
  };
  const handleApplication = () => {
    if (value.length < 1) {
      Alert.alert("Выберите нужные услуги!");
    } else if (date === undefined) {
      Alert.alert("Выберите нужную дату!");
    } else if (time === undefined) {
      Alert.alert("Выберите нужное время!");
    } else {
      try {
        getApplication();

        // Передача всех данных, кроме логина, в функцию handleSendApplication
      } catch (error) {
        // Обработка ошибки
        console.log(error);
      }
    }
  };
  const getApplication = async () => {
    const selectedService =
      dataServiceInfo.dataServiceForUser[dataServiceInfo.numberService]
        .nameService;
    await handleSendApplication(
      selectedService,
      login,
      value,
      date,
      time,
      dispatch
    );
  };
  return (
    <View>
      {dataServiceInfo.isAdmin &&
        dataServiceInfo.dataServiceForAdmin.application.map((item) => (
          <View>
            <View style={styles.containerApplication} key={item._id}>
              <Text
                style={{ fontSize: screenWidth * 0.06, textAlign: "center" }}
              >
                Заявка
              </Text>
              <Text>Пользователь : {item.login}</Text>
              <Text>Запрос со стороны клиента: {item.listAssistances.join(", ")}</Text>
              <Text>Дата: {item.date}</Text>
              <Text>Время: {item.time}</Text>
            </View>
          </View>
        ))}
      {!dataServiceInfo.isAdmin &&
        (dataServiceInfo.isSend ? (
          <View style={{}}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                color: "white",
              }}
            >
              Заявка отправлена
            </Text>
          </View>
        ) : (
          <>
            <Text
              style={{
                textAlign: "center",
                fontSize: screenWidth * 0.06,
                color: "white",
              }}
            >
              Оставить заявку
            </Text>
            <View style={{ marginTop: screenHeight * 0.02 }}>
              <Text
                style={{
                  fontSize: screenWidth * 0.05,
                  color: "white",
                  textAlign: "center",
                  marginBottom: screenHeight * 0.01,
                }}
              >
                Какие услуги Вам нужны?
              </Text>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={true}
                mode="BADGE"
                showBadgeDot={false}
                extendableBadgeContainer={true}
                placeholder="Выберите услуги"
                containerStyle={{
                  width: screenWidth * 0.8,
                  alignSelf: "center",
                }}
              />
            </View>
            <View
              style={{
                marginTop: open ? screenHeight * 0.18 : 0,
              }}
            >
              <Text
                style={{
                  fontSize: screenWidth * 0.06,
                  color: "white",
                  textAlign: "center",
                  marginTop: screenHeight * 0.04,
                }}
              >
                Сервис работает с{" "}
                {
                  dataServiceInfo.dataServiceForUser[
                    dataServiceInfo.numberService
                  ].startOfWork
                }{" "}
                до{" "}
                {
                  dataServiceInfo.dataServiceForUser[
                    dataServiceInfo.numberService
                  ].endOfWork
                }
              </Text>
              <Text
                style={{
                  fontSize: screenWidth * 0.06,
                  color: "white",
                  textAlign: "center",
                  marginTop: screenHeight * 0.02,
                }}
              >
                Выберите желаемое время
              </Text>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: screenHeight * 0.03,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: "#FFD83D",
                  height: screenHeight * 0.3,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: screenWidth * 0.05,
                      color: "white",
                      marginTop: screenHeight * 0.01,
                      height: screenHeight * 0.04,
                    }}
                  >
                    Выбранная дата: {date ? date : ""}
                  </Text>

                  <Pressable
                    style={styles.btnTimePicker}
                    onPress={showDatePicker}
                  >
                    <Text style={styles.textTimePicker}>Выбрать дату</Text>
                  </Pressable>
                  {isDatePickerVisible && (
                    <RNDateTimePicker
                      value={new Date()} // Начальное значение времени
                      mode="date" // Режим выбора даты
                      display="default" // Стиль отображения пикера (default, spinner, clock)
                      minimumDate={new Date()} // Запретить выбор даты раньше сегодняшнего дня
                      onChange={handleConfirm}
                    />
                  )}
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: screenWidth * 0.05,
                      color: "white",
                      marginTop: screenHeight * 0.01,
                    }}
                  >
                    Выбранное время: {time ? time : ""}
                  </Text>
                  <Pressable
                    style={styles.btnTimePicker}
                    onPress={showTimePicker}
                  >
                    <Text style={styles.textTimePicker}>Выбрать время</Text>
                  </Pressable>
                  {isTimePickerVisible && (
                    <RNDateTimePicker
                      value={new Date()} // Начальное значение времени
                      mode="time" // Режим выбора времени
                      display="spinner"
                      is24Hour={true}
                      minuteInterval={10}
                      onChange={handleTimeConfirm}
                    />
                  )}
                </View>
              </View>
            </View>
            <Pressable
              style={styles.btnApplication}
              onPress={handleApplication}
            >
              <Text
                style={{ fontSize: screenWidth * 0.05, textAlign: "center" }}
              >
                Отправить заявку
              </Text>
            </Pressable>
          </>
        ))}
    </View>
  );
};

export default ApplicationsForUser;
