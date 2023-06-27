import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import choiseServicesReducer from "./reducers/choiseServicesReducer";
import mainReducer from "./reducers/mainReducer";
import serviceInfoReducer from "./reducers/serviceInfoReducer";
import registrationReducer from "./reducers/registrationReducer/registrationReducer";
import regCarUserReducer from "./reducers/registrationReducer/regCarUserReducer";
import regServiceDataReducer from "./reducers/registrationReducer/regServiceDataReducer";
import assistanceReducer from "./reducers/registrationReducer/choiceAssistanceReducer";
import reviewsServiceReducer from "./reducers/reviewsServiceReducer";
import imageCarousel from "./reducers/imageCarousel";
import serviceInfoShowReducer from "./reducers/registrationReducer/serviceInfoReducer";
let rootreducer = combineReducers({
  authReducer: authReducer,
  choiseServicesReducer: choiseServicesReducer,
  mainReducer: mainReducer,
  serviceInfoReducer: serviceInfoReducer,
  registrationReducer: registrationReducer,
  regCarUserReducer: regCarUserReducer,
  regServiceDataReducer: regServiceDataReducer,
  assistanceReducer: assistanceReducer,
  reviewsServiceReducer: reviewsServiceReducer,
  imageCarousel: imageCarousel,
  serviceInfoShowReducer: serviceInfoShowReducer,
});

export type RootState = ReturnType<typeof rootreducer>;
let store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export default store;
