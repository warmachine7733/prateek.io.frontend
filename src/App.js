import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
// import "antd/dist/antd.css";
import store from "./store";

const App = () => {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  );
};

export default App;
