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
<<<<<<< HEAD
    <View>
      <View style={styles.headerService}>
        <Image
          source={require("./../../assets/logo_service.png")}
          style={styles.image_logo}
        />
        <Text style={styles.nameService}>{dataServiceChat.nameService}</Text>
      </View>
=======
>>>>>>> 2afbd8a1be15d3bfff94fb230e33ad2834b5af35
      <View>
        <View style={styles.headerService}>
          <Image
            source={require("./../../assets/logo_service.png")}
            style={styles.image_logo}
          />
          <Text style={styles.nameService}>{dataServiceChat.nameService}</Text>
        </View>
        <View>
          <View></View>
        </View>
        <View
          style={[
            styles.footerService,
            dataServiceChat.expandedService
              ? { backgroundColor: "green" }
              : { backgroundColor: "red" },
          ]}
        >
          <Text style={styles.footerText}>
            Оператор на связи {dataServiceChat.expandedService}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ServiceChat;
