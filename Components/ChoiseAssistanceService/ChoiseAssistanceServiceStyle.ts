import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3B3B3B",
    flex: 1,
    flexDirection: "row", // изменяем направление оси на "column"
    flexWrap: "wrap", // добавляем обертку на новую линию
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  itemAssistance: {
    width: screenWidth * 0.45, // устанавливаем ширину и высоту 200
    height: screenHeight * 0.2,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  imgAssistance: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.2,
    borderRadius: 20,
    // стили для картинки
  },
  textAssistance: {
    position: "absolute",
    top: screenHeight * 0.15,
    color: "white",
    fontSize: screenWidth * 0.047,
  },
  searchAssistance: {
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "#FFD83D99",
    width: screenWidth * 0.9,
    height: screenHeight * 0.1,
    alignSelf: "center",
    paddingLeft: 20,
    paddingTop: screenHeight * 0.05,
    color: "white",
    fontSize: 24,
    left: screenWidth * 0.05,
  },
  loupeImg: {
    position: "absolute",
    left: screenWidth * 0.85,
    top: screenHeight * 0.06,
  },
  textChoiseAssistance: {
    color: "white",
    fontSize: 23,
    left: screenWidth * 0.1,
    width: screenWidth,
    marginTop: screenHeight * 0.03,
    marginBottom: screenHeight * 0.03,
  },
  btnContinue: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.07,
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    borderBottomWidth: 1,
    justifyContent: "center",
    left: screenWidth * 0.2,
    marginTop: screenHeight * 0.1,
  },
  textBtnContinue: {
    fontStyle: "normal",
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
  },
});
