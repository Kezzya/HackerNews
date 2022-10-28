import { AppDispatch } from "../store";
import { postsSlice } from "./postsSlice";
import {
  getDataAPIJson,
  getIdFirstHundredPosts,
  getDataFromIdPosts,
} from "../../api/api";

export const fetchIdPosts = () => (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsIdFetching());
    getDataAPIJson(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    ).then(async (resultJson) => {
      const hundredPosts: Array<Number> = getIdFirstHundredPosts(resultJson);
      dispatch(postsSlice.actions.postsIdFetchingSuccess(hundredPosts));
      dispatch(postsSlice.actions.postsFetchingFromId());
      let posts = await getDataFromIdPosts(hundredPosts);
      const newPosts = Object.assign([], posts);
      dispatch(postsSlice.actions.postsFetchingFromIdSuccess(newPosts));
    });
  } catch (e) {
    dispatch(postsSlice.actions.postsIdFetchingError(e.message));
  }
};
