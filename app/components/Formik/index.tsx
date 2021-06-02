import React from "react";
import { useField, useFormikContext } from "formik";

import { Button, SnackBar, Text } from "components";
import { default as StyledTextField } from "components/TextField";
/**
 * @requires formik.Formik for Formik state and helpers
 * @requires react-native-paper.Provider for the Material Design components
 */
export function StatusSnackbar() {
  const { status, setStatus } = useFormikContext();
  const hasError = Boolean(status);
  const onDismiss = () => setStatus(undefined);
  return <SnackBar visible={hasError} onDismiss={onDismiss} message={status} />;
}

/**
 * @requires formik.Formik for Formik state and helpers
 * @requires react-native-paper.Provider for the Material Design components
 */
export function SubmitButton({ label }: { label: string }) {
  const { submitForm, isSubmitting } = useFormikContext();
  console.log("isSubmitting", isSubmitting);
  return (
    <Button
      mode="contained"
      onPress={submitForm}
      loading={isSubmitting}
      disabled={isSubmitting}
      gradient
    >
      <Text bold white center>
        {label}
      </Text>
    </Button>
  );
}

export type TextFieldProps<Model> = {
  label: string;
  name: keyof Model & string;
};

/**
 * We don't use <formik.Field as={react-native.TextInput} />, since it injects
 * onChange, onBlur, name, and value into the TextInput, and that can't handle
 * name and needs onChangeText instead of onChange.
 * @requires formik.Formik for Formik state and helpers
 * @requires react-native-paper.Provider for the Material Design components
 */
export function TextField<Model>({
  label,
  name,
  ...rest
}: TextFieldProps<Model>) {
  const [field, meta] = useField(name);
  const hasError = Boolean(meta.touched && meta.error);
  return (
    <StyledTextField
      label={label}
      value={field.value}
      onChangeText={field.onChange(name)}
      onBlur={field.onBlur(name)}
      error={hasError}
      errorText={meta.error}
      {...rest}
    />
  );
}

export interface TextFieldType<Model> {
  (props: TextFieldProps<Model>): ReturnType<typeof TextField>;
}
