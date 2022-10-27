import { AppDispatch } from "../store";
import { postsIdSlice } from "./postsIdSlice";
import { postsSlice } from "./postsSlice";
import { getDataAPIJson, getIdFirstHundredPosts } from "../../api/api";

export const fetchIdPosts = () => (dispatch: AppDispatch) => {
  try {
    dispatch(postsIdSlice.actions.postsIdFetching());
    getDataAPIJson(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    ).then((resultJson) => {
      let hundredPosts: Array<Number> = getIdFirstHundredPosts(resultJson);
      dispatch(postsIdSlice.actions.postsIdFetchingSuccess(hundredPosts));
    });
  } catch (e) {
    dispatch(postsIdSlice.actions.postsIdFetchingError(e.message));
  }
};
export const fetchPosts = () => (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsFetching());
    getDataAPIJson(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    ).then((resultJson) => {
      let hundredPosts: Array<Number> = getIdFirstHundredPosts(resultJson);
      dispatch(postsIdSlice.actions.postsIdFetchingSuccess(hundredPosts));
    });
  } catch (e) {
    dispatch(postsIdSlice.actions.postsIdFetchingError(e.message));
  }
};
