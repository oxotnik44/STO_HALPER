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
  setDataCarUser,
  setUserData,
} from "../../../redux/reducers/regUserReducer";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigate";
interface RegState {
  regUserReducer: {
    vinNumber: string;
    telephoneNumber: string;
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
const PageRegistrationUser: React.FC<AuthorizationProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const { vinNumber, telephoneNumber } = useSelector(
    (state: RegState) => state.regUserReducer
  );
  const checkRegFieldsUser = () => {
    if ((vinNumber || telephoneNumber) == null) {
      Alert.alert("Заполните все поля!");
    } else {
      navigation.navigate("Main");
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
        <Text style={styles.textReg}>Данные авто</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="Госномер"
            placeholderTextColor="white"
          ></TextInput>
        </View>
        <TextInput
          style={styles.input}
          placeholder="VIN-номер"
          placeholderTextColor="white"
          value={vinNumber}
          onChangeText={(value: string) =>
            dispatch(setDataCarUser(value, telephoneNumber))
          }
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          placeholderTextColor="white"
          value={telephoneNumber}
          onChangeText={(value: string) =>
            dispatch(setDataCarUser(vinNumber, value))
          }
        ></TextInput>
        <Pressable
          style={styles.btnContinue}
          onPress={checkRegFieldsUser}
        >
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
export default PageRegistrationUser;
