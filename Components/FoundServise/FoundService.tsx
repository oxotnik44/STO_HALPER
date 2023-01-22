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
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setToggleExtended,
  setTextChoiseService,
} from "../../redux/reducers/choiseServicesReducer";
import { useState } from "react";

interface FoundServiceState {
  choiseServicesReducer: {
    dataService: [
      {
        nameService: string;
        distanceToService: string;
        expanded: boolean;
      }
    ];
  };
}

const FoundService: React.FC = () => {
  
  const { dataService } = useSelector(
    (state: FoundServiceState) => state.choiseServicesReducer
  );

  return (
    <ScrollView>
      <>
        {dataService.map((item, index) => (
          <View style={styles.container} key={index}>
            <Text style={styles.nameService}>{item.nameService}</Text>

            <Text style={styles.distanceToService}>
              Растояние: {item.distanceToService}км
            </Text>
            <Image
              source={require("./../../assets/arrow.png")}
              style={{
                height: 30,
                width: 30,
                position: "absolute",
                right: 10,
                top: 35,
              }}
            />
          </View>
        ))}
      </>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 100,
    backgroundColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 25,
  },
  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameService: {
    fontSize: 20,
    margin: 10,
  },
  distanceToService: {
    fontSize: 20,
    marginLeft: 10,
    opacity: 0.6,
  },
});

export default FoundService;
