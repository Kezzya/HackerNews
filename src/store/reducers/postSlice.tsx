import { IPosts } from "../../models/IPosts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PostsState {
  posts: IPosts[];
  isLoading: boolean;
  error: string;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsFetching(state, action: PayloadAction<Number>) {
      state.isLoading = true;
    },
    postsFetchingSuccess(state, action: PayloadAction<IPosts[]>) {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
    postsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
