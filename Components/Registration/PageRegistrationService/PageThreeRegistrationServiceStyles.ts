import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#3B3B3B",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "#FFD83D99",
    width: Dimensions.get("window").width * 0.9,
    height: screenHeight * 0.12,
    alignSelf: "center",
    paddingLeft: 20,
    paddingTop: Dimensions.get("window").height * 0.06,
  },
  containerAssistance: {
    marginTop: screenHeight * 0.05,
  },
  textAssistanceCaption: {
    marginTop: screenHeight * 0.13,
    color: "#AEAEAE",
    fontSize: 30,
    marginLeft: screenWidth * 0.05,
  },
  itemTextAssistance: { fontSize: 22, opacity: 0.8, color: "white" },
  checkBoxStyle: {
    marginLeft: screenWidth * 0.7,
    marginTop: -screenHeight * 0.03,
  },
});
