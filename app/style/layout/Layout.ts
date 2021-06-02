import { StyleSheet } from "react-native";

import { Layout } from "constant";
import { platform } from "utils";
import { colors } from "style";

export default StyleSheet.create({
  containerNoPadding: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerWithPadding: {
    flex: 1,
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
    backgroundColor: colors.white,
  },
  androidNavTitle: {
    paddingLeft: platform.isAndroid ? 6 : 0,
  },
  separator: {
    width: Layout.PADDING_HORIZONTAL,
  },
});
