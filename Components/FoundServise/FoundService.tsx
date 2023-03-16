import React from "react"; 
import { Image, View, Text, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import * as Animatable from "react-native-animatable";
import { styles } from "./FoundServiceStyles"; 

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

export default FoundService;
