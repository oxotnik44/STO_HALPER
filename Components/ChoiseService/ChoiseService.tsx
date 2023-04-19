import React from "react";
import {
  Image,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import * as Animatable from "react-native-animatable";
import { styles } from "./ChoiseServiceStyles";
interface ChoiseServiceState {
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
interface DataServiceState {
  serviceInfoReducer: {
    dataService: [
      {
        whatsappNumber: string;
      }
    ];
  };
}

const ChoiseService: React.FC = () => {
  
  const dataServiceInfo = useSelector(
    (state: DataServiceState) => state.serviceInfoReducer
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
    <View style={styles.container}>
      <TextInput
        placeholder="Поиск"
        style={styles.searchAssistance}
        placeholderTextColor="white"
      />
      <Image
        source={require("./../../assets/loupe2.png")}
        style={styles.loupeImg}
      />
      {dataServiceInfo.dataService.map((item, index) => (
        <Pressable onPress={() => handlePress(index)}>
          <View
            style={[
              styles.itemAssistance,
              { height: selectedIndex === index ? 250 : 100 },
            ]}
            key={index}
          >
            <Text style={styles.nameService}>{item.whatsappNumber}</Text>
            <Text style={styles.distanceToService}>
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
    </View>
  );
};
export default ChoiseService;
