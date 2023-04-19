import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigate";
import { setDataRegServicePageTwo } from "../../../redux/reducers/registrationReducer/regServiceDataReducer";
import { styles } from "./PageTwoRegistrationServiceStyles";
import { handleReceivingAssistance } from "../../../api/apiUsers";

interface RegState {
  regServiceDataReducer: {
    city: string;
    address: string;
    index: string;
    workingNumber: string;
    nameService: string;
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
const PageTwoRegistrationService: React.FC<AuthorizationProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const { city, address, index, workingNumber, nameService } = useSelector(
    (state: RegState) => state.regServiceDataReducer
  );
  const checkRegFieldsUser = async () => {
    if (!city || !address || !index || !workingNumber) {
      Alert.alert("Заполните все поля!");
    } else {
      try {
        await handleReceivingAssistance(dispatch);
      } catch (e) {}
      navigation.navigate("PageThreeRegistrationService");
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
        <Text style={styles.textReg}>Данные сервиса</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="Название СТО"
            placeholderTextColor="white"
            onChangeText={(value: string) =>
              dispatch(
                setDataRegServicePageTwo(
                  city,
                  address,
                  index,
                  workingNumber,
                  value
                )
              )
            }
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Город"
            placeholderTextColor="white"
            onChangeText={(value: string) =>
              dispatch(
                setDataRegServicePageTwo(
                  value,
                  address,
                  index,
                  workingNumber,
                  nameService
                )
              )
            }
          ></TextInput>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Адрес"
          placeholderTextColor="white"
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageTwo(
                city,
                value,
                index,
                workingNumber,
                nameService
              )
            )
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Индекс"
          placeholderTextColor="white"
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageTwo(
                city,
                address,
                value,
                workingNumber,
                nameService
              )
            )
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Рабочий номер"
          placeholderTextColor="white"
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageTwo(city, address, index, value, nameService)
            )
          }
        ></TextInput>
        <Pressable style={styles.btnContinue} onPress={checkRegFieldsUser}>
          <Text style={styles.btnTextContinue}>Продолжить</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PageTwoRegistrationService;
