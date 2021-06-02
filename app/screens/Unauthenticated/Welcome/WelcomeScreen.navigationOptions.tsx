import React from "react";

import { Text } from "components";
import { colors, ComponentsStyle } from "style";

const navigationOptions = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTintColor: colors.gray10,
  headerBackTitleVisible: false,
  headerTitle: () => <Text h1>Welcome Screen</Text>,
});

export default navigationOptions;
