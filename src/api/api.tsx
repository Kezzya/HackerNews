import { IPosts } from "../models/IPosts";
import { IPostsId } from "../models/IPostsId";
export const getDataAPIJson = async (url: string): Promise<any> => {
  const result = await fetch(url);
  if (result === undefined) {
    alert("API url is not correct");
  }
  const resultJson = await result.json();
  return resultJson;
};
export const getIdFirstHundredPosts = (
  JSONData: Array<Number>
): Array<Number> => {
  return JSONData.slice(0, 99);
};

export const getDataFromIdPosts = async (arrIdPosts: IPostsId[]) => {
  const Posts: IPosts = {
    id: [],
    title: [],
    score: [],
    nickname: [],
    date: [],
  };
  arrIdPosts.map((id) => {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
    const result = getDataAPIJson(url);
    result.then((posts) => {
      Posts.title.push(posts.title);
      Posts.score.push(posts.score);
      Posts.nickname.push(posts.by);
      const time = posts.time * 1000;
      const date = new Date(time);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      Posts.date.push(`${hours}:${minutes}`);
    });
  });
  console.log(Posts);
  return Posts;
};
