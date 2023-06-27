import React from "react";
import {
  Image,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as Animatable from "react-native-animatable";
import { styles } from "./ChoiseServiceStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import { setNumberService } from "../../redux/reducers/serviceInfoReducer";
import { getReviews } from "../../api/apiService";

interface DataServiceState {
  serviceInfoReducer: {
    dataService: [
      {
        nameService: string;
        address: string;
      }
    ];
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const ChoiseService: React.FC<AuthorizationProps> = ({ navigation }) => {
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
  const [searchService, setSearchService] = useState("");
  const dispatch = useDispatch();
  const filteredServices = dataServiceInfo.dataService.filter((item) => {
    // Приведите оба значения к нижнему регистру для сравнения без учета регистра
    const serviceName = item.nameService.toLowerCase();
    const searchValue = searchService.toLowerCase();
    // Проверьте, содержит ли название сервиса введенное значение поиска
    return serviceName.includes(searchValue);
  });
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Поиск"
        style={styles.searchAssistance}
        placeholderTextColor="white"
        value={searchService}
        onChangeText={(value) => setSearchService(value)}
      />
      <Image
        source={require("./../../assets/loupe2.png")}
        style={styles.loupeImg}
      />
      {filteredServices.map((item, index) => (
        <Pressable onPress={() => handlePress(index)} key={index}>
          <View
            style={[
              styles.itemAssistance,
              { height: selectedIndex === index ? 250 : 100 },
            ]}
            key={index}
          >
            <Text style={styles.nameService}>{item.nameService}</Text>
            <Text style={styles.distanceToService}></Text>
            <Animatable.Image
              source={require("./../../assets/arrow.png")}
              style={[
                styles.arrow,
                {
                  transform: [
                    {
                      rotate: selectedIndex === index ? "90deg" : "0deg",
                    },
                  ],
                },
              ]}
            />
            {selectedIndex === index && (
              <Animatable.View
                animation={selectedIndex === index ? "fadeIn" : "fadeOut"}
                duration={1000}
                style={styles.expanded}
              >
                <Text style={styles.address}>Адрес:{item.address}</Text>
                {/* <Pressable style={styles.buttonService}>
                  <Text style={styles.textButtonService}>Перейти в чат</Text>
                </Pressable> */}
                <Pressable
                  style={styles.buttonService}
                  onPress={() => {
                    dispatch(setNumberService(index));
                    getReviews(item.nameService, dispatch);
                    navigation.navigate("ServiceInfo");
                  }}
                >
                  <Text style={styles.textButtonService}>Открыть профиль</Text>
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
