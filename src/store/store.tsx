import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
import mainStore from "./mainStore";

//export type TRootState = ReturnType<typeof rootReducer>;
export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

const rootReducer = combineReducers({
  mainStore,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
