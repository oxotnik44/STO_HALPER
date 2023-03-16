import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigate";
import { TextInput, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FoundService from "../FoundServise/FoundService";
import { styles } from "./ChoiseServisesStyles";

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

export default ChoiseServises;
