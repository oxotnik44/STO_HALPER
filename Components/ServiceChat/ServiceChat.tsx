import React from "react";
import { Image, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./ServiceChatStyles";
import OnlineIndicator from "./OnlineIndicator";

interface ServiceChatState {
  serviceInfoReducer: {
    logoService: string;
    nameService: string;
    expandedService: boolean;
    isOnline: boolean;
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
      <OnlineIndicator isOnline={dataServiceChat.isOnline} />
        <Image
          source={require("./../../assets/logo_service.png")}
          style={styles.image_logo}
        />
        <Text style={styles.nameService}>{dataServiceChat.nameService}</Text>
      </View>
      <View>
        <View></View>
      </View>
      <View style={[styles.footerService, dataServiceChat.expandedService ? {backgroundColor:"green"} : {backgroundColor:"red"} ]}>
        <Text style={styles.footerText}>
          Оператор на связи {dataServiceChat.expandedService}
        </Text>
      </View>
    </View>
  </View>
  );
};

export default ServiceChat;
