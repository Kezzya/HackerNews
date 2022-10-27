import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsIdReducer from "./reducers/postsIdSlice";
import postsReducer from "./reducers/postsSlice";
const rootReducer = combineReducers({
  postsIdReducer,
  postsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
