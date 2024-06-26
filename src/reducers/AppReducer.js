import { SIDEBAR_OPEN, SIDEBAR_CLOSE, TOGGLE_THEME } from "../utils/actions";

export const app_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === TOGGLE_THEME) {
    const { isdarkthemeon, theme } = state;
    const newtheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    return { ...state, isdarkthemeon: !isdarkthemeon, theme: newtheme };
  }

  // throw new Error(`No matching "${action.type}" - action type`);
};
