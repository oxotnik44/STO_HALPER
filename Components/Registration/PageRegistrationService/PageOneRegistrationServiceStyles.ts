import { StyleSheet, Dimensions } from "react-native";
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  container: {
    height: "100%",

    backgroundColor: "#3B3B3B",
  },
  input: {
    borderBottomWidth: 3,
    borderRadius: 5,
    borderColor: "#FFD83D99",
    width: Dimensions.get("window").width * 0.9,
    height: 100,
    alignSelf: "center",
    paddingLeft: 20,
    paddingTop: Dimensions.get("window").height * 0.05,
    color: "white",
    fontSize: 24,
  },
  inputTime: {
    borderBottomWidth: 4,
    borderRadius: 5,
    borderColor: "#FFD83D99",
    width: Dimensions.get("window").width * 0.3,
    height: 100,
    alignSelf: "center",
    paddingLeft: 20,
    paddingTop: Dimensions.get("window").height * 0.05,
    color: "white",
    fontSize: 24,
    right: Dimensions.get("window").width * 0.1,
  },
  textReg: {
    fontSize: 32,
    color: "rgba(174, 174, 174, 0.7)",
    opacity: 0.7,
    marginTop: Dimensions.get("window").height * 0.1,
    left: Dimensions.get("window").width * 0.08,
  },
  btnContinue: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.08,
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
  containerTime: {
    flexDirection: "row",
    marginTop: screenHeight * 0.06,
  },
  leftContainer: {
    flex: 1,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 10,
  },
  btnTimePickerStart: {
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    height: screenHeight * 0.06,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  btnTimePickerEnd: {
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    height: screenHeight * 0.06,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },
});
