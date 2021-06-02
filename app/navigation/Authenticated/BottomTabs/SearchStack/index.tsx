import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BookDetails from "../../../../screens/Authenticated/BookDetails/BookDetails";
import SearchList from "../../../../screens/Authenticated/Search/SearchList";

export type SearchStackParamList = {
  SEARCH_DETAILS_SCREEN: undefined;
  SEARCH_LIST_SCREEN: undefined;
  BOOK_DETAILS: undefined;
};

const Stack = createStackNavigator<SearchStackParamList>();
const SearchStack = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="SEARCH_LIST_SCREEN"
        component={SearchList}
        options={SearchList.navigationOptions}
      />
      <Stack.Screen
        name="BOOK_DETAILS"
        component={BookDetails}
        options={BookDetails.navigationOptions}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
