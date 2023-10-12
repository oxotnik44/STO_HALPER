import React, { FC, useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ServiceInfoStyles";
import { setReviewUser } from "../../redux/reducers/reviewsServiceReducer";
import { addReview } from "../../api/apiService";

interface ServiceInfoState {
  loginReducer: {
    numberService: number;
    isAdmin: boolean;
    dataServiceForAdmin: any;
    dataServiceForUser: any[];
  };
}

interface ReviewInfo {
  reviewsServiceReducer: {
    textReview: string;
    reviews: [{ review: string; userName: string }];
  };
}

interface UserInfo {
  authReducer: {
    login: string;
  };
}

const Reviews: FC = () => {
  const dataServiceInfo = useSelector(
    (state: ServiceInfoState) => state.loginReducer
  );
  const reviewInfo = useSelector(
    (state: ReviewInfo) => state.reviewsServiceReducer
  );
  const { login } = useSelector((state: UserInfo) => state.authReducer);

  const dispatch = useDispatch();

  const setDataReview = () => {
    if (reviewInfo.textReview) {
      addReview(
        reviewInfo.textReview,
        login,
        dataServiceInfo.dataServiceForUser[dataServiceInfo.numberService]
          .nameService,
        dispatch
      );
    } else {
      Alert.alert("Введите сообщение");
    }
  };

  const handleReviewSubmit = () => {
    setDataReview();
  };

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={75}>
      <ScrollView style={styles.containerReview}>
        {reviewInfo.reviews.map((item, index) =>
          reviewInfo.reviews.length != null ? (
            <View key={index} style={styles.review}>
              <Image
                source={require("./../../assets/imageUser.png")}
                style={styles.imageUser}
              />
              <View>
                <Text style={styles.textUser}>{item.userName}</Text>
                <Text style={styles.textReview}>{item.review}</Text>
              </View>
            </View>
          ) : (
            <Text>Отзывов нет</Text>
          )
        )}
      </ScrollView>
      {dataServiceInfo.isAdmin === false && (
        <View style={styles.containerUserReview}>
          <TextInput
            style={styles.input}
            placeholder="Отзыв"
            placeholderTextColor="white"
            value={reviewInfo.textReview}
            onChangeText={(value: string) => dispatch(setReviewUser(value))}
            onSubmitEditing={handleReviewSubmit} // Добавлен обработчик для события onSubmitEditing
          />
          <Pressable onPress={setDataReview} style={styles.buttonReview}>
            <Image
              style={styles.buttonReview}
              source={require("./../../assets/iconShippingReview.png")}
            />
          </Pressable>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default Reviews;
