import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as Sentry from "sentry-expo";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components";

import theme from "style";

import RootNavigator from "./app/navigation/RootNavigator";
import store from "./app/redux/store";
import SplashScreen from "./app/screens/Splash";

if (!__DEV__) {
  const secret =
    require("./secret.ts").default || require("./secret.example.ts").default;

  /* TODO: change secret.dsn to Constants.manifest.extra.sentryPublicDsn */
  Sentry.init({
    dsn: secret.dsn,
    enableInExpoDevelopment: false,
    debug: true,
  });

  /* TODO: set Constants.manifest.revisionId with expo */
  Sentry.setRelease(Constants.manifest.revisionId);
}

const App: React.FC<{}> = () => {
  enableScreens();

  const [ready, setReady] = useState(false);
  const [splashAnimation, setSplashAnimation] = useState(__DEV__);

  useEffect(() => {
    Promise.all([
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialCommunityIcons.font,
        "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
        "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
      }),
    ])
      .then(() => {
        setReady(true);
      })
      .catch((error) => Sentry.captureException(error));
  }, []);

  const screenAnimationComplete = useCallback((animation) => {
    setSplashAnimation(animation);
  }, []);

  let body = <SplashScreen screenAnimationComplete={screenAnimationComplete} />;

  if (ready && splashAnimation) {
    body = (
      <Provider store={store}>
        <PaperProvider>
          <ThemeProvider theme={theme}>
            <RootNavigator />
          </ThemeProvider>
        </PaperProvider>
      </Provider>
    );
  } else if (__DEV__) {
    body = <View />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      {body}
    </SafeAreaProvider>
  );
};

export default App;
