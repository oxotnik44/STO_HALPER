import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
  },
  headerService: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  image_logo: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.12,
    top: 37,
    left: -10,
  },
  nameService: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    top: 25,
    left: 1,
  },
  footerService: {
    borderTopWidth: 1,
    borderTopColor: "yellow",
    paddingTop: 20,
    paddingHorizontal: 20,
    top: 20,
  },
  footerText: {
    color: "white",
    fontSize: 18,
    top: -65,
    left: 80,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    top: -81,
    left: 250,
  },
  
});
