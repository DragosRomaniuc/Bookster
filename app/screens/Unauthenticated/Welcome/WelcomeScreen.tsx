import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Animated } from "react-native";

import { Text, Block, Button } from "components";
import { sizes } from "style";
import navigate from "navigation/navigate";
import { width } from "style/theme";

import navigationOptions from "./WelcomeScreen.navigationOptions";
import TermsAndService from "./components/TermsAndService";
import IllustrationSteps from "./components/IllustrationsSteps";

const WelcomeScreen = (props) => {
  const [termsAndServicesModal, toggleTermsAndServicesModal] = useState<
    boolean
  >(false);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const navigator = navigate(props.navigation);
  const stepPosition = Animated.divide(scrollX, width);
  return (
    <Block>
      <Block center bottom flex={0.4}>
        <Text h2 marginTop={sizes.padding / 2} center bold>
          Book
          <Text primary h2 bold>
            ster{" "}
          </Text>
        </Text>
        <Text h1>
          Reading Mode
          <Text h1 primary>
            {" "}
            On.
          </Text>
        </Text>
        <Text h3 gray10 marginTop={sizes.padding / 2}>
          Enjoy the experience.
        </Text>
      </Block>
      <Block center middle>
        <IllustrationSteps scrollX={scrollX} />
      </Block>
      <Block row center middle style={styles.stepsContainer} flex={0}>
        {[0, 1].map((index: any) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
      <Block middle flex={0.5} margin={[0, sizes.padding * 2]}>
        <Button gradient onPress={() => navigator.openSignUp()}>
          <Text center white>
            Get Started
          </Text>
        </Button>
        <Button white onPress={() => navigator.openSignIn()} margin={[20, 0]}>
          <Text center>I already have an account</Text>
        </Button>
        <Button
          style={{ backgroundColor: "transparent" }}
          onPress={() => toggleTermsAndServicesModal(true)}
        >
          <Text center caption gray10>
            Terms of service
          </Text>
        </Button>
      </Block>
      <TermsAndService
        termsAndServicesModal={termsAndServicesModal}
        toggleTermsAndServicesModal={() =>
          toggleTermsAndServicesModal(!termsAndServicesModal)
        }
      />
    </Block>
  );
};

WelcomeScreen.navigationOptions = navigationOptions;

export default WelcomeScreen;

const styles = StyleSheet.create({
  stepsContainer: {
    marginTop: 10,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});
