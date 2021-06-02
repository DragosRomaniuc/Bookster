import * as React from "react";
import { StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

import { colors, sizes } from "style";

export type TextFieldProps = React.ComponentProps<typeof TextInput> & {
  helperText?: string;
  errorText?: string;
  style?: object;
};

/**
 * @requires react-native-paper.Provider for the Material Design components
 */
export default function TextField({
  label,
  error,
  errorText,
  helperText,
  ...otherProps
}: TextFieldProps) {
  // Leave ' ' as is. '' makes the HelperText not take space
  helperText = helperText || (label?.endsWith("*") ? "*Requerido" : " ");
  errorText = errorText || " ";
  const { style } = otherProps;
  return (
    <>
      <TextInput
        label={label}
        error={error}
        dense
        underlineColor="transparent"
        theme={{
          colors: colors,
        }}
        style={{ ...style }}
        {...otherProps}
      />
      <HelperText type={error ? "error" : "info"} style={styles.helperText}>
        {error ? errorText : helperText}
      </HelperText>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginBottom: 16,
  },
  container: {
    flex: 1,
    padding: sizes.padding,
  },
  fab: {
    position: "absolute",
    end: 16,
    bottom: 16,
  },
  helperText: {
    marginBottom: 8,
  },
});
