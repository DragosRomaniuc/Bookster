import React, { useEffect, useMemo } from "react";
import { Animated, View, Image } from "react-native";

import styles from "./SplashScreen.styles";

interface Props {
  screenAnimationComplete: (boolean) => void;
}

const SplashScreen: React.FC<Props> = ({ screenAnimationComplete }) => {
  const fadeAnimQuote = useMemo(() => new Animated.Value(0), []);
  const fadeAnimAuthor = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(fadeAnimQuote, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(fadeAnimAuthor, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }).start(({ finished }) => {
        screenAnimationComplete(finished);
      });
    });
  }, [fadeAnimQuote, fadeAnimAuthor, screenAnimationComplete]);

  return (
    <View style={styles.view}>
      <View style={styles.imgContainer}>
        <Image
          resizeMode={"contain"}
          source={require("../../../assets/images/illustrations/landing1.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.textContainer}></View>
    </View>
  );
};

export default SplashScreen;
