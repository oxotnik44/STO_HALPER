import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  headerService: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  loupe2: {
    width: screenWidth * 0.12, // изменение размера
    height: screenHeight * 0.06,
    left: 150,
    top: 50,
  },
  textInput: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.05,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  searchText: {
    color: "white",
    fontSize: screenWidth * 0.08,
    left: -130,
    top: 5,
  },
  footerService: {
    width: screenWidth * 0.9,
    height: 2,
    opacity: 3,
    backgroundColor: "#FFD83D",
    top: 25,
    left: 0,
  },
});
