import React from "react";
import { StyleSheet } from "react-native";

import { Block, Text } from "components";
import { colors } from "style";

interface Props {
  author: string;
  publisher: string;
  pageCount: number;
}

const Header = ({ author, publisher, pageCount }: Props) => {
  return (
    <Block row center padding={[5, 0, 0, 0]}>
      <Block>
        <Block row center>
          {/* <Title>{item.title}</Title> */}
          {/* <Caption style={[styles.handle, { color: 'black' }]}>Posted by</Caption> */}
          <Text light medium style={[styles.handle, { color: "black" }]}>
            {author}
          </Text>
          <Text>- </Text>
          <Text light medium>
            {publisher}
          </Text>
        </Block>
      </Block>
      <Text caption color={colors.cadetBlue}>
        {pageCount} pages
      </Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  handle: {
    marginRight: 3,
  },
  dot: {
    fontSize: 3,
  },
});

export default Header;
