import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  Dimensions,
  Alert,
  Linking,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import styles from "./ServiceInfoStyles";
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
interface ServiceChatState {
  serviceInfoReducer: {
    nameService: string;
    expandedService: boolean;
  };
}
interface ServiceInfoState {
  serviceInfoReducer: {
    numberService: number;
    isAdmin: boolean;
    dataService: [
      {
        nameAdmin: string;
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
interface ServiceInfo {
  regServiceDataReducer: {
    nameAdmin: string;
    webAddress: string;
    nameService: string;
    startOfWork: string;
    endOfWork: string;
    telephoneNumber: string;
    city: string;
    address: string;
    index: string;
    workingNumber: string;
  };
}
const ServiceInfoForAdmin: React.FC = () => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.serviceInfoReducer
  );
  const dataInfo = useSelector(
    (state: ServiceInfo) => state.regServiceDataReducer
  );
  const selectedItem = dataServiceInfo.dataService.find(
    (item, index) => index === dataServiceInfo.numberService
  );
  let yandexMapsUrl = `https://yandex.ru/maps/?text=${dataInfo.city}, ${dataInfo.address}`;
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
            <Text style={styles.nameService}>{dataInfo.nameService}</Text>
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
            {dataInfo.index}, {dataInfo.city}, {dataInfo.address}
          </Text>
        </View>
        <View style={styles.locationContainer}>
          <Text
            style={styles.textLocationService}
            onPress={() => {
              if ((dataInfo.city && dataInfo.address) != null) {
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
            Ежедневно: {dataInfo.startOfWork} - {dataInfo.endOfWork}
          </Text>
        </View>
        <View style={styles.phoneContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${dataInfo.telephoneNumber}`)}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.phoneText}>{dataInfo.telephoneNumber}</Text>
              <Image
                source={require("../../assets/iconTelephone.png")}
                style={styles.iconTelephone}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${dataInfo.telephoneNumber}`)}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.phoneText}>{dataInfo.telephoneNumber}</Text>
              <Image
                source={require("../../assets/iconTelephone.png")}
                style={styles.iconTelephone}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.lineSeporatorUp}></View>
        <View style={styles.webContainer}>
          <View style={[styles.webRow, { flexDirection: "row" }]}>
            <Text style={styles.links}>{dataInfo.webAddress}</Text>
            <Image
              source={require("../../assets/iconInet.png")}
              style={styles.iconConntection}
            />
          </View>
          <View style={[styles.webRow, { flexDirection: "row" }]}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  `whatsapp://send?phone=${dataInfo.telephoneNumber}`
                )
              }
            >
              <Text style={styles.links}>{dataInfo.nameAdmin}</Text>
            </TouchableOpacity>

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
};

export default ServiceInfoForAdmin;
