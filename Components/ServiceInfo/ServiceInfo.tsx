import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions } from "react-native";
import Carousel from "./CarouselCardItem";
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

type ChoiseServiceProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const ServiceInfo: React.FC<ChoiseServiceProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.serviceInfoReducer
  );
  const [selected, setSelected] = useState("info");
  return (
    <View style={styles.container}>
      <View
        style={{
          top: Dimensions.get("window").height * 0.04,
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
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height * 0.12,
            top: Dimensions.get("window").height * 0.01,
          }}
        >
          <Text style={styles.locationText}>Бориса Богаткова, 80</Text>
          <Text style={styles.locationText}>630008, Новосибирск, Золотая</Text>
          <Text style={styles.locationText}>Нива м-н</Text>
          <Text style={styles.locationText}>1 этаж</Text>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.textLocationService}>Найти в 2ГИС</Text>
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
        <View style={styles.lineSeporator}></View>
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
          <Carousel/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
  },

  header: {
    padding: Dimensions.get("window").width * 0.04,
    height: Dimensions.get("window").height * 0.185,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: Dimensions.get("window").height * 0.015,
  },
  imageLogo: {
    width: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").height * 0.12,
  },
  nameService: {
    color: "white",
    top: Dimensions.get("window").height * 0.001,
    left: Dimensions.get("window").width * 0.03,
    fontSize: 25,
  },
  textInfoAndReview: {
    paddingLeft: Dimensions.get("window").width * 0.18,
    color: "white",
    fontSize: 23,
    bottom: Dimensions.get("window").height * 0.01,
  },
  underlinedText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "red",
  },

  locationText: {
    fontSize: Dimensions.get("window").width * 0.05,
    color: "#fff",
    opacity: 0.7,
    left: Dimensions.get("window").width * 0.07,
    top: Dimensions.get("window").height * -0.01,
  },
  textLocationService: {
    fontSize: 20,
    color: "#9497FF",
    marginRight: Dimensions.get("window").width * 0.02,
  },
  locationContainer: {
    flexDirection: "row",
    right: Dimensions.get("window").width * -0.55,
  },

  containerWorkTime: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.08,
    marginTop: Dimensions.get("window").height * 0.02,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#FFD83D",
  },
  textWorkTime: {
    fontSize: 20,
    color: "white",
    left: Dimensions.get("window").width * 0.1,
    top: Dimensions.get("window").height * 0.018,
  },

  phoneContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.08,
  },
  phoneText: {
    fontSize: 25,
    color: "#9497FF",
    marginTop: Dimensions.get("window").height * 0.012,
    left: Dimensions.get("window").width * 0.1,
  },
  iconTelephone: {
    left: Dimensions.get("window").width * 0.14,
    top: Dimensions.get("window").height * 0.025,
  },

  lineSeporator: {
    width: Dimensions.get("window").width * 0.85,
    height: 1,
    backgroundColor: "#FFD83D",
    top: Dimensions.get("window").height * 0.05,
    left: Dimensions.get("window").width * 0.07,
  },

  links: {
    fontSize: 30,
    color: "#9497FF",
  },
  iconConntection: {
    top: Dimensions.get("window").height * 0.012,
    left: Dimensions.get("window").width * 0.03,
  },

  webContainer: {
    marginTop: Dimensions.get("window").height * 0.02,
    padding: Dimensions.get("window").width * 0.04,
    top: Dimensions.get("window").height * 0.01,
  },
  webRow: {
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.01,
    left: Dimensions.get("window").width * 0.06,
  },
});

export default ServiceInfo;
