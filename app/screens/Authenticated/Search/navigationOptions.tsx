import React from "react";

const navigationOptions = (props: any) => ({
  headerTranslucent: false,
  headerHideShadow: true,
  cardShadowEnabled: false,
  cardOverlayEnabled: false,
  cardOverlay: false,
  borderBottomWidth: 0,
  headerTitle: " ",
  headerStyle: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: { height: 0 },
    shadowRadius: 0,
  },
});

export default navigationOptions;
