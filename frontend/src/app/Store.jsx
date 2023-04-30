import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthApi } from "../services/userAuthapi";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import { subjectfacultyApi } from "../services/subjectfacultyapi";

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [subjectfacultyApi.reducerPath]: subjectfacultyApi.reducer,
    auth: authReducer,
    user_info: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAuthApi.middleware)
      .concat(subjectfacultyApi.middleware),
});

setupListeners(store.dispatch);
