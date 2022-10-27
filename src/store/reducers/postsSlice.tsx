import { IPosts } from "../../models/IPosts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PostsState {
  posts: IPosts[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsIdSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsFetching(state, action: PayloadAction<IPosts[]>) {
      state.posts = action.payload;
    },
  },
});

export default postsIdSlice.reducer;
