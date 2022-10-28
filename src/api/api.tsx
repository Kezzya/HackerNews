import { IPosts } from "../models/IPosts";

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

export const getDataFromIdPosts = async (arrIdPosts: Array<Number>) => {
  const Posts: IPosts = {
    id: [],
    title: [],
    score: [],
    nickname: [],
    date: [],
  };
  arrIdPosts.map(async (id) => {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
    let result = await getDataAPIJson(url);
    Posts.title.push(result.title);
    Posts.score.push(result.score);
    Posts.nickname.push(result.by);
    const time = result.time * 1000;
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    Posts.date.push(`${hours}:${minutes}`);
  });
  console.log(Posts);
  return Posts;
};
