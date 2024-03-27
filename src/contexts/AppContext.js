import React, { useContext, useReducer } from "react";
import { app_reducer } from "../reducers/AppReducer";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../utils/actions";

const appContext = React.createContext();

const initialAppAstate = { isSidebarOpen: false };

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(app_reducer, initialAppAstate);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  return (
    <appContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </appContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(appContext);
};
