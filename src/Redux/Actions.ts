import { createAction } from "@reduxjs/toolkit";

type Posts = {
  id: number;
  title: string;
  pubDate: Date;
  likes: number;
  views: number;
  isVisible: boolean;
};

type userInfo = {
  isLoggedIn: boolean;
  username: string;
  posts: Posts[];
};

export const userLogin = createAction(
  "user/login",
  function prepare(info: userInfo) {
    return {
      payload: {
        info,
      },
    };
  }
);

export const userSignOut = createAction("user/signOut", function prepare() {
  return {
    payload: {
      isLoggedIn: false,
      username: "",
      posts: [],
    },
  };
});
