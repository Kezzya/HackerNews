import { AppDispatch } from "../store";
import { postSlice } from "./postSlice";
import { getDataAPIJson, getIdFirstHundredPosts } from "../../api/api";

export const fetchPosts = () => (dispatch: AppDispatch) => {
  try {
    dispatch(postSlice.actions.postsFetching());
    getDataAPIJson(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    ).then((resultJson) => {
      let hundredPosts = getIdFirstHundredPosts(resultJson);
      dispatch(postSlice.actions.postsFetchingSuccess(hundredPosts));
    });
  } catch (e) {
    dispatch(postSlice.actions.postsFetchingError(e.message));
  }
};
