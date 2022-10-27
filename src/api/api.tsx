export const getDataAPIJson = async (url: string): Promise<any> => {
  const result = await fetch(url);
  if (result === undefined) {
    alert("API url is not correct");
  }
  const resultJson = await result.json();
  return resultJson;
};
export const getIdFirstHundredPosts = (JSONData: Array<Number>) => {
  let arrayHundredPosts; // GET ARRAY OF FIRST 100 POSTS ID
  arrayHundredPosts = JSONData.slice(0, 99);
  console.log(arrayHundredPosts);
  //   await JSONData.then((e: Array<Number>) => {
  //     arrayHundredPosts = e.slice(0, 99);
  //   });
  return arrayHundredPosts;
};
