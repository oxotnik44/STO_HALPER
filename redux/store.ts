import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import choiseServicesReducer from "./reducers/choiseServicesReducer";
import mainReducer from "./reducers/mainReducer";

let rootreducer = combineReducers({
    authReducer: authReducer,
    choiseServicesReducer: choiseServicesReducer,
    mainReducer: mainReducer,
    
})

export type RootState = ReturnType<typeof rootreducer>;
let store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export default store;