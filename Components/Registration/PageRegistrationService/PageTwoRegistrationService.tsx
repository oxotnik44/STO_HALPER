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
import { handleGetAssistance } from "../../../api/apiUsers";
import { TextInputMask } from "react-native-masked-text";
import { ScrollView } from "react-native-gesture-handler";

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
        await handleGetAssistance(dispatch);
      } catch (e) {}
      navigation.navigate("PageThreeRegistrationService");
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50}>
        <Text style={styles.textReg}>Данные сервиса</Text>
        <ScrollView>
          
        </ScrollView>
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
        <TextInputMask
          style={styles.input}
          placeholder="Индекс"
          placeholderTextColor="white"
          type={"custom"}
          options={{ mask: "999999" }}
          keyboardType={"numeric"}
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
        />
        <TextInputMask
          style={styles.input}
          placeholder="Рабочий номер"
          placeholderTextColor="white"
          type={"custom"}
          options={{ mask: "+7 (999)-999-99-99" }}
          keyboardType={"numeric"}
          onChangeText={(value: string) =>
            dispatch(
              setDataRegServicePageTwo(city, address, index, value, nameService)
            )
          }
        />

        <Pressable style={styles.btnContinue} onPress={checkRegFieldsUser}>
          <Text style={styles.btnTextContinue}>Продолжить</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PageTwoRegistrationService;
