import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  Dimensions,
  BackHandler,
} from "react-native";
import {  useSelector } from "react-redux";
import styles from "./ServiceInfoStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import Reviews from "./Reviews";
import ServiceInfoForAdmin from "./ServiceInfoForAdmin";
import ServiceInfoForUser from "./ServiceInfoForUser";
import Applications from "./Applications";
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

interface ServiceInfoState {
  loginReducer: {
    dataServiceForUser: any[];
    numberService: number;
    isAdmin: boolean;
    dataServiceForAdmin: any;
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const ServiceInfo: React.FC<AuthorizationProps> = ({ navigation }) => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.loginReducer
  );
  
  const handleBackPress = () => {
    navigation.navigate("Authorization");
    return true; // Возвращаем true, чтобы предотвратить действие по умолчанию (например, выход из приложения)
  };

  useEffect(() => {
    if (dataServiceInfo.isAdmin) {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackPress
      );

      return () => {
        backHandler.remove();
      };
    }
  }, [dataServiceInfo.isAdmin]);

  const selectedItem = dataServiceInfo.dataServiceForUser.find(
    (item, index) => index === dataServiceInfo.numberService
  );
  let yandexMapsUrl = "";
  const { city, address } = selectedItem || {};
  const [selected, setSelected] = useState("info");
  if (selectedItem) {
    yandexMapsUrl = `https://yandex.ru/maps/?text=${city}, ${address}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./../../assets/cto_logo.png")}
            style={styles.imageLogo}
          ></Image>
          <Text style={styles.nameService}>
            {dataServiceInfo.isAdmin
              ? dataServiceInfo.dataServiceForAdmin.nameService
              : selectedItem.nameService}
          </Text>
        </View>
        <View style={{ flexDirection: "row", zIndex: 2 }}>
          <Text
            style={[
              selected === "info" ? styles.underlinedText : null,
              styles.textInfoAndReview,
            ]}
            onPress={() => setSelected("info")}
          >
            Инфо
          </Text>
          <Text
            style={[
              selected === "reviews" ? styles.underlinedText : null,
              styles.textInfoAndReview,
            ]}
            onPress={() => setSelected("reviews")}
          >
            Отзывы
          </Text>
          <Text
            style={[
              selected === "applications" ? styles.underlinedText : null,
              styles.textInfoAndReview,
            ]}
            onPress={() => setSelected("applications")}
          >
            Заявки
          </Text>
        </View>
      </View>
      {selected === "info" && dataServiceInfo.isAdmin && (
        <ServiceInfoForAdmin />
      )}
      {selected === "info" && !dataServiceInfo.isAdmin && (
        <ServiceInfoForUser />
      )}
      {selected === "reviews" && <Reviews />}
      {selected === "applications" && <Applications />}
    </View>
  );
};

export default ServiceInfo;
