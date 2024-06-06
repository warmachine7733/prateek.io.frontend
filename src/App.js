import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
// import "antd/dist/antd.css";
import { Geiger } from "react-geiger";
import store from "./store";

const App = () => {
  return (
    <Geiger>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Geiger>
  );
};

export default App;
