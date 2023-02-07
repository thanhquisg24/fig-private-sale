import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import Routes from "./routes";
import { appInitAction } from "@store/actions";
import config from "./config";
import { store } from "./store";

store.dispatch(appInitAction());
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={config.basename}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
