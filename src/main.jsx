import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./store";

const root = document.getElementById("root");

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
