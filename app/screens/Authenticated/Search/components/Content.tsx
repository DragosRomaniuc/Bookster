import React from "react";

import { Block, Text } from "components";
interface Props {
  title: string;
}

const Content = ({ title }: Props) => {
  return (
    <Block>
      <Block margin={[0, 0]}>
        <Text medium size={15}>
          {title}
        </Text>
      </Block>
      <Block margin={[0, 0]}>
        <Text light style={{ color: "gray" }}>
          {/* asd */}
        </Text>
      </Block>
    </Block>
  );
};

export default Content;
