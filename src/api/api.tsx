export const API = "https://hacker-news.firebaseio.com/v0/newstories.json";
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
  return JSONData.slice(0, 100);
};
