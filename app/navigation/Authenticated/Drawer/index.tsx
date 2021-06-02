import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, List, Subheading, Divider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import * as Storage from "utils/storage";
import { Block, Text } from "components";
import { RootState } from "redux/rootReducer";
import { StorageKeys } from "utils/storage";
import { auth } from "ducks";

const CustomDrawer: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <Block safe>
      <Text h1 center bold style={{ marginTop: 20 }}>
        Book
        <Text h1 primary>
          {" "}
          ster.
        </Text>
      </Text>
      <Block flex={1} center middle>
        <TouchableOpacity>
          <Avatar.Icon
            icon="account-plus-outline"
            style={{ backgroundColor: "#ebeded" }}
          >
            {" "}
          </Avatar.Icon>
        </TouchableOpacity>
        <Subheading>{user?.username || ""}</Subheading>
        <Divider />
      </Block>

      <Block>
        <TouchableOpacity>
          <List.Item
            title="My profile"
            left={() => <List.Icon icon="account" />}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <List.Item
            title="Saved books"
            left={() => <List.Icon icon="heart" />}
          />
        </TouchableOpacity>
      </Block>

      <Block bottom middle>
        <TouchableOpacity
          onPress={async () => {
            await Storage.removeItem(StorageKeys.TOKEN);
            dispatch(auth.actions.loginError());
          }}
        >
          <List.Item title="Logout" left={() => <List.Icon icon="logout" />} />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default CustomDrawer;
