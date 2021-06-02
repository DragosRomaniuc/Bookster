import React, { Component, useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Block, Text } from "components";
import theme from "style";
import { width } from "style/theme";
import baseRequest from "helpers/base-request";

import navigationOptions from "./navigationOptions";
import { Book } from "../Search/components/ListItem";

type Props = {
  navigation?: any;
  route: any;
};

const BookDetails = (props: Props) => {
  const [book, setBook] = useState<Book>(null);

  const getBook = async (id: string) => {
    const { data } = await baseRequest(`/books/${id}`, {
      method: "get",
    });
    return data;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    const { id } = props.route.params;

    getBook(id).then((data) => {
      setBook(data.book);
      console.log("am gasit book", data.book, "asdad-asd-ad-a-ds");
    });
  }, []);

  if (!book) return null;

  return (
    <Block>
      <Text center primary bold h2 style={{ marginVertical: 10 }}>
        {book.title}
      </Text>
      <Block row center flex={0} middle>
        <Text secondary bold medium>
          {book.author}
        </Text>
        <Text>- </Text>
        <Text bold>{book.publisher}</Text>
      </Block>
      <Text light medium center>
        {book.pageCount} pages
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
            <Text>{book.synopsis}</Text>
          </ScrollView>
        </Block>
      </ScrollView>
    </Block>
  );
};

BookDetails.navigationOptions = navigationOptions;

export default BookDetails;
