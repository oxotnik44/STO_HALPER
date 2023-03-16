import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
  },
  inner: {
    padding: 24,
  },
  textNameCto: {
    top: screenHeight * 0.05,
    width: 235,
    alignSelf: "center",
    height: 45,
    fontSize: 36,
    color: "#FFFFFF",
    marginBottom: 15,
  },
  imgLogo: {
    top: screenHeight * 0.1,
    width: screenWidth * 0.56,
    height: screenWidth * 0.55,
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    top: screenHeight * 0.18,
    height: screenHeight * 0.072,
    width: screenWidth * 0.6,
    margin: 13,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#AEAEAE",
    padding: 10,
    borderColor: "#FFD83D",
  },
  loginButton: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.07,
    alignSelf: "center",
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    borderBottomWidth: 1,
    marginBottom: 25,
    marginTop: screenHeight * 0.23,
    justifyContent: "center",
  },
  textLoginButton: {
    fontStyle: "normal",
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
  },
  registrationButton: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.07,
    alignSelf: "center",
  },
  textRegistrationButton: {
    textAlign: "center",
    fontSize: 24,
  },
});

