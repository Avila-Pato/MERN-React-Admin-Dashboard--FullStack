import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state/index.js";
import { Provider } from "react-redux";

//ultimas configuraucones
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./state/api";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);
// terminadno las configuraciones


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
