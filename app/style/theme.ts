import { DefaultTheme } from "styled-components/native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    sizes: typeof sizes;
    fonts: typeof fonts;
    weights: typeof weights;
    width: number;
    height: number;
  }
}

export const sizes = {
  // Global sizes
  base: 12,
  font: 14,
  padding: 24,

  // Font sizes
  caption: 10,
  small: 12,
  regular: 14,
  large: 16,
  // H sizes
  h1: 32,
  h2: 22,
  h3: 18,
  // App dimensions
  width,
  height,
};

export const colors = {
  accent: "#F3534A",
  primary: "#0AC4BA",
  primary10: "#B9EDEB",
  primary20: "#DCF6F5",
  secondary: "#2BDA8E",
  tertiary: "#FFE358",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#9DA3B4",
  gray10: "#C5CCD6",
  accentBackground: "rgba(10, 132, 255, 0.1)",
  linkGreen: "#4BB377",
  linkGreen10: "#DCF0E5",
  darkLink: "#111714",
  darkLink70: "#585D5B",
  red: "#ff6666",
  blue: "#3498db",
  green: "#2ecc71",
  pistachioGreen: "#98c379",
  malibu: "#61afef",
  chalky: "#e5c07b",
  softPurple: "#C678DD",
  cadetBlue: "#ABB2BF",
  froly: "#e06c75",
  frespireBlack: "#303234",
};

export const weights = {
  thin: "Inter-Thin",
  light: "Inter-Light",
  medium: "Inter-Medium",
  regular: "Inter-Regular",
  bold: "Inter-Bold",
};

export const fonts = {
  caption: { fontSize: sizes.caption, letterSpacing: 0.4 },
  small: { fontSize: sizes.small, letterSpacing: 1.5 },
  regular: { fontSize: sizes.regular, letterSpacing: 0.2 },
  large: { fontSize: sizes.large, letterSpacing: 0.15 },
  h1: { fontSize: sizes.h1, letterSpacing: 0.15 },
  h2: { fontSize: sizes.h2, letterSpacing: 0 },
  h3: { fontSize: sizes.h3, letterSpacing: 0.15 },
};

export { width, height };

const defaultTheme: DefaultTheme = {
  colors,
  fonts,
  weights,
  sizes,
  width,
  height,
} as const;

export default defaultTheme;
