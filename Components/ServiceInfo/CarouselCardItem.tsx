import React, { useRef, useState } from "react";
import { Image, View, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useSelector } from "react-redux";
export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

type CarouselState = {
  imageCarousel: {
    imgCarousel: Array<string>;
  };
};
const renderItem = ({ item }: { item: { url: any } }) => {
  return (
    <View
      style={{
        paddingTop: 40,
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
  const imageCarousel = useSelector(
    (state: CarouselState) => state.imageCarousel.imgCarousel
  );
  const [index, setIndex] = useState(0);
  const isCarousel = useRef<Carousel<any>>(null);
  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        ref={isCarousel}
        data={imageCarousel}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={imageCarousel.length}
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
