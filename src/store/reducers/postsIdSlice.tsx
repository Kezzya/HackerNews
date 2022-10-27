import { IPostsId } from "../../models/IPostsId";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PostsIdState {
  postsId: IPostsId[];
  isLoading: boolean;
  error: string;
}

const initialState: PostsIdState = {
  postsId: [],
  isLoading: false,
  error: "",
};

export const postsIdSlice = createSlice({
  name: "postsId",
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
  },
});

export default postsIdSlice.reducer;
