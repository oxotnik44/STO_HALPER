import { Reducer } from "redux";

const SET_REVIEW_USER = "SET_REVIEW_USER";
const SET_REVIEW = "SET_REVIEW";
const RESET_REVIEWS = "RESET_REVIEWS";
const RESET_REVIEW_USER = "RESET_REVIEW_USER";
interface IReviewInfo {
  review: string;
  userName: string;
}

interface IState {
  reviews: IReviewInfo[];
  nameUser: string;
  textReview: string;
}

export const initialServiceState: IState = {
  reviews: [],
  nameUser: "",
  textReview: "",
};
const reviewsServiceReducer: Reducer<IState> = (
  state = initialServiceState,
  action
) => {
  switch (action.type) {
    case SET_REVIEW_USER:
      return {
        ...state,
        textReview: action.textReview,
      };
    case RESET_REVIEW_USER:
      return {
        ...state,
        textReview: "",
      };
    case SET_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, ...action.reviewsData],
      };

    case RESET_REVIEWS:
      return {
        ...state,
        reviews: [],
      };
    default:
      return state;
  }
};

export const setReviewUser = (textReview: string) => ({
  type: SET_REVIEW_USER,
  textReview: textReview,
});

export const setReview = (data: IReviewInfo[]) => ({
  type: SET_REVIEW,
  reviewsData: data,
});

export const resetReviews = () => ({
  type: RESET_REVIEWS,
});

export const resetReviewUser = () => ({
  type: RESET_REVIEW_USER,
});
export default reviewsServiceReducer;
