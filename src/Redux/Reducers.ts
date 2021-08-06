import { createReducer } from "@reduxjs/toolkit";
import { userLogin, userSignOut } from "./Actions";

const InitialState = {
  isLoggedIn: false,
  username: "",
  posts: [] as any,
};

export const user = createReducer(InitialState, (builder) => {
  builder.addCase(userLogin, (state, action) => {
    state = action.payload.info;
  });

  builder.addCase(userSignOut, (state, action) => {
    state = action.payload;
  });
});
