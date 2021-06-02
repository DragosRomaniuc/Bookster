import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignUp from "../../screens/Unauthenticated/SignUp";
import WelcomeScreen from "../../screens/Unauthenticated/Welcome";
import SignIn from "../../screens/Unauthenticated/SignIn";

export type UnauthenticatedStackParamList = {
  WELCOME: { id: any };
  SIGNUP: undefined;
  SIGNIN: undefined;
  FORGOT_PASSWORD: undefined;
};

const Stack = createStackNavigator<UnauthenticatedStackParamList>();

const Unauthenticated = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name={"WELCOME"}
      component={WelcomeScreen}
      options={WelcomeScreen.navigationOptions}
    />
    <Stack.Screen
      name={"SIGNUP"}
      component={SignUp}
      options={SignUp.navigationOptions}
    />
    <Stack.Screen
      name={"SIGNIN"}
      component={SignIn}
      options={SignIn.navigationOptions}
    />
  </Stack.Navigator>
);

export default Unauthenticated;
