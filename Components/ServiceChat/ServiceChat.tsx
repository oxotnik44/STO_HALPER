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

interface ServiceChatState {
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

const ServiceChat: React.FC = () => {
  const dataService = useSelector(
    (state: ServiceChatState) => state.serviceInfoReducer
  );

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image
            source={require("./../../assets/logo_service.png")}
            style={styles.image_logo}
          ></Image>
          <Text></Text>
        </View>
        <View>
          <View></View>
          <Text></Text>
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

export default ServiceChat;
