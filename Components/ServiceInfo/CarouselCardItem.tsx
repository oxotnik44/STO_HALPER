import React, { useRef, useState } from "react";
import { Image, View, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useSelector } from "react-redux";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

type CarouselState = {
  serviceInfoReducer: {
    imgCarousel: string|null;
  };
};

const renderItem = ({ item }: { item: { url: string } }) => {
  return (
    <View
      style={{
        paddingTop: 60,
        alignItems: "center",
        marginRight: 20,
      }}
    >
      <Image
        source={{ uri: item.url }}
        style={{ width: 400, height: 160, marginLeft: 20 }}
      />
    </View>
  );
};

const CarouselCardItem: React.FC = () => {
  const imgCarousel = useSelector(
    (state: CarouselState) => state.serviceInfoReducer.imgCarousel
  );
  const [index, setIndex] = useState(0);
  const isCarousel = useRef<Carousel<any>>(null);
  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        ref={isCarousel}
        data={imgCarousel}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={imgCarousel.length}
        activeDotIndex={index}
        containerStyle={{ paddingVertical: 5 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default CarouselCardItem;
