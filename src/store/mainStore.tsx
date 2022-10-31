/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api/api";
import { INews } from "../models/INews";

interface IInitState {
  news: Array<INews>;
  ids: Array<Number>;
  comments: any;
  commentsKid: any;
  subKids: any;
  status: string | null;
  isLoading: boolean;
}

const initialState: IInitState = {
  news: [],
  ids: null,
  comments: [],
  commentsKid: [],
  subKids: [],
  status: null,
  isLoading: false,
};
const getItemUrl = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
export const fetchData = createAsyncThunk("mainStore/fetchData", async () => {
  const res = await fetch(API);
  const data = await res.json();
  return data;
});

export const getNews = createAsyncThunk(
  "mainStore/getNews",
  async (id: number) => {
    const res = await fetch(getItemUrl(id));
    const data = await res.json();
    return data;
  }
);

export const getComments = createAsyncThunk(
  "mainStore/getComments",
  async (id: number) => {
    const res = await fetch(getItemUrl(id));
    const data = await res.json();
    return data;
  }
);
export const getCommentsKid = createAsyncThunk(
  "mainStore/getCommentsKid",
  async (id: number) => {
    const res = await fetch(getItemUrl(id));
    const data = await res.json();
    return data;
  }
);
export const getSubKids = createAsyncThunk(
  "mainStore/getSubKids",
  async (id: number) => {
    const res = await fetch(getItemUrl(id));
    const data = await res.json();
    return data;
  }
);
const mainStore = createSlice({
  name: "mainStore",
  initialState: initialState,
  reducers: {
    cleanStore(state) {
      state.ids = [];
      state.news = [];
      state.status = null;
    },
    cleanAllComments(state) {
      state.comments = [];
      state.commentsKid = [];
      state.subKids = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = "pending";
      state.isLoading = true;
    }),
      builder.addCase(fetchData.rejected, (state) => {
        state.status = "rejected";
        state.isLoading = false;
      }),
      builder.addCase(fetchData.fulfilled, (state, action: any) => {
        state.status = "fulfilled";
        state.isLoading = false;
        const data = action.payload;
        let indexInArray: number;
        let newItems: Array<Number>;

        if (state.ids == null) {
          state.ids = data.slice(0, 100);
        } else {
          indexInArray = data.findIndex(() => state.ids[0]);
        }
        if (indexInArray == 0) {
          state.ids;
        } else {
          newItems = data.slice(0, indexInArray);
          //@ts-ignore
          state.ids.unshift(newItems);
          state.ids.slice(0, 100);
        }
      }),
      builder.addCase(getNews.pending, (state, action) => {
        state.status = "pending";
        state.isLoading = true;
      }),
      builder.addCase(getNews.rejected, (state, action) => {
        state.status = "rejected";
        state.isLoading = false;
      }),
      builder.addCase(getNews.fulfilled, (state, action: any) => {
        state.status = "fulfilled";
        state.isLoading = false;
        state.news.push(action.payload);
      }),
      builder.addCase(getComments.pending, (state) => {
        state.status = "pending";
        state.isLoading = true;
      }),
      builder.addCase(getComments.rejected, (state) => {
        state.status = "rejected";
        state.isLoading = false;
      }),
      builder.addCase(getComments.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.isLoading = false;
        state.comments.push(action.payload);
      }),
      builder.addCase(getCommentsKid.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(getCommentsKid.rejected, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(getCommentsKid.fulfilled, (state, action) => {
        state.isLoading = false;
        state.commentsKid.push(action.payload);
      });
    builder.addCase(getSubKids.pending, (state) => {}),
      builder.addCase(getSubKids.rejected, (state) => {}),
      builder.addCase(getSubKids.fulfilled, (state, action) => {
        state.subKids.push(action.payload);
      });
  },
});
export default mainStore.reducer;
export const { cleanStore, cleanAllComments } = mainStore.actions;
