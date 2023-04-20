import React from "react";
import { Image, View, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./UserChoiceOfServicesStyles";

interface UserChoiceOfServicesState {
  serviceInfoReducer: {
    search: string;
  };
}

const UserChoiceOfServices: React.FC = () => {
  const dataUserChoiceOfServices = useSelector(
    (state: UserChoiceOfServicesState) => state.serviceInfoReducer
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/loupe2.png")}
        style={styles.loupe2}
      />
      <Text style={styles.searchText}>Поиск</Text>
      <View>
      </View>
      <View style={styles.footerService} />
    </View>
  );
};

export default UserChoiceOfServices;
