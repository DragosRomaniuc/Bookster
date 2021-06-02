import React, { Component, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Block, Text } from "components";
import theme from "style";
import { width } from "style/theme";
import baseRequest from "helpers/base-request";

import navigationOptions from "./navigationOptions";
import List from "./components/List";

type Props = {
  navigation?: any;
  route: any;
};

const SearchList = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [books, setBooks] = useState<[]>([]);

  const getBooks = async () => {
    const { data } = await baseRequest("/books", {
      method: "get",
      params: {
        q: search,
      },
    });
    return data;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    getBooks().then((data) => {
      if (!search) setBooks([]);
      else setBooks(data.books);
    });
  }, [search]);

  React.useEffect(() => {
    console.log("schimbat");
  }, [books]);

  React.useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.parent}
          onPress={() => console.log("pressed")}
        >
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              setSearch(text);
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Block>
      <Text center primary bold h2 style={{ marginVertical: 10 }}>
        Found {books.length} Books
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: theme.sizes.base * 2.3, padding: 20 }}
      >
        <Block
          flex={0}
          space="between"
          style={{ flexWrap: "wrap", flexDirection: "row" }}
        >
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1, flexWrap: "wrap" }}
          >
            <List data={books || []} />
          </ScrollView>
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingLeft: 5,
    paddingRight: 25,
    // marginLeft: 25,
    zIndex: 20,
    backgroundColor: "white",
    marginRight: 25,
    borderColor: "gray",
    borderRadius: 5,
    // borderWidth: 1,
    flexDirection: "row",
    width: width / 1.2,
    justifyContent: "space-between",
  },
  textInput: {
    height: 30,
    width: "90%",
  },
});

SearchList.navigationOptions = navigationOptions;

export default SearchList;
