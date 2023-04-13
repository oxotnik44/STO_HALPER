import React from "react";
import { Image, View, Text, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import * as Animatable from "react-native-animatable";

interface FoundServiceState {
  assistanceReducer: {
    dataAssistance: [
      {
        assistanceService: string;
      }
    ];
  };
}

const FoundService: React.FC = () => {
  const dataService = useSelector(
    (state: FoundServiceState) => state.assistanceReducer
  );

  return (
    <View style={styles.container}>
      {dataService.dataAssistance.map((item, index) => (
        <View
          key={index}
          style={[
            styles.square,
            {
              marginLeft: index % 2 === 0 ? 0 : 10,
              marginTop: 10, // добавляем отступ сверху между рядами
            },
          ]}
        >
          {/* Здесь можете разместить ссылку на картинку */}
          <Image
            source={require("./../../assets/cto_logo.png")}
            style={styles.image}
          />

          <Text style={styles.text}>{item.assistanceService}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // изменяем направление оси на "column"
    flexWrap: "wrap", // добавляем обертку на новую линию
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  square: {
    width: 200, // устанавливаем ширину и высоту 200
    height: 200,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    // стили для картинки
  },
  text: {
    // стили для текста
  },
});

export default FoundService;
