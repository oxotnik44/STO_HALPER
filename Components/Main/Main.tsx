import React from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../../redux/reducers/mainReducer";

interface MainState {
  mainReducer: {
    text: string;
  };
}

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const text = useSelector((state: MainState) => state.mainReducer);
  return (
    <View>
      <TextInput
        placeholder="Text"
        onChangeText={(value: string) => dispatch(setText(value))}
      />
      <Text>{text.text}</Text>
    </View>
  );
};

export default Main;
