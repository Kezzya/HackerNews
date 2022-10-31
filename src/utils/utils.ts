export const convertToPlain = (html) => {
  let tempDivElement = document.createElement("div");
  tempDivElement.innerHTML = html;
  return tempDivElement.textContent || tempDivElement.innerText || "";
};
export const convertUnixTime = (unixTime: number): string => {
  const time = unixTime * 1000;
  const date = new Date(time);
  const hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
};
