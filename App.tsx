import React from "react";
import Navigate from "./Navigate";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigate/> 
    </Provider>
  );
};

export default App;
