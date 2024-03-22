import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { User, Products, Bookmarks, Comments } from "./mockData";

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
  const recent = Products.slice(0, 7);
  const hot = Products.slice(7, 11);
  const random = Products.slice(11, 16);
  return [200, { recent, hot, random }];
});

axiosMock.onGet(API_URL.SEARCH).reply(() => {
  try {
    const products = [Products];
    return [200, products];
  } catch (error) {
    console.log(error);
    return [500, { message: "Internal server error" }];
  }
});

const product_detail_url = new RegExp(`${API_URL.PRODUCT}/*`);

axiosMock.onGet(product_detail_url).reply((config) => {
  const id = config.url.split("/").pop();
  const product = Products.find((products) => products.product_id === Number(id));
  const user = User.find((users)=> users.user_id === product.user_id);
  const comment = Comments.filter((comments)=>comments.product_id === product.product_id);
  const category_product = Products.filter((products)=> products.main_category === product.main_category);
  const sales_product = Products.filter((products)=> products.user_id === user.user_id && !products.sales_status);
  return [200, {product, user, comment, category_product, sales_product}];
});

export { axiosInstance, API_URL };
