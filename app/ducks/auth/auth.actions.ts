/* eslint-disable react-hooks/rules-of-hooks */

import { useDispatch } from "react-redux";
import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "ducks";
import { SignUpDTO } from "screens/Unauthenticated/SignUp";
import baseRequest from "helpers/base-request";
import { User } from "types/user";
import * as Storage from "utils/storage";
import { StorageKeys } from "utils/storage";

// import { auth } from "ducks";
// import { useDispatch } from "react-redux"

// // export const doLogin = ({ email, password }) => async (dispatch) => {
// //   try {
// //     dispatch({ type: auth.actions.login });
// //     const response = await APIHelper.post("auth/sign_in", { email, password });
// //     const { data } = response.data;
// //     const { name: username, id, account_id } = data;
// //     // Check user has any account
// //     if (account_id) {
// //       Sentry.setUser({ email, username, id });
// //       dispatch({ type: SET_AUTH_HEADER, payload: response.headers });
// //       dispatch({ type: LOGIN_SUCCESS, payload: data });
// //     } else {
// //       showToast({ message: I18n.t("ERRORS.NO_ACCOUNTS_MESSAGE") });
// //       dispatch({ type: LOGIN_ERROR, payload: "" });
// //     }
// //   } catch (error) {
// //     if (error && error.status === 401) {
// //       showToast({ message: I18n.t("ERRORS.AUTH") });
// //     }
// //     dispatch({ type: LOGIN_ERROR, payload: error });
// //   }
// // };

export const register = async (input: SignUpDTO) => async (dispatch) => {
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
    return Promise.reject(err);
  }
};

// export const authRegister = async (input: SignUpDTO): Promise<User> => {
//     try {
//       const { data }: AxiosResponse = await baseRequest("auth/register", {
//         method: "post",
//         data: input,
//       });

//       return data.user;
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };
