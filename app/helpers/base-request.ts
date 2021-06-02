import axios, { AxiosRequestConfig } from "axios";

import { BASE_URL } from "../constant/Config";
import { getAuthHeaders } from "./AuthHelper";

export type ApiCallOptions = {
  headers?: Record<string, string>;
  method?: "get" | "post";
  data?: any;
  params?: any;
};

const parseErrorCode = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      console.log("401");
    } else if (error.response.status === 404) {
      const { message } = error.response.data;
      console.log("404");
    }
  } else {
    console.log("other error");
  }

  return Promise.reject(error.response);
};

const API = axios.create({
  baseURL: BASE_URL,
});

// Request parsing interceptor
API.interceptors.request.use(
  async (config) => {
    const authHeaders = await getAuthHeaders();
    if (authHeaders) {
      config.headers = {
        ...config.headers,
        ...authHeaders,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => parseErrorCode(error)
);

export default async (url: string, options: ApiCallOptions = {}) => {
  const config: AxiosRequestConfig = {
    url,
    method: options.method || "GET",
    data: options.data,
  };

  try {
    return await API(config);
  } catch (e) {
    console.log(e, "error");
    delete e.response;
    delete e.request;
    throw e;
  }
};
