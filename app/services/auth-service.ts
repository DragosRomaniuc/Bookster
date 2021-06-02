import axios, { AxiosResponse } from "axios";

import baseRequest from "helpers/base-request";
import { SignUpDTO } from "screens/Unauthenticated/SignUp";
import { User } from "types/user";

export const authRegister = async (input: SignUpDTO): Promise<User> => {
  try {
    const { data }: AxiosResponse = await baseRequest("auth/register", {
      method: "post",
      data: input,
    });

    

    return data.user;
  } catch (err) {
    return Promise.reject(err);
  }
};
