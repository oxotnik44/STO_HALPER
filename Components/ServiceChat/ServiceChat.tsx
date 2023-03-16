import React from "react";
import { Image, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./ServiceChatStyles";

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

export default ServiceChat;
