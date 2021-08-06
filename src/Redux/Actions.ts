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

export const editPostTitle = createAction(
  "post/editTitle",
  function prepare(title: string) {
    return {
      payload: title,
    };
  }
);

export const editPostContent = createAction(
  "post/editContent",
  function prepare(content: string) {
    return {
      payload: content,
    };
  }
);

export const editVisibility = createAction(
  "post/editVisibility",
  function prepare(isVisible: boolean) {
    return {
      payload: isVisible,
    };
  }
);
