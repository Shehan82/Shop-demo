import { DefaultTheme } from "@react-navigation/native";

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "green",
  },
};

export default NavigationTheme;
