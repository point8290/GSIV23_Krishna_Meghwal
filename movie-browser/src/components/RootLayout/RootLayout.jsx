import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
function RootLayout() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}

export default RootLayout;
