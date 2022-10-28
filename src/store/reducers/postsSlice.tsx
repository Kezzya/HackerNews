import { IPosts } from "../../models/IPosts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PostsState {
  postsId: IPosts[];
  posts: any;
  isLoading: boolean;
  isLoadingPosts: boolean;
  error: string;
}

const initialState: PostsState = {
  postsId: [],
  posts: [],
  isLoading: false,
  isLoadingPosts: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsIdFetching(state) {
      state.isLoading = true;
    },
    postsIdFetchingSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = "";
      state.postsId = action.payload;
    },
    postsIdFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    postsFetchingFromId(state, action: PayloadAction<IPosts>) {
      state.isLoadingPosts = true;
    },
    postsFetchingFromIdSuccess(state, action: PayloadAction<IPosts>) {
      state.isLoadingPosts = false;
      state.posts = action.payload;
    },
  },
});

export default postsSlice.reducer;
