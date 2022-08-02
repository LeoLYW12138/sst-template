import fetch from "node-fetch";
import { TokenAuth } from "functions/types";

const BASE_URL = "https://api.baserow.io/api";

export const tokenAuth = (): Promise<TokenAuth> => {
  return fetch(BASE_URL + "/user/token-auth/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "leo62227@gmail.com",
      password: process.env.BASEROW_PASSWORD,
    }),
  })
    .then((res) => res.json())
    .then((data: any) => {
      return data as TokenAuth;
    });
};
