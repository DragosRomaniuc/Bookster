import React, { Component, memo } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Caption } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Block, Text } from "components";
import theme, { colors } from "style";
import { width } from "style/theme";
import navigate from "navigation/navigate";

import Content from "./Content";
import Header from "./Header";

export interface Book {
  author: string;
  coverImageUrl: string;
  id: string;
  pageCount: number;
  publisher: string;
  synopsis: string;
  title: string;
}

interface Props {
  item: Book;
}
const ListItem: React.FC<Props> = (props: Props) => {
  const {
    id,
    author,
    coverImageUrl,
    pageCount,
    publisher,
    synopsis,
    title,
  } = props.item;
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  return (
    <TouchableOpacity
      key={id}
      onPress={() =>
        navigator.openBook({
          id,
        })
      }
    >
      {/*<Divider />*/}
      <Block padding={[0, 0]} margin={[5, 0]} style={styles.container}>
        <Block margin={[0, 10]} padding={[10, 10]}>
          <Header author={author} publisher={publisher} pageCount={pageCount} />
          <Content title={title} />
        </Block>

        <Image
          source={{
            uri: coverImageUrl,
          }}
          style={{ height: 300 }}
        />
        <Block>
          <Block row space="between" padding={[10, 15]}>
            <TouchableOpacity
              onPress={() =>
                navigator.openBook({
                  id,
                })
              }
            >
              <View style={styles.iconContainer}>
                <Caption style={styles.iconDescription}>{synopsis}</Caption>
              </View>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    borderRadius: 20,
    width: "100%",
    height: 150,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconDescription: {
    marginLeft: 2,
    lineHeight: 12,
  },
});

export default ListItem;
