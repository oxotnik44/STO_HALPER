import React from "react";
import { View, StyleSheet } from "react-native";

interface OnlineIndicatorProps {
  isOnline: boolean;
}

const OnlineIndicator: React.FC<OnlineIndicatorProps> = ({ isOnline }) => {
  const indicatorColor = isOnline ? "green" : "green";

  return <View style={[styles.indicator, { backgroundColor: indicatorColor }]} />;
};

const styles = StyleSheet.create({
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
    top: 59,
    left: 305,
    color: "green",
  },
});

export default OnlineIndicator;
