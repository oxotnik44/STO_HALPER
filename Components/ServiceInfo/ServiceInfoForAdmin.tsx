import React, { useEffect, useState } from "react";
import { Image, View, Text, Dimensions, Alert, Linking } from "react-native";
import { useSelector } from "react-redux";
import styles from "./ServiceInfoStyles";
import CarouselCardItem from "./CarouselCardItem";
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
interface ServiceInfoState {
  loginReducer: {
    numberService: number;
    isAdmin: boolean;
    dataServiceForAdmin: any;
  };
}
const ServiceInfoForAdmin = () => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.loginReducer
  );
  let yandexMapsUrl = "";
  yandexMapsUrl = `https://yandex.ru/maps/?text=${dataServiceInfo.dataServiceForAdmin.city}, ${dataServiceInfo.dataServiceForAdmin.address}`;
  return (
    <View style={{ top: 30 }}>
      <View
        style={{
          width: screenWidth,
          height: screenHeight * 0.12,
          top: screenHeight * 0.01,
        }}
      >
        <Text style={styles.locationText}>
          {dataServiceInfo.dataServiceForAdmin.index},{" "}
          {dataServiceInfo.dataServiceForAdmin.city},{" "}
          {dataServiceInfo.dataServiceForAdmin.address}
        </Text>
      </View>
      <View style={styles.locationContainer}>
        <Text
          style={styles.textLocationService}
          onPress={() => {
            if (
              dataServiceInfo.dataServiceForAdmin.city &&
              dataServiceInfo.dataServiceForAdmin.address
            ) {
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
          Ежедневно: {dataServiceInfo.dataServiceForAdmin.startOfWork} -{" "}
          {dataServiceInfo.dataServiceForAdmin.endOfWork}
        </Text>
      </View>
      <View style={styles.phoneContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.phoneText}>
            {dataServiceInfo.dataServiceForAdmin.telephoneNumber}
          </Text>
          <Image
            source={require("../../assets/iconTelephone.png")}
            style={styles.iconTelephone}
          />
        </View>
      </View>
      <View style={styles.lineSeporatorUp}></View>
      <View style={styles.webContainer}>
        <View style={[styles.webRow, { flexDirection: "row" }]}>
          <Text style={styles.links}>
            {dataServiceInfo.dataServiceForAdmin.webAddress}
          </Text>
          <Image
            source={require("../../assets/iconInet.png")}
            style={styles.iconConntection}
          />
        </View>
        <View style={styles.lineSeporatorDown}></View>
      </View>
      <CarouselCardItem />
    </View>
  );
};
export default ServiceInfoForAdmin;
