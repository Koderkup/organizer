import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./redux/rootReducer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
function saveToLocalStorage(state) {
  try {
    const stringifyState = JSON.stringify(state);
    localStorage.setItem("State", stringifyState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const stringifyState = localStorage.getItem("State");
    if (stringifyState === null) return undefined;
    return JSON.parse(stringifyState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
reportWebVitals();
