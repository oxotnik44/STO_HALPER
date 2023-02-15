import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
} from "react-native";

const Registration: React.FC = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
        <Text style={styles.textReg}>Регистрация</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="Кто вы?"
            placeholderTextColor="white"
          ></TextInput>
          <Image
            source={require("./../../assets/arrow.png")}
            style={{ right: 25, top: 52, position: "absolute" }}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Логин"
          placeholderTextColor="white"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="white"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Подтвердите пароль"
          placeholderTextColor="white"
        ></TextInput>
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
    marginTop: Dimensions.get("window").height*0.1,
    left:Dimensions.get("window").width*0.08,
  },
});
export default Registration;
