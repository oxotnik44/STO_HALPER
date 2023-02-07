import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FoundService from "../FoundServise/FoundService";

interface ServiceInfoState {
  serviceInfoReducer: {
    logoService: string;
    nameService: string;
    expandedService: boolean;
    locationService: string;
    begindayService: string;
    enddayService: string;
    phoneService: string;
    webService: string;
    whatsappService: string;
  };
}

type ChoiseServiceProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const ServiceInfo: React.FC<ChoiseServiceProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { dataService } = useSelector((state: ServiceInfoState) => state.serviceInfoReducer.dataService);


  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image
            source={require("./../../assets/loupe.png")}
            style={styles.image_logo}
          ></Image>
          <Text>{dataService.locationService}</Text>
        </View>
        <View>
          <Text>Инфо</Text>
          <Text>Отзывы</Text>
        </View>
      </View>
      <View>
        <Text>{dataService.locationService}</Text>
      </View>
      <View>
        <Text>
          Ежедневно:{dataService.begindayService} - {dataService.enddayService}
        </Text>
      </View>
      <View>
        <Text>{dataService.phoneService}</Text>
        <Text>{dataService.phoneService}</Text>
      </View>
      <View>
        <View>
          <Text>{dataService.webService}</Text>
          <Image></Image>
        </View>
        <View>
          <Text>{dataService.whatsappService}</Text>
          <Image></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: "90%",
    height: 40,
    alignSelf: "center",
    paddingLeft: 10,
    marginTop: 20,
    placeholderTextColor: "#ff0000",
  },

  image_logo: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 30,
    top: 29,
  },
});

export default ServiceInfo;
