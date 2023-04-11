import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

interface OnlineIndicatorProps {
    initialMainState: {
      expandedService: boolean;
    };
  }
  
  const OnlineIndicator: React.FC<OnlineIndicatorProps> = () => {
  const data = useSelector((state:OnlineIndicatorProps)=> state.initialMainState)
    return (
      <View style={[styles.indicator, data.expandedService?{ backgroundColor: "green" }:{backgroundColor:"red"}]} />
    );
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
