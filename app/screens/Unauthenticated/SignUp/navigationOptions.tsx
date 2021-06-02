import React from "react";
import { Appbar } from "react-native-paper";

const navigationOptions = () => ({
  headerTransparent: true,
  headerTitle: "",
  headerBackImage: () => <Appbar.BackAction />,
  headerBackTitle: " ",
});

export default navigationOptions;
