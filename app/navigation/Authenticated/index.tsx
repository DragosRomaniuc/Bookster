import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import * as Storage from "utils/storage";
import { StorageKeys } from "utils/storage";

import BottomTabs from "./BottomTabs";
import DrawerContent from "./Drawer";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Authenticated = () => {
  // const token = await Storage.getItem(StorageKeys.TOKEN);

  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <DrawerContent navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Root">
        {({ navigation }) => (
          <Stack.Navigator>
            <Stack.Screen
              name="APP_BOTTOM_TABS"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default Authenticated;
