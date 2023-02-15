import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FoundService from "../FoundServise/FoundService";
import { Dimensions } from "react-native";

interface ChoiseState {
  choiseServicesReducer: {
    textChoiseService: string;
  };
}

type ChoiseServiceProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

interface FoundServiceState {
  choiseServicesReducer: {
    dataService: [
      {
        nameService: string;
        distanceToService: string;
      }
    ];
  };
}
const ChoiseServises: React.FC<ChoiseServiceProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { textChoiseService } = useSelector(
    (state: ChoiseState) => state.choiseServicesReducer
  );
  const { nameService, distanceToService } = useSelector(
    (state: FoundServiceState) => state.choiseServicesReducer.dataService[0]
  );
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Поиск"
        style={styles.inputSearch}
        placeholderTextColor="black"
      />
      <Image
        source={require("./../../assets/loupe.png")}
        style={styles.image}
      />

      <FoundService />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
  },
  inner: {
    padding: 24,
  },
  inputSearch: {
    backgroundColor: "#AEAEAE",
    borderRadius: 15,
    width: Dimensions.get("window").width*0.9,
    height: Dimensions.get("window").height*0.05,
    alignSelf: "center",
    paddingLeft: 10,
    marginTop: 20,
    placeholderTextColor: "#ff0000",
    top:Dimensions.get("window").height*0.09
  },

  image: {
    width: 24,
    height: 24,
    position: "absolute",
    right: Dimensions.get("window").width*0.09,
    top:Dimensions.get("window").height*0.126
  },
});

export default ChoiseServises;
