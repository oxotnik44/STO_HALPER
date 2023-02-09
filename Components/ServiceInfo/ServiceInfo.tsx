import React from "react";
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
    whatsappService: string;
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("./../../assets/logo_service.png")}
            style={styles.imageLogo}
          ></Image>
          <Text style ={styles.nameService}>{dataServiceInfo.nameService}</Text>
        </View>
        <View >
          <Text>Инфо</Text>
          <Text>Отзывы</Text>
        </View>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{dataServiceInfo.locationService}</Text>
      </View>
      <View style={styles.worktimeContainer}>
        <Text style={styles.worktimeText}>
          Ежедневно: {dataServiceInfo.begindayService} - {dataServiceInfo.enddayService}
        </Text>
      </View>
      <View style={styles.phoneContainer}>
        <Text style={styles.phoneText}>{dataServiceInfo.phoneService}</Text>
        <Text style={styles.phoneText}>{dataServiceInfo.phoneService}</Text>
      </View>
      <View style={styles.webContainer}>
        <View style={styles.webRow}>
          <Text style={styles.webText}>{dataServiceInfo.webService}</Text>
          <Image></Image>
        </View>
        <View style={styles.webRow}>
          <Text style={styles.webText}>{dataServiceInfo.whatsappService}</Text>
          <Image></Image>
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
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Dimensions.get("window").width * 0.04,
  },
  headerLeft: {
    flexDirection: "row",
  },
  imageLogo: {
    width: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").width * 0.2,
    marginRight: Dimensions.get("window").width * 0.02,
  },
  nameService: {
    color: "white"
  },
  locationContainer: {
    padding: Dimensions.get("window").width * 0.04,
  },
  locationText: {
    fontSize: Dimensions.get("window").width * 0.05,
    color: "#fff",
  },
  worktimeContainer: {
    padding: Dimensions.get("window").width * 0.04,
  },
  worktimeText: {
    fontSize: Dimensions.get("window").width * 0.03,
    color: "#fff",
  },
  phoneContainer: {
    padding: Dimensions.get("window").width * 0.04,
  },
  phoneText: {
    fontSize: Dimensions.get("window").width * 0.03,
    color: "#fff",
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
});

export default ServiceInfo;
