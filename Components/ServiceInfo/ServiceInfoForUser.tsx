import React from "react";
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
    dataServiceForUser: any[];
  };
}

const ServiceInfoForUser: React.FC = () => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.loginReducer
  );
  const selectedItem =
    dataServiceInfo.dataServiceForUser[dataServiceInfo.numberService];
  let yandexMapsUrl = "";
  const { city, address } = selectedItem || {};
  if (selectedItem) {
    yandexMapsUrl = `https://yandex.ru/maps/?text=${city}, ${address}`;
  }

  return (
    <View style={{ top: 30 }}>
      {selectedItem && (
        <>
          <View
            style={{
              width: screenWidth,
              height: screenHeight * 0.12,
              top: screenHeight * 0.01,
            }}
          >
            <Text style={styles.locationText}>
              {selectedItem.index}, {selectedItem.city}, {selectedItem.address}
            </Text>
          </View>
          <View style={styles.locationContainer}>
            <Text
              style={styles.textLocationService}
              onPress={() => {
                if (selectedItem.city && selectedItem.address) {
                  Linking.openURL(
                    `https://yandex.ru/maps/?text=${selectedItem.city}, ${selectedItem.address}`
                  );
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
              Ежедневно: {selectedItem.startOfWork} - {selectedItem.endOfWork}
            </Text>
          </View>
          <View style={styles.phoneContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.phoneText}>
                {selectedItem.telephoneNumber}
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
              <Text style={styles.links}>{selectedItem.webAddress}</Text>
              <Image
                source={require("../../assets/iconInet.png")}
                style={styles.iconConntection}
              />
            </View>
            
            <View style={styles.lineSeporatorDown}></View>
          </View>
          <CarouselCardItem />
        </>
      )}
    </View>
  );
};

export default ServiceInfoForUser;
