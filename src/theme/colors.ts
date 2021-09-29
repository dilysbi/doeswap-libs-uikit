import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#0B509A", // 1FC7D4
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFFFF",
  backgroundDisabled: "#CDECF8",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#CDECF8",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#0B509A",
  textDisabled: "#BDC2C4",
  textSubtle: "#0B509A",
  borderColor: "#E9EAEB",
  card: "#FFFFFF", // bg sidebar, header-bar
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
