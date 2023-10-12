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
    height: screenHeight * 0.19,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: screenHeight * 0.015,
    backgroundColor: "#3B3B3B",
    zIndex: 2,
  },
  imageLogo: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.12,
    marginTop: screenHeight * 0.015,
  },
  nameService: {
    color: "white",
    marginTop: screenHeight * 0.01,
    left: screenWidth * 0.07,
    fontSize: 40,
  },
  textInfoAndReview: {
    paddingLeft: screenWidth * 0.1,
    color: "white",
    fontSize: 23,
    bottom: screenHeight * 0.01,
  },
  underlinedText: {
    textDecorationLine: "underline",
  },

  locationText: {
    fontSize: screenWidth * 0.07,
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
    right: screenWidth * -0.47,
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
    left: screenWidth * 0.07,
  },
  lineSeporatorDown: {
    width: screenWidth * 0.85,
    height: 1,
    opacity: 0.3,
    backgroundColor: "#FFD83D",
    top: screenHeight * 0.04,
    left: screenWidth * 0.04,
  },
  links: {
    fontSize: 30,
    color: "#9497FF",
  },
  iconConntection: {
    left: screenWidth * 0.02,
    top: screenHeight * 0.008,
  },

  webContainer: {
    marginTop: screenHeight * 0.02,
    padding: screenWidth * 0.04,
  },
  webRow: {
    flexDirection: "row",
    marginTop: screenHeight * 0.01,
    left: screenWidth * 0.06,
  },
  input: {
    borderBottomWidth: 4,
    borderRadius: 5,
    borderColor: "#FFD83D99",
    width: screenWidth * 0.8,
    height: 60,
    alignSelf: "center",
    right: 20,
    paddingLeft: 20,
    color: "white",
    fontSize: 24,
    top: screenHeight * 0.09,
  },
  buttonReview: {
    width: screenWidth * 0.1,
    height: screenHeight * 0.05,
    left: screenWidth * 0.43,
    top: screenHeight * 0.025,
  },
  containerUserReview: {
    flexDirection: "column",
    paddingBottom: 25,
  },
  review: {
    flexDirection: "row",
    marginBottom: 10,
    alignSelf: "center",
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    backgroundColor: "white",
    borderRadius: 9,
  },

  imageUser: {
    width: screenWidth * 0.1,
    height: screenHeight * 0.05,
    marginTop: 2,
  },
  textUser: {
    fontSize: 16,
    right: 10,
    fontWeight: "bold",
    left: 5,
  },
  textReview: {
    fontSize: 14,
    left: 5,
  },
  containerReview: {
    height: screenHeight * 0.55,
    zIndex: 1,
    top: screenHeight * 0.05,
  },
  btnTimePicker: {
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    width: screenWidth * 0.4,
    height: screenHeight * 0.05,
    justifyContent: "center",
    marginTop: screenHeight * 0.03,
    alignSelf: "center",
  },
  textTimePicker: {
    textAlign: "center",
    fontSize: screenWidth * 0.04,
  },
  btnApplication: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.07,
    alignSelf: "center",
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    borderBottomWidth: 1,
    marginTop: screenHeight * 0.02,
    justifyContent: "center",
  },
  containerApplication: {
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "white",
    width: screenWidth * 0.9,
    alignSelf: "center",
  },
});

export default styles;
