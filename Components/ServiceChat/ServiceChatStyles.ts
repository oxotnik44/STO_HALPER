import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
  },

  image_logo: {
    width: Dimensions.get("window").width * 0.16,
    height: Dimensions.get("window").height * 0.1,
    top: 0,
    left: 0,
  },

  nameService: {
    width: Dimensions.get("window").width * 0.16,
    height: Dimensions.get("window").height * 0.1,
    top: 0,
    left: 0,
  },
  headerService:{
    flexDirection: "row"
  }
});