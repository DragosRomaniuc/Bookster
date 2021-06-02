import { StyleSheet } from "react-native";

import { fonts, colors } from "style";

export default StyleSheet.create({
  view: {
    flex: 1,
    margin: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 300,
    width: 300,
  },
  imgContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textContainer: {
    flex: 1,
  },
  quote: {
    paddingTop: 30,
    color: colors.black,
    fontStyle: "italic",
    fontSize: fonts.regular.fontSize,
  },
  author: {
    paddingTop: 20,
    color: colors.green,
    fontWeight: "bold",
    fontSize: fonts.h3.fontSize,
  },
});
