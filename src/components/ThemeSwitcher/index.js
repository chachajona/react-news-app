import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/themeSlice";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  // useEffect(() => {
  //   const isDarkMode = localStorage.getItem("darkMode") === "true";
  //   setDarkMode(isDarkMode);
  // }, []);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", darkMode);
  //   localStorage.setItem("darkMode", darkMode);
  // }, [darkMode]);

  // useEffect(() => {
  //   window
  //     .matchMedia("(prefers-color-scheme: dark)")
  //     .addEventListener("change", (e) => {
  //       setDarkMode(e.matches);
  //     });
  // });

  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };

  return (
    <button
      onClick={toggleDarkModeHandler}
      className={`inline-flex items-center rounded-lg px-1 py-1 text-sm font-medium ${
        darkMode ? "bg-white" : "bg-gray-800"
      }
      ${
        darkMode ? "text-gray-900" : "text-white"
      } transition-colors duration-200`}
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitcher;
