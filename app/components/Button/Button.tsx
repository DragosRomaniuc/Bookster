import React, { ComponentProps, FC } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Text } from "components";
import { getSpacing, parseSpacing, rgba } from "utils/ui";
import theme, { sizes, colors } from "style";

interface Props
  extends ComponentProps<typeof TouchableHighlight>,
    ComponentProps<typeof TouchableNativeFeedback>,
    ComponentProps<typeof TouchableOpacity> {
  readonly startColor?: string;
  readonly endColor?: string;
  readonly start?: { x: number; y: number };
  readonly locations?: [number, number];
  readonly end?: { x: number; y: number };
  readonly opacity?: number;
  readonly outlined?: boolean;
  readonly animated?: boolean;
  readonly safe?: boolean;
  readonly headerMargin?: number;
  readonly flex?: number | boolean;
  readonly height?: number | boolean;
  readonly transparent?: number | boolean;
  readonly gradient?: boolean;
  readonly label?: string;

  readonly margin?: number | number[];
  readonly marginTop?: number | number[];
  readonly marginRight?: number | number[];
  readonly marginBottom?: number | number[];
  readonly marginLeft?: number | number[];
  readonly marginVertical?: number | number[];
  readonly marginHorizontal?: number | number[];
  readonly padding?: number | number[];
  readonly paddingTop?: number | number[];
  readonly paddingRight?: number | number[];
  readonly paddingBottom?: number | number[];
  readonly paddingLeft?: number | number[];
  readonly paddingVertical?: number | number[];
  readonly paddingHorizontal?: number | number[];

  readonly highlight?: boolean;
  readonly nativeFeedback?: boolean;
  readonly withoutFeedback?: boolean;
  readonly color?: string;
  readonly primary?: boolean;
  readonly secondary?: boolean;
  readonly tertiary?: boolean;
  readonly black?: boolean;
  readonly white?: boolean;
  readonly gray?: boolean;
  readonly error?: boolean;
  readonly warning?: boolean;
  readonly success?: boolean;
  readonly info?: boolean;
}

const defaultProps: Props = {
  startColor: theme.colors.primary,
  endColor: theme.colors.secondary,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  color: null,
  disabled: false,
  opacity: 0.8,
  outlined: false,
  margin: null,
  padding: null,
  flex: 0,
  height: false,
  transparent: false,
  primary: false,
  secondary: false,
  tertiary: false,
  black: false,
  white: false,
  gray: false,
  error: false,
  warning: false,
  success: false,
  info: false,
  style: {},
  label: "",
};

const Button: FC<Props> = (props) => {
  const {
    //   style,
    //   opacity,
    gradient,
    // color,
    startColor,
    endColor,
    end,
    start,
    locations,
    // shadow,
    //   children,
    //   ...props
  } = props;

  const getSpacings = (type: any) => {
    const {
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginVertical,
      marginHorizontal,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingVertical,
      paddingHorizontal,
    } = props;

    const { sizes } = theme;

    if (type === "margin") {
      return [
        margin && getSpacing(type, margin, sizes.base),
        marginTop && parseSpacing("marginTop", marginTop, sizes.base),
        marginRight && parseSpacing("marginRight", marginRight, sizes.base),
        marginBottom && parseSpacing("marginBottom", marginBottom, sizes.base),
        marginLeft && parseSpacing("marginLeft", marginLeft, sizes.base),
        marginVertical &&
          parseSpacing("marginVertical", marginVertical, sizes.base),
        marginHorizontal &&
          parseSpacing("marginHorizontal", marginHorizontal, sizes.base),
      ];
    }

    if (type === "padding") {
      return [
        padding && getSpacing(type, padding, sizes.base),
        paddingTop && parseSpacing("paddingTop", paddingTop, sizes.base),
        paddingRight && parseSpacing("paddingRight", paddingRight, sizes.base),
        paddingBottom &&
          parseSpacing("paddingBottom", paddingBottom, sizes.base),
        paddingLeft && parseSpacing("paddingLeft", paddingLeft, sizes.base),
        paddingVertical &&
          parseSpacing("paddingVertical", paddingVertical, sizes.base),
        paddingHorizontal &&
          parseSpacing("paddingHorizontal", paddingHorizontal, sizes.base),
      ];
    }
  };

  const {
    disabled,
    opacity,
    outlined,
    flex,
    height,
    // colors
    color,
    transparent,
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    error,
    warning,
    success,
    info,
    // support for touchables
    highlight,
    nativeFeedback,
    withoutFeedback,
    style,
    children,
    ...rest
  } = props;

  const excludeProps = [
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginVertical",
    "marginHorizontal",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingVertical",
    "paddingHorizontal",
  ];
  const extraProps = Object.keys(props).reduce((prop: any, key) => {
    if (!excludeProps.includes(`${key}`)) {
      prop[key] = props[key];
    }
    return prop;
  }, {});

  const { sizes, colors } = theme;
  const marginSpacing = getSpacings("margin");
  const paddingSpacing = getSpacings("padding");

  const buttonStyles = StyleSheet.flatten([
    {
      height: sizes.base * 3,
      borderRadius: sizes.radius,
      backgroundColor: colors.primary,
      justifyContent: "center",
    },
    transparent && { backgroundColor: "transparent" },
    primary && { backgroundColor: colors.primary },
    secondary && { backgroundColor: colors.secondary },
    tertiary && { backgroundColor: colors.tertiary },
    black && { backgroundColor: colors.black },
    white && { backgroundColor: colors.white },
    gray && { backgroundColor: colors.gray },
    error && { backgroundColor: colors.error },
    warning && { backgroundColor: colors.warning },
    success && { backgroundColor: colors.success },
    info && { backgroundColor: colors.info },
    color && { backgroundColor: color }, // custom backgroundColor
    flex && { flex }, // flex width
    height && { height }, // custom height
    marginSpacing,
    paddingSpacing,
    style,
  ]);

  if (disabled) {
    const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
    buttonStyles.backgroundColor = rgba(backgroundColor, 0.5);
  }

  if (outlined) {
    const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
    buttonStyles.borderWidth = 1;
    buttonStyles.borderColor = backgroundColor;
    buttonStyles.backgroundColor = "transparent";
  }

  const ButtonType = highlight
    ? TouchableHighlight
    : nativeFeedback
    ? TouchableNativeFeedback
    : withoutFeedback
    ? TouchableWithoutFeedback
    : TouchableOpacity;

  return gradient ? (
    <ButtonType
      {...extraProps}
      disabled={disabled}
      activeOpacity={opacity}
      style={buttonStyles}
    >
      <LinearGradient
        start={start}
        end={end}
        locations={locations}
        style={buttonStyles}
        colors={[startColor, endColor]}
      >
        {props.label ? <Text>{props.label}</Text> : children}
      </LinearGradient>
    </ButtonType>
  ) : (
    <ButtonType
      {...extraProps}
      disabled={disabled}
      activeOpacity={opacity}
      style={buttonStyles}
    >
      {children}
    </ButtonType>
  );
};

Button.defaultProps = defaultProps;

export default Button;
