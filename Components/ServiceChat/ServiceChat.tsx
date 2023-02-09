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
import { Dimensions } from "react-native";

interface ServiceChatState {
  serviceInfoReducer: {
    logoService: string;
    nameService: string;
    expandedService: boolean;
  };
}

const ServiceChat: React.FC = () => {
  const dataServiceChat = useSelector(
    (state: ServiceChatState) => state.serviceInfoReducer
  );

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerService}>
          <Image
            source={require("./../../assets/logo_service.png")}
            style={styles.image_logo}
          ></Image>
          <Text>{dataServiceChat.nameService}</Text>
          <Text>Оператор на связи {dataServiceChat.expandedService}</Text>
        </View>
        <View>
          <View></View>
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

export default ServiceChat;
