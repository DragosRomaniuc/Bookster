import React, { FC } from "react";
import { Animated, FlatList, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { Text, Block } from "components";
import { sizes } from "style";
import { width } from "style/theme";

const renderText = (id: any) => {
  switch (id) {
    case 0:
      return (
        <Text center bold>
          Unlock your favourite
          <Text primary> books.</Text>
        </Text>
      );
    case 1:
      return (
        <Text center bold>
          Enjoy
          <Text primary> Reading.</Text>
        </Text>
      );
  }
};

const IllustrationSteps = (props: any) => {
  const { scrollX } = props;

  const illustrations = [
    {
      id: 0,
      source: require("../../../../../../assets/images/illustrations/landing1.png"),
    },
    {
      id: 1,
      source: require("../../../../../../assets/images/illustrations/landing2.png"),
    },
  ];

  return (
    <FlatList
      horizontal
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      data={illustrations}
      keyExtractor={(item, index) => `${item.id}`}
      renderItem={({ item }) => (
        <Block>
          <CustomImage
            key={item.id}
            source={item.source}
            resizeMode="contain"
          />
          {renderText(item.id)}
        </Block>
      )}
      onScroll={Animated.event([
        {
          nativeEvent: { contentOffset: { x: scrollX } },
        },
      ])}
    />
  );
};

const CustomImage = styled(Image)`
  flex: 1;
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height / 2};
`;

export default IllustrationSteps;
