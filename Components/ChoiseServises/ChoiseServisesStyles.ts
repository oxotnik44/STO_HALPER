import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
  },
  inner: {
    padding: 24,
  },
  inputSearch: {
    backgroundColor: "#AEAEAE",
    borderRadius: 15,
    width: Dimensions.get("window").width*0.9,
    height: Dimensions.get("window").height*0.05,
    alignSelf: "center",
    paddingLeft: 10,
    marginTop: 20,
    placeholderTextColor: "#ff0000",
    top:Dimensions.get("window").height*0.09
  },

  image: {
    width: 24,
    height: 24,
    position: "absolute",
    right: Dimensions.get("window").width*0.09,
    top:Dimensions.get("window").height*0.126
  },
});
