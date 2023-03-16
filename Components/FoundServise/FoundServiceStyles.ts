import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width*0.8,
    height: Dimensions.get("window").height*0.2,
    backgroundColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 25,
    top:Dimensions.get("window").height*0.11
  },
  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    height: 30,
    width: 30,
    position: "absolute",
    right: 10,
    top: 35,
  },
  expanded: {
    height: 150,
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
    width: 300,
    height: 40,
    alignSelf: "center",
    backgroundColor: "#FFD83D",
    borderRadius: 15,
    borderBottomWidth: 1,
    marginBottom: 5,
    marginTop: 5,
  },
  textButtonService: {
    top:5,
    fontStyle: "normal",
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
});


