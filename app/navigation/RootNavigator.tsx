import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { navigationRef } from "helpers/NavigationHelper";
import { RootState } from "redux/rootReducer";
import { getItem, StorageKeys } from "utils/storage";

import Unauthenticated from "./Unauthenticated";
import Authenticated from "./Authenticated";
const Stack = createStackNavigator();

const RootNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  console.log("din root navigator", isLoggedIn);
  console.log(isLoggedIn);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer ref={navigationRef}>
          {isLoggedIn ? (
            <Stack.Navigator headerMode="none">
              <Stack.Screen name={"AUTHENTICATED"} component={Authenticated} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator headerMode="none">
              <Stack.Screen
                name={"UNAUTHENTICATED"}
                component={Unauthenticated}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RootNavigator;
