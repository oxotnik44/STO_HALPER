import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
  },

  header: {
    padding: screenWidth * 0.04,
    height: screenHeight * 0.185,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: screenHeight * 0.015,
  },
  imageLogo: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.12,
  },
  nameService: {
    color: "white",
    top: screenHeight * 0.001,
    left: screenWidth * 0.03,
    fontSize: 25,
  },
  textInfoAndReview: {
    paddingLeft: screenWidth * 0.18,
    color: "white",
    fontSize: 23,
    bottom: screenHeight * 0.01,
  },
  underlinedText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "red",
  },

  locationText: {
    fontSize: screenWidth * 0.05,
    color: "#fff",
    opacity: 0.7,
    left: screenWidth * 0.07,
    top: screenHeight * -0.01,
  },
  textLocationService: {
    fontSize: 20,
    color: "#9497FF",
    marginRight: screenWidth * 0,
  },
  locationContainer: {
    flexDirection: "row",
    right: screenWidth * -0.52,
  },

  containerWorkTime: {
    width: screenWidth,
    height: screenHeight * 0.08,
    marginTop: screenHeight * 0.02,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#FFD83D",
  },
  textWorkTime: {
    fontSize: 20,
    color: "white",
    left: screenWidth * 0.1,
    top: screenHeight * 0.018,
  },

  phoneContainer: {
    width: screenWidth,
    height: screenHeight * 0.08,
  },
  phoneText: {
    fontSize: 25,
    color: "#9497FF",
    marginTop: screenHeight * 0.012,
    left: screenWidth * 0.1,
  },
  iconTelephone: {
    left: screenWidth * 0.14,
    top: screenHeight * 0.025,
  },

  lineSeporatorUp: {
    width: screenWidth * 0.85,
    height: 1,
    opacity: 0.3,
    backgroundColor: "#FFD83D",
    top: screenHeight * 0.05,
    left: screenWidth * 0.07,
  },
  lineSeporatorDown: {
    width: screenWidth * 0.85,
    height: 1,
    opacity: 0.3,
    backgroundColor: "#FFD83D",
    top: screenHeight * 0.05,
    left: screenWidth * 0.04,
  },
  links: {
    fontSize: 30,
    color: "#9497FF",
  },
  iconConntection: {
    top: screenHeight * 0.012,
    left: screenWidth * 0.03,
  },

  webContainer: {
    marginTop: screenHeight * 0.02,
    padding: screenWidth * 0.04,
    top: screenHeight * 0.01,
  },
  webRow: {
    flexDirection: "row",
    marginTop: screenHeight * 0.01,
    left: screenWidth * 0.06,
  },
});

export default styles;