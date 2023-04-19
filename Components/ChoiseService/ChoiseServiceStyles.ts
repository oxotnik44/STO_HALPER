import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3B3B3B",
    flex: 1,
  },
  loupeImg: {
    bottom: screenHeight * 0.045,
    left: screenWidth * 0.85,
  },
  searchAssistance: {
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "#FFD83D99",
    width: screenWidth * 0.9,
    height: 100,
    alignSelf: "center",
    paddingLeft: 20,
    paddingTop: screenHeight * 0.05,
    color: "white",
    fontSize: 24,
  },
  itemAssistance: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.1,
    backgroundColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: screenHeight * 0.03,
  },
  nameService: {
    fontSize: 20,
    margin: 10,
  },
  distanceToService: {
    fontSize: 20,
    marginLeft: 10,
    opacity: 0.6,
  },
  arrow: {
    height: screenHeight * 0.04,
    width: screenWidth * 0.04,
    position: "absolute",
    right: screenWidth * 0.04,
    top: screenHeight * 0.04,
  },
  expanded: {
    height: screenHeight * 0.19,
    backgroundColor: "white",
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 15,
  },
  buttonService: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.047,
    alignSelf: "center",
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    borderBottomWidth: 1,
    marginBottom: 5,
    marginTop: 8,
  },
  textButtonService: {
    top: 5,
    fontStyle: "normal",
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
});
