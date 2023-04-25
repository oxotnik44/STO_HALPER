import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  Dimensions,
  Alert,
  Linking,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ServiceInfoStyles";
import { setReviewUser } from "../../redux/reducers/reviewsServiceReducer";
import { addReview } from "../../api/apiService";
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

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
        reviews: { review: string; userName: string };
      }
    ];
  };
}
interface ServiceInfo {
  regServiceDataReducer: {
    nameAdmin: string;
  };
}
interface UserInfo {
  authReducer: {
    login: string;
  };
}
interface ReviewInfo {
  reviewsServiceReducer: {
    textReview: string;
    reviews: [{ userName: string; review: string }];
  };
}
const ServiceInfoForUser: React.FC = () => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.serviceInfoReducer
  );
  const dataInfo = useSelector(
    (state: ServiceInfo) => state.regServiceDataReducer
  );
  const selectedItem = dataServiceInfo.dataService.find(
    (item, index) => index === dataServiceInfo.numberService
  );
  const reviewInfo = useSelector(
    (state: ReviewInfo) => state.reviewsServiceReducer
  );
  reviewInfo.reviews.map((e) => {
  console.log(e.review);
});
  const { login } = useSelector((state: UserInfo) => state.authReducer);
  
  const dispatch = useDispatch();
  const setTextReview = (text: string) => {
    dispatch(setReviewUser(text));
  };
  let yandexMapsUrl = "";
  const { city, address } = selectedItem || {};
  const [selected, setSelected] = useState("info");
  if (selectedItem) {
    yandexMapsUrl = `https://yandex.ru/maps/?text=${city}, ${address}`;
  }
  const setDataReview = () => {
    addReview(
      reviewInfo.textReview,
      login,
      dataServiceInfo.dataService[dataServiceInfo.numberService].nameService,
      dispatch
    );
  };
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
              {
                dataServiceInfo.dataService[dataServiceInfo.numberService]
                  .nameService
              }
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
                {
                  dataServiceInfo.dataService[dataServiceInfo.numberService]
                    .index
                }
                ,{" "}
                {
                  dataServiceInfo.dataService[dataServiceInfo.numberService]
                    .city
                }
                ,{" "}
                {
                  dataServiceInfo.dataService[dataServiceInfo.numberService]
                    .address
                }
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <Text
                style={styles.textLocationService}
                onPress={() => {
                  if (
                    (dataServiceInfo.dataService[dataServiceInfo.numberService]
                      .city &&
                      dataServiceInfo.dataService[dataServiceInfo.numberService]
                        .address) != null
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
                Ежедневно:{" "}
                {
                  dataServiceInfo.dataService[dataServiceInfo.numberService]
                    .startOfWork
                }{" "}
                -{" "}
                {
                  dataServiceInfo.dataService[dataServiceInfo.numberService]
                    .endOfWork
                }
              </Text>
            </View>
            <View style={styles.phoneContainer}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.phoneText}>
                  {
                    dataServiceInfo.dataService[dataServiceInfo.numberService]
                      .telephoneNumber
                  }
                </Text>
                <Image
                  source={require("../../assets/iconTelephone.png")}
                  style={styles.iconTelephone}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.phoneText}>
                  {
                    dataServiceInfo.dataService[dataServiceInfo.numberService]
                      .telephoneNumber
                  }
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
                  {
                    dataServiceInfo.dataService[dataServiceInfo.numberService]
                      .webAddress
                  }
                </Text>
                <Image
                  source={require("../../assets/iconInet.png")}
                  style={styles.iconConntection}
                />
              </View>
              <View style={[styles.webRow, { flexDirection: "row" }]}>
                <Text style={styles.links}>
                  {
                    dataServiceInfo.dataService[dataServiceInfo.numberService]
                      .nameAdmin
                  }
                </Text>
                <Image
                  source={require("../../assets/iconWhatsApp.png")}
                  style={styles.iconConntection}
                />
              </View>
              <View style={styles.lineSeporatorDown}></View>
            </View>
          </View>
        ) : (
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={580}
          >
            <View>
              {reviewInfo.reviews.map((item, index) => (
                <View key={index}>{item.review}</View>
              ))}
            </View>

            <TextInput
              style={styles.input}
              placeholder="Отзыв"
              value={reviewInfo.textReview}
              placeholderTextColor="white"
              onChangeText={(value: string) => setTextReview(value)}
            />
            <Pressable onPress={setDataReview} style={styles.buttonReview}>
              <Image
                style={styles.buttonReview}
                source={require("./../../assets/iconShippingReview.png")}
              />
            </Pressable>
          </KeyboardAvoidingView>
        )}
      </View>
    </View>
  );
};

export default ServiceInfoForUser;
