import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },

  image_logo: {
    width: screenWidth * 0.16,
    height: screenHeight * 0.1,
  },

  nameService: {
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    color: "#FFF",
    marginHorizontal: 10,
  },

  headerService:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  }
});
