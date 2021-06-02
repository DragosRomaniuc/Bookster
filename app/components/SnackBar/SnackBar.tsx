import React, { Component, FC } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Snackbar as DefaultSnackbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import { sizes } from "style";

// import { Text } from "components";
// import { global } from "ducks";
// import { RootState } from "redux/rootReducer";

// interface Props {
//   message: string;
//   actionMessage?: string;
//   actionOnPress?: () => void;
// }

// const SnackBar: FC<Props> = ({ message, actionMessage, actionOnPress }) => {
//   const dispatch = useDispatch();

//   const visible = useSelector(
//     (state: RootState) => state.global.snackBarVisible
//   );

//   const hideSnackBar = () => dispatch(global.actions.hideSnackBar());

//   return (
//     <View style={{ zIndex: 999 }}>
//       <Snackbar
//         visible={visible}
//         onDismiss={hideSnackBar}
//         action={{
//           label: actionMessage,
//           onPress: actionOnPress,
//         }}
//         style={{ position: "absolute", top: 0, zIndex: 999 }}
//       >
//         <Text regular>{message}</Text>
//       </Snackbar>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     // left: 0
//     flex: 1,
//     // justifyContent: 'flex-end',
//     // paddingTop: 80
//   },
// });

// export default SnackBar;
// export type SnackBarProps = {
//   visible: boolean;
//   onDismiss: () => void;
//   message: string;
// };

// /**
//  * @requires react-native-paper.Provider for the Material Design components
//  */
// export default function SnackBar({
//   visible,
//   onDismiss,
//   message,
// }: SnackBarProps) {
//   return (
//     <DefaultSnackbar
//       visible={visible}
//       onDismiss={onDismiss}
//       action={{
//         label: "X",
//         onPress: onDismiss,
//       }}
//       /*
//        * Fixes a bug where the snackbar would have a width of 100% of the
//        * parent's padding box (not the content box), and thus overflow.
//        *
//        * Also, this style has to be a plain old JS object (can't come from
//        * Stylesheet.create), so that it's defined as an inline style and
//        * doesn't get overridden.
//        *
//        * Also, we can't use `padding: 'inherit'` since that crashes on mobile,
//        * so we have to recalculate it.
//        */
//       wrapperStyle={{
//         alignSelf: "center",
//         paddingHorizontal: Platform.OS === "web" ? sizes.padding : 0,
//         paddingVertical: sizes.padding,
//       }}
//       style={{ margin: 0 }} // override its `margin: 8`
//     >
//       {message}
//     </DefaultSnackbar>
//   );
// }
