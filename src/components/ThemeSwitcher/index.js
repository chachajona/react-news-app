import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../store/themeSlice";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const themeValue = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = themeValue === "light" ? "dark" : "light";
    dispatch(changeTheme(newTheme));
    localStorage.theme = newTheme;
  };

  useEffect(() => {
    const themeSystem = window.matchMedia("(prefers-color-scheme: dark)");
    const htmlDoc = document.documentElement;

    const changeSystemDark = (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          htmlDoc.classList.add("dark");
        } else {
          htmlDoc.classList.remove("dark");
        }
      }
    };

    themeSystem.addEventListener("change", changeSystemDark);
    return () => {
      themeSystem.removeEventListener("change", changeSystemDark);
    };
  }, []);

  useEffect(() => {
    // Update the HTML class based on the current theme when the component mounts
    const htmlDoc = document.documentElement;
    if (themeValue === "dark") {
      htmlDoc.classList.add("dark");
    } else {
      htmlDoc.classList.remove("dark");
    }
  }, [themeValue]);

  return (
    <div className="flex gap-5">
      <ToggleButton themeValue={themeValue} onClick={toggleTheme} />
    </div>
  );
};

const ToggleButton = ({ themeValue, onClick }) => {
  return (
    <button
      className={`inline-flex items-center rounded-lg px-1 py-1 text-sm font-medium duration-150
      ${themeValue === "dark" ? "text-gray-500" : "text-white"}
      ${themeValue === "dark" ? "bg-white" : "bg-gray-800"}
      `}
      onClick={onClick}
    >
      {themeValue === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitcher;
