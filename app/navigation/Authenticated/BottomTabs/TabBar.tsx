import styled from "styled-components/native";
import React, { useState, useEffect, useRef } from "react";
import { Animated, Dimensions, View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { Pushable, Icon } from "components";
import { colors } from "style";

const Wrapper = styled.View`
  height: 70px;
  align-items: center;
  flex-direction: row;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: ${({ insetBottom }) => insetBottom}px;
`;

const IconWrapper = styled.View`
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const TabIndicatorWrapper = styled(Animated.View)`
  align-items: center;
  position: absolute;
  bottom: 10px;
`;

const TabIndicator = styled.View`
  height: 4px;
  width: 50%;
  border-radius: 2px;
`;

const TabbarComponent = ({ props }: any) => {
  const insets = useSafeArea();
  // const { colors } = useTheme();
  const [switchAnim] = useState(new Animated.Value(0));
  const { width } = Dimensions.get("window");

  const selectionModal = useRef(null);
  const tabbarWidth = width / 1.35;

  const indicatorPosition = switchAnim.interpolate({
    inputRange: [0, props.state.routeNames.length - 1],
    outputRange: [0, tabbarWidth - tabbarWidth / 15 + 22],
  });

  useEffect(() => {
    Animated.spring(switchAnim, {
      toValue: props.state.index,
      duration: 250,
    }).start();
  }, [props.state.index]);

  return (
    <View style={{ backgroundColor: colors.white }}>
      <Wrapper insetBottom={insets.bottom}>
        {props.state.routeNames.map((route, index) => (
          <Pushable
            key={route}
            onPress={() => {
              const isFocused = props.state.index === index;

              const event = props.navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (route === "Add") {
                event.preventDefault();
                selectionModal.current.open();
              }
              if (!isFocused && !event.defaultPrevented) {
                props.navigation.navigate(route);
              }
            }}
          >
            <IconWrapper style={{ width: tabbarWidth / 4 }}>
              <Icon color={colors.black} size={35} name={route} />
            </IconWrapper>
          </Pushable>
        ))}
        <TabIndicatorWrapper
          style={{ left: indicatorPosition, width: tabbarWidth / 4 }}
          insetBottom={insets.bottom}
        >
          <TabIndicator style={{ backgroundColor: colors.primary }} />
        </TabIndicatorWrapper>
      </Wrapper>
    </View>
  );
};

const Tabbar: React.FC = (routeProps) => <TabbarComponent props={routeProps} />;

export default Tabbar;
