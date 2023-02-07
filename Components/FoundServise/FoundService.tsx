import React from "react"; 
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as Animatable from "react-native-animatable";
import { LayoutAnimation } from "react-native";
interface FoundServiceState {
  choiseServicesReducer: {
    dataService: [
      {
        nameService: string;
        distanceToService: string;
        expanded: boolean;
      }
    ];
  };
}

const FoundService: React.FC = () => {
  const { dataService } = useSelector(
    (state: FoundServiceState) => state.choiseServicesReducer
  );
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handlePress = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      {dataService.map((item, index) => (
        <Pressable onPress={() => handlePress(index)}>
          <View
            style={[
              styles.container,
              { height: selectedIndex === index ? 250 : 100 },
            ]}
            key={index}
          >
            <Text style={styles.nameService}>{item.nameService}</Text>
            <Text style={styles.distanceToService}>
              Растояние: {item.distanceToService}км
            </Text>
            <Image
              source={require("./../../assets/arrow.png")}
              style={styles.arrow}
            />
            {selectedIndex === index && (
              <Animatable.View
                animation={selectedIndex === index ? "fadeIn" : "fadeOut"}
                duration={1000}
                style={styles.expanded}
              >
                //qweqweqwe
                <Text>Additional information about the service</Text>
                <Pressable style={styles.buttonService}>
                  <Text style={styles.textButtonService}>Перейти в чат</Text>
                </Pressable>
                <Pressable style={styles.buttonService}>
                  <Text style={styles.textButtonService}>Найти в 2Gis</Text>
                </Pressable>
              </Animatable.View>
            )}
          </View>
        </Pressable>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 100,
    backgroundColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 25,
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

export default FoundService;
