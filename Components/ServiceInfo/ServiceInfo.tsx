import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import { Image, View, Text, Linking, Alert } from "react-native";
import { useSelector } from "react-redux";
import styles, { screenWidth, screenHeight } from "./ServiceInfoStyles";
import CarouselCardItem from "./CarouselCardItem";

interface ServiceInfoState {
  serviceInfoReducer: {
    numberService: number;
    dataService: [
      {
        whatsappNumber: string;
        webAddress: string;
        nameService: string;
        startOfWork: string;
        endOfWork: string;
        telephoneNumber: string;
        city: string;
        address: string;
        index: string;
      }
    ];
  };
}

type ChoiseServiceProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const ServiceInfo: React.FC<ChoiseServiceProps> = () => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.serviceInfoReducer
  );
  let yandexMapsUrl = "";
  const selectedItem = dataServiceInfo.dataService.find(
    (item, index) => index === dataServiceInfo.numberService
  );
  const { city, address } = selectedItem || {};

  if (selectedItem) {
    yandexMapsUrl = `https://yandex.ru/maps/?text=${city}, ${address}`;
  }
  const [selected, setSelected] = useState("info");
  return (
    <>
      {dataServiceInfo.dataService.map((item, index) => {
        if (index === dataServiceInfo.numberService) {
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
                    <Text style={styles.nameService}>{item.nameService}</Text>
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
                  
                  <Text style={styles.locationText}>
                    {item.index}, {item.city}, {item.address}
                  </Text>
                </View>
                <View style={styles.locationContainer}>
                  <Text
                    style={styles.textLocationService}
                    onPress={() => {
                      if ((item.city && item.address) != null) {
                        Linking.openURL(yandexMapsUrl);
                      } else {
                        Alert.alert("Данные не введены!");
                      }
                    }}
                  >
                    Найти на Я. Карте
                  </Text>
                  <Image source={require("../../assets/arrowWhite.png")} />
                </View>
                <View style={styles.containerWorkTime}>
                  <Text style={styles.textWorkTime}>
                    Ежедневно: {item.startOfWork} - {item.endOfWork}
                  </Text>
                </View>
                <View style={styles.phoneContainer}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.phoneText}>{item.telephoneNumber}</Text>
                    <Image
                      source={require("../../assets/iconTelephone.png")}
                      style={styles.iconTelephone}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.phoneText}>{item.telephoneNumber}</Text>
                    <Image
                      source={require("../../assets/iconTelephone.png")}
                      style={styles.iconTelephone}
                    />
                  </View>
                </View>
                <View style={styles.lineSeporatorUp}></View>
                <View style={styles.webContainer}>
                  <View style={[styles.webRow, { flexDirection: "row" }]}>
                    <Text style={styles.links}>{item.webAddress}</Text>
                    <Image
                      source={require("../../assets/iconInet.png")}
                      style={styles.iconConntection}
                    />
                  </View>
                  <View style={[styles.webRow, { flexDirection: "row" }]}>
                    <Text style={styles.links}>{item.whatsappNumber}</Text>
                    <Image
                      source={require("../../assets/iconWhatsApp.png")}
                      style={styles.iconConntection}
                    />
                  </View>
                  <View style={styles.lineSeporatorDown}></View>
                </View>
              </View>
            </View>
          );
        }
      })}
    </>
  );
};

export default ServiceInfo;
