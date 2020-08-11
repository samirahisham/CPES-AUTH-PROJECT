import React from "react";
import Route from "./Routes/Route";
import { Provider } from "react-redux";
import store from "./store";
import { checkForExpiredToken } from "./store/actions/AuthActions";

store.dispatch(checkForExpiredToken());
export default function App() {
  return (
    <Provider store={store}>
      <Route />
      {/* <Login /> */}
      {/* <Register /> */}
    </Provider>
  );
}
