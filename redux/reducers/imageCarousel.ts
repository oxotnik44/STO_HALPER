import { Reducer } from "redux";

interface IImageInfo {
  imgCarousel: Array<{ url: string }> | null;
}

export const initialServiceState: IImageInfo = {
  imgCarousel: [
    {
      url: "https://p1.zoon.ru/preview/3jKHwe9jJNuKbHitHpxdzA/2256x1500x75/1/7/a/original_557888c640c08881048b6669_58370cbcd9d57.jpg",
    },
    {
      url: "https://p1.zoon.ru/preview/3jKHwe9jJNuKbHitHpxdzA/2256x1500x75/1/7/a/original_557888c640c08881048b6669_58370cbcd9d57.jpg",
    },
    {
      url: "https://p1.zoon.ru/preview/3jKHwe9jJNuKbHitHpxdzA/2256x1500x75/1/7/a/original_557888c640c08881048b6669_58370cbcd9d57.jpg",
    },
  ],
};

const imageCarousel: Reducer<IImageInfo> = (
  state = initialServiceState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default imageCarousel;
