import React from "react";
import menu from "../api/menu.json";

export default React.createContext({
    page: menu,
    setIsDarkMode: () => {},
});