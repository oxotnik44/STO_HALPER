import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  Dimensions,
  Alert,
  Linking,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  BackHandler,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ServiceInfoStyles";
import CarouselCardItem from "./CarouselCardItem";
import { setReviewUser } from "../../redux/reducers/reviewsServiceReducer";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
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
interface ServiceInfos {
  serviceInfoShowReducer: {
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
interface ReviewInfo {
  reviewsServiceReducer: {
    textReview: string;
    reviews: [{ review: string; userName: string }];
  };
}
type AuthorizationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
const ServiceInfoForAdmin: React.FC<AuthorizationProps> = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.navigate("Authorization");
    return true; // Возвращаем true, чтобы предотвратить действие по умолчанию (например, выход из приложения)
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, []);
  const dataServiceInfo = useSelector(
    (state: ServiceInfos) => state.serviceInfoShowReducer
  );
  const reviewInfo = useSelector(
    (state: ReviewInfo) => state.reviewsServiceReducer
  );

  let yandexMapsUrl = `https://yandex.ru/maps/?text=${dataServiceInfo.city}, ${dataServiceInfo.address}`;
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
        {selected === "info" ? (
          <View>
            <View
              style={{
                width: screenWidth,
                height: screenHeight * 0.12,
                top: screenHeight * 0.01,
              }}
            >
              <Text style={styles.locationText}>
                {dataServiceInfo.index}, {dataServiceInfo.city},{" "}
                {dataServiceInfo.address}
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <Text
                style={styles.textLocationService}
                onPress={() => {
                  if (
                    (dataServiceInfo.city && dataServiceInfo.address) != null
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
                Ежедневно: {dataServiceInfo.startOfWork} -{" "}
                {dataServiceInfo.endOfWork}
              </Text>
            </View>
            <View style={styles.phoneContainer}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`tel:${dataServiceInfo.telephoneNumber}`)
                }
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.phoneText}>
                    {dataServiceInfo.telephoneNumber}
                  </Text>
                  <Image
                    source={require("../../assets/iconTelephone.png")}
                    style={styles.iconTelephone}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`tel:${dataServiceInfo.telephoneNumber}`)
                }
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.phoneText}>
                    {dataServiceInfo.telephoneNumber}
                  </Text>
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
                <Text style={styles.links}>{dataServiceInfo.webAddress}</Text>
                <Image
                  source={require("../../assets/iconInet.png")}
                  style={styles.iconConntection}
                />
              </View>
              <View style={[styles.webRow, { flexDirection: "row" }]}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      `whatsapp://send?phone=${dataServiceInfo.telephoneNumber}`
                    )
                  }
                >
                  <Text style={styles.links}>{dataServiceInfo.nameAdmin}</Text>
                </TouchableOpacity>

                <Image
                  source={require("../../assets/iconWhatsApp.png")}
                  style={styles.iconConntection}
                />
              </View>
              <View style={styles.lineSeporatorDown}></View>
            </View>
            <CarouselCardItem />
          </View>
        ) : (
          <View>
            <View style={{ height: screenHeight * 0.8 }}>
              <ScrollView>
                {reviewInfo.reviews.length > 0 ? (
                  reviewInfo.reviews.map((item, index) => (
                    <View key={index} style={styles.review}>
                      <Image
                        source={require("./../../assets/imageUser.png")}
                        style={styles.imageUser}
                      />
                      <View>
                        <Text style={styles.textUser}>{item.userName}</Text>
                        <Text style={styles.textReview}>{item.review}</Text>
                      </View>
                    </View>
                  ))
                ) : (
                  <Text>Отзывов нет</Text>
                )}
              </ScrollView>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ServiceInfoForAdmin;
