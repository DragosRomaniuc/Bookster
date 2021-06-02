import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabs from "./BottomTabs";
import DrawerContent from "./Drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Authenticated = () => (
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

export default Authenticated;
