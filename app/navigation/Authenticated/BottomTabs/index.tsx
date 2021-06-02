import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "./TabBar";
// import FeedStack from "./FeedStack";
import SearchStack from "./SearchStack";

// const Tab = createMaterialBottomTabNavigator();
const Tabs = createBottomTabNavigator();

const BottomTabs = () => (
  <Tabs.Navigator tabBar={TabBar}>
    <Tabs.Screen name={"Search"} component={SearchStack} />
  </Tabs.Navigator>
);

export default BottomTabs;
