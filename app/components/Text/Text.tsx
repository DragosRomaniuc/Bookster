import React, { FC } from "react";
import styled, { css } from "styled-components/native";
import { View } from "react-native";

import { colors, fonts, weights } from "style";
import { Block } from "components";
const createFontStyle = (
  fontFamily: string,
  fontSize: number,
  letterSpacing: number,
  color = colors.frespireBlack
) => css`
  font-family: ${fontFamily};
  font-size: ${fontSize}px;
  letter-spacing: ${letterSpacing}px;
  color: ${color};
`;

const createFontFromProps = {
  caption: createFontStyle(
    weights.light,
    fonts.caption.fontSize,
    fonts.caption.letterSpacing,
    colors.gray10
  ),
  small: createFontStyle(
    weights.light,
    fonts.small.fontSize,
    fonts.small.letterSpacing
  ),
  regular: createFontStyle(
    weights.medium,
    fonts.regular.fontSize,
    fonts.regular.letterSpacing
  ),
  large: createFontStyle(
    weights.medium,
    fonts.large.fontSize,
    fonts.large.letterSpacing
  ),
};

type Partial<T> = {
  [P in keyof T]?: boolean;
};

type Colors = Partial<typeof colors>;
type Weights = Partial<typeof weights>;

interface CustomTextProps extends Colors, Weights {
  caption?: boolean;
  small?: boolean;
  regular?: boolean;
  large?: boolean;
  center?: boolean;
  thin?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  margin?: number | number[];
  marginTop?: number | number[];
  marginRight?: number | number[];
  marginBottom?: number | number[];
  marginLeft?: number | number[];
  marginVertical?: number | number[];
  marginHorizontal?: number | number[];
  padding?: number | number[];
  paddingTop?: number | number[];
  paddingRight?: number | number[];
  paddingBottom?: number | number[];
  paddingLeft?: number | number[];
  paddingVertical?: number | number[];
  paddingHorizontal?: number | number[];
}

const CustomText: FC<CustomTextProps> = styled.Text<CustomTextProps>`
  ${() => createFontFromProps["regular"]}
  ${({ caption }) => caption && createFontFromProps["caption"]}
  ${({ small }) => small && createFontFromProps["small"]}
  ${({ regular }) => regular && createFontFromProps["regular"]}
  ${({ large }) => large && createFontFromProps["large"]}
  text-align: ${({ center }) => (center ? "center" : "left")};
  ${({ theme, ...rest }) =>
    (rest.thin && `font-family: ${weights.thin}`) ||
    (rest.light && `font-family: ${weights.light}`) ||
    (rest.medium && `font-family: ${weights.medium}`) ||
    (rest.regular && `font-family: ${weights.regular}`) ||
    (rest.bold && `font-family: ${weights.bold}`)}
  color: ${({ theme, ...rest }) =>
    (rest.accent && theme.colors.accent) ||
    (rest.primary && theme.colors.primary) ||
    (rest.primary10 && theme.colors.primary10) ||
    (rest.primary20 && theme.colors.primary20) ||
    (rest.secondary && theme.colors.secondary) ||
    (rest.tertiary && theme.colors.tertiary) ||
    (rest.black && theme.colors.black) ||
    (rest.white && theme.colors.white) ||
    (rest.gray && theme.colors.gray) ||
    (rest.gray10 && theme.colors.gray10) ||
    (rest.accentBackground && theme.colors.accentBackground) ||
    (rest.linkGreen && theme.colors.linkGreen) ||
    (rest.linkGreen10 && theme.colors.linkGreen10) ||
    (rest.darkLink && theme.colors.darkLink) ||
    (rest.darkLink10 && theme.colors.darkLink10) ||
    (rest.red && theme.colors.red) ||
    (rest.blue && theme.colors.blue) ||
    (rest.green && theme.colors.green) ||
    (rest.pistachioGreen && theme.colors.pistachioGreen) ||
    (rest.malibu && theme.colors.malibu) ||
    (rest.chalky && theme.colors.chalky) ||
    (rest.softPurple && theme.colors.softPurple) ||
    (rest.froly && theme.colors.froly) ||
    theme.colors.frespireBlack};
  ${({ theme, ...rest }) =>
    (rest.h1 && `font-size: ${theme.sizes.h1}`) ||
    (rest.h2 && `font-size: ${theme.sizes.h2}`) ||
    (rest.h3 && `font-size: ${theme.sizes.h3}`)}
`;

const Text: FC<CustomTextProps> = ({ children, ...rest }) => {
  return (
    // <Block
    //   flex={0}
    //   margin={rest.margin || []}
    //   marginTop={rest.marginTop || []}
    //   marginRight={rest.marginRight || []}
    //   marginBottom={rest.marginBottom || []}
    //   marginLeft={rest.marginLeft || []}
    //   marginVertical={rest.marginVertical || []}
    //   marginHorizontal={rest.marginHorizontal || []}
    //   padding={rest.padding || []}
    //   paddingTop={rest.paddingTop || []}
    //   paddingRight={rest.paddingRight || []}
    //   paddingBottom={rest.paddingBottom || []}
    //   paddingLeft={rest.paddingLeft || []}
    //   paddingVertical={rest.paddingVertical || []}
    //   paddingHorizontal={rest.paddingHorizontal || []}
    // >
    <CustomText {...rest}>{children}</CustomText>
    // {/* </Block> */}
  );
};

export default Text;
