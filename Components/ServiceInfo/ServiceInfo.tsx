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
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("./../../assets/logo_service.png")}
            style={styles.imageLogo}
          ></Image>
          <Text style={styles.nameService}>{dataServiceInfo.nameService}</Text>
        </View>
        <View>
          <Text></Text>
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
        <View></View>
      </View>
      <View
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height * 0.15,
        }}
      >
        <Text style={styles.locationText}>
          {dataServiceInfo.locationService}
        </Text>
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
            source={require("../../assets/linkConnection.png")}
            style={styles.linkConnection}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.phoneText}>{dataServiceInfo.phoneService}</Text>
          <Image
            source={require("../../assets/linkConnection.png")}
            style={styles.linkConnection}
          />
        </View>
      </View>
      <View style={styles.lineSeporator}></View>
      <View style={styles.webContainer}>
        <View style={styles.webRow}>
          <Text style={styles.links}>{dataServiceInfo.webService}</Text>
          <Image
            source={require("../../assets/iconInet.png")}
            style={styles.linkConnection}
          />
        </View>
        <View style={styles.webRow}>
          <Text style={styles.links}>{dataServiceInfo.whatsAppService}</Text>
          <Image
            source={require("../../assets/iconWhatsApp.png")}
            style={styles.linkConnection}
          />
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
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: "row",
  },
  imageLogo: {
    width: Dimensions.get("window").width * 0.16,
    height: Dimensions.get("window").height * 0.1,
    margin: Dimensions.get("window").width * 0.01,
  },
  nameService: {
    color: "white",
    top: Dimensions.get("window").height * 0.001,
    left: Dimensions.get("window").width * 0.02,
    fontSize: 25,
  },

  locationText: {
    fontSize: Dimensions.get("window").width * 0.05,
    color: "#fff",
    opacity: 0.7,
    left: Dimensions.get("window").width * 0.07,
    top: Dimensions.get("window").height * -0.01,
  },
  textWorkTime: {
    fontSize: 20,
    color: "white",
    left: Dimensions.get("window").width * 0.1,
    top: Dimensions.get("window").height * 0.028,
  },
  phoneContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.1,
  },
  phoneText: {
    fontSize: 25,
    color: "#9497FF",
    marginTop: Dimensions.get("window").height * 0.012,
    left: Dimensions.get("window").width * 0.1,
  },
  webContainer: {
    padding: Dimensions.get("window").width * 0.04,
  },
  webRow: {
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.02,
  },
  webText: {
    fontSize: Dimensions.get("window").width * 0.03,
    color: "#fff",
    marginRight: Dimensions.get("window").width * 0.02,
  },
  textInfoAndReview: {
    paddingLeft: Dimensions.get("window").width * 0.18,
    color: "white",
    fontSize: 23,
    bottom: Dimensions.get("window").height * 0.02,
  },
  underlinedText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "red",
  },
  textLocationService: {
    fontSize: 20,
    color: "#9497FF",
    paddingRight: 10,
  },
  locationContainer: {
    flexDirection: "row",
    right: Dimensions.get("window").width * -0.55,
  },
  containerWorkTime: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.1,
    marginTop: Dimensions.get("window").height * 0.02,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#FFD83D",
  },
  lineSeporator: {
    width: Dimensions.get("window").width * 0.85,
    height: 1,
    backgroundColor: "#FFD83D",
    top: Dimensions.get("window").height * 0.04,
    left: Dimensions.get("window").width * 0.07,
  },
  linkConnection: {
    left: Dimensions.get("window").width * 0.14,
    top: Dimensions.get("window").height * 0.025,
  },
  links: {
    fontSize: 30,
    color: "#9497FF",
  },
  
});

export default ServiceInfo;
