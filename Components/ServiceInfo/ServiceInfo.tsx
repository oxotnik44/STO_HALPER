import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import { Image, View, Text, Linking, Alert } from "react-native";
import { useSelector } from "react-redux";
import styles, { screenWidth, screenHeight } from "./ServiceInfoStyles";
import CarouselCardItem from "./CarouselCardItem";

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
    whatsAppService: string;
  };
}
interface ServiceLocationInfo {
  regServiceDataReducer: {
    city: string;
    address: string;
  };
}

type ChoiseServiceProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const ServiceInfo: React.FC<ChoiseServiceProps> = () => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.serviceInfoReducer
  );
  const dataServiceLocation = useSelector(
    (state: ServiceLocationInfo) => state.regServiceDataReducer
  );
  const address = `${dataServiceLocation.city}, ${dataServiceLocation.address}`;
  const yandexMapsUrl = `https://yandex.ru/maps/?text=${address}`;
  const [selected, setSelected] = useState("info");
  return (
    <View style={styles.container}>
      <View
        style={{
          top: screenHeight * 0.04,
        }}
      >
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
              {dataServiceInfo.nameService}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
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
          </View>
        </View>
        <View
          style={{
            width: screenWidth,
            height: screenHeight * 0.12,
            top: screenHeight * 0.01,
          }}
        >
          <Text style={styles.locationText}>Бориса Богаткова, 80</Text>
          <Text style={styles.locationText}>630008, Новосибирск, Золотая</Text>
          <Text style={styles.locationText}>Нива м-н</Text>
          <Text style={styles.locationText}>1 этаж</Text>
        </View>
        <View style={styles.locationContainer}>
          <Text
            style={styles.textLocationService}
            onPress={() => {
              if ((dataServiceLocation.city && dataServiceLocation.address) != null) {
                Linking.openURL(yandexMapsUrl);
              }
              else{
                Alert.alert("Данные не введены!")
              }
            }}
          >
            Найти на Я. Карте
          </Text>
          <Image source={require("../../assets/arrowWhite.png")} />
        </View>
        <View style={styles.containerWorkTime}>
          <Text style={styles.textWorkTime}>
            Ежедневно: {dataServiceInfo.begindayService} -{" "}
            {dataServiceInfo.enddayService}
          </Text>
        </View>
        <View style={styles.phoneContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.phoneText}>{dataServiceInfo.phoneService}</Text>
            <Image
              source={require("../../assets/iconTelephone.png")}
              style={styles.iconTelephone}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.phoneText}>{dataServiceInfo.phoneService}</Text>
            <Image
              source={require("../../assets/iconTelephone.png")}
              style={styles.iconTelephone}
            />
          </View>
        </View>
        <View style={styles.lineSeporatorUp}></View>
        <View style={styles.webContainer}>
          <View style={styles.webRow}>
            <Text style={styles.links}>{dataServiceInfo.webService}</Text>
            <Image
              source={require("../../assets/iconInet.png")}
              style={styles.iconConntection}
            />
          </View>
          <View style={styles.webRow}>
            <Text style={styles.links}>{dataServiceInfo.whatsAppService}</Text>
            <Image
              source={require("../../assets/iconWhatsApp.png")}
              style={styles.iconConntection}
            />
          </View>
          <View style={styles.lineSeporatorDown}></View>
          <CarouselCardItem />
        </View>
      </View>
    </View>
  );
};

export default ServiceInfo;
