import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#7892ff",
  primaryBright: "#e66000",
  primaryDark: "#d95b00",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#FFAB2D",
  };
  
  export const brandColors = {
    binance: "#F0B90B",
  };
  
  export const lightColors: Colors = {
    ...baseColors,
    ...brandColors,
    primary: "#ff4e91",
    secondary: "#ff4e91",
    background: "#FAF9FA",
    backgroundDisabled: "#E9EAEB",
    contrast: "#191326",
    invertedContrast: "#FFFFFF",
    input: "#eeeaf4",
    // inputBorder: "#cccccc",
    inputSecondary: "#cccccc",
    tertiary: "#EFF4F5",
    text: "#b64c61",
    textDisabled: "#BDC2C4",
    textSubtle: "#ff0069",
    activeButton: "#397f49",
    borderColor: "#E9EAEB",
    card: "#FFFFFF",
    nav: "#FFFFFF",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #fde6eb 0%, #fff8fa 100%)",
    },
  };
  
  export const darkColors: Colors = {
    ...baseColors,
    ...brandColors,
    secondary: "#e9f1fd",
    background: "#1f2b46",
    backgroundDisabled: "#3c3742",
    contrast: "#FFFFFF",
    invertedContrast: "#0a0e17",
    input: "#483f3b",
    // inputBorder: "#cccccc",
    inputSecondary: "#cccccc",
    primaryDark: "#d95b00",
    tertiary: "#2d2f37",
    text: "#FFFFFF",
    textDisabled: "#666171",
    textSubtle: "#b369ff",
    activeButton: "#397f49",
    borderColor: "#524B63",
    card: "#130119",
    nav: "#204829",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #893e92 0%, #3a0e40 100%)",
    },
  };