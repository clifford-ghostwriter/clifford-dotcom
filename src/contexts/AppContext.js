import React, { useContext, useEffect, useReducer, useState } from "react";
import { app_reducer } from "../reducers/AppReducer";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN, TOGGLE_THEME } from "../utils/actions";
import { addToLocalStorage, getFromLocalStorage } from "../utils/localstorage";

const appContext = React.createContext();

const initialAppAstate = {
  isSidebarOpen: false,
  isdarkthemeon: false,
  theme: getFromLocalStorage("theme")
    ? getFromLocalStorage("theme")
    : "dark-theme",
};

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(app_reducer, initialAppAstate);
  const [windowWidth, setWdith] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setWdith(width);
      // console.log(width, windowWidth);
      // console.log(state.isSidebarOpen);
    });
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth >= 1200) closeSidebar();
  }, [windowWidth]);

  useEffect(() => {
    document.documentElement.className = state.theme;
    addToLocalStorage("theme", state.theme);
  }, [state.theme]);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const toggletheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };
  return (
    <appContext.Provider
      value={{ ...state, openSidebar, closeSidebar, toggletheme }}>
      {children}
    </appContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(appContext);
};
