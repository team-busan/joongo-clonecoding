import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { User, Posts, Bookmarks, Comments } from "./mockData";

const BASE_URL = "http://localhost:8000/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const API_URL = {
  HOME: "/",
  PRODUCT: "/product",
  PRODUCT_REGISTER: "/product/register",
  USER: "/user",
  SEARCH: "/search",
  LOGIN: "/login",
};

const axiosMock = new AxiosMockAdapter(axiosInstance, {
  delayResponse: 100,
  onNoMatch: "throwException",
});

axiosMock.onGet(API_URL.HOME).reply(() => {
  const resent = Posts.silce(0, 7);
  const age = Posts.silce(7, 11);
  const random = Posts.silce(11, 16);
  return [200, { resent, age, random }];
});

axiosMock.onPost(API_URL.LOGIN).reply(200, {
  access_token: "test_token",
  token_type: "bearer",
  expires_in: 3600,
});

export { axiosInstance, API_URL };
