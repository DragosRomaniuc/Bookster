import React, { useRef } from "react";
import { Alert, Animated, StyleSheet } from "react-native";

import { Block } from "components";

import ListItem, { Book } from "./ListItem";

const List = (props: any) => {
  const _keyExtractor = (item: Book) => item.id.toString();

  const _renderItem = ({ item }: { item: Book }) => {
    return <ListItem item={item} />;
  };

  return (
    <Block animated style={styles.container}>
      <Animated.FlatList
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        initialScrollIndex={0}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        {...props}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(239, 239, 244)",
    flex: 1,
  },
});

export default List;
