import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import * as Storage from "utils/storage";
import {
  Button,
  Block,
  Text,
  SubmitButton,
  StatusSnackbar,
  TextField,
} from "components";
import { sizes } from "style";
import { register } from "ducks/auth/auth.actions";
import { auth } from "ducks";
import baseRequest from "helpers/base-request";
import { User } from "types/user";
import { StorageKeys } from "utils/storage";

import navigationOptions from "./navigationOptions";
import { authRegister } from "../../../services/auth-service";

export type SignUpDTO = {
  username: string;
  password: string;
};

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Too Short!")
    .max(16, "Too Long!")
    .required("Required!"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(16, "Too Long!")
    .required("Required!"),
});

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSignUp = async (input: SignUpDTO) => {
    try {
      dispatch(auth.actions.login());

      const {
        data: { user },
        status,
      }: { data: { user: User }; status: number } = await baseRequest(
        "auth/register",
        {
          method: "post",
          data: input,
        }
      );

      console.log(user, status, "user-status");

      dispatch(auth.actions.loginSuccess(user));

      await Storage.setItem(StorageKeys.TOKEN, user.token);

      const token = await Storage.getItem(StorageKeys.TOKEN);
      console.log(token);
    } catch (err) {
      console.log(err, "am primit eroare");
      dispatch(auth.actions.loginError());
    }
    Keyboard.dismiss();
  };
  // const { navigation } = props;
  // console.log(this.props, 'din signUp')
  // const { loading, errors } = this.state;

  return (
    <KeyboardAvoidingView style={styles.signup} behavior="padding">
      <Block flex={0} margin={[40, 0]}>
        <Text h1 center bold>
          Create
          <Text h1 primary>
            {" "}
            Account.
          </Text>
        </Text>
      </Block>
      <Block middle padding={[0, sizes.base * 2]} flex={0}>
        <Block middle flex={0}>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(data) => handleSignUp(data)}
            validationSchema={SignUpSchema}
          >
            <Block flex={0}>
              <TextField
                label="Username"
                name="username"
                style={styles.input}
              />
              <TextField
                label="Password"
                name="password"
                style={styles.input}
              />
              <SubmitButton label="Submit" />
              <StatusSnackbar />
            </Block>
          </Formik>
        </Block>

        {/* <Button gradient onPress={handleSignUp} flex={0}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text bold white center>
              Sign Up
            </Text>
          )}
        </Button> */}

        <Button white onPress={() => navigation.goBack()} margin={[10, 0]}>
          <Text gray center>
            Back to Login
          </Text>
        </Button>
      </Block>
    </KeyboardAvoidingView>
  );
};

SignUp.navigationOptions = navigationOptions;

export default SignUp;

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "white",
  },
});
