import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    user_id: null,
  },
});
