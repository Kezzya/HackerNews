import { IItem } from "./IItem";
export interface INews {
  id: number | null;
  title: string | null;
  link: string | null;
  score: number | null;
  by: string | null;
  time: number | null;
  counter: number | null;
  comments: Array<IItem> | null;
}
