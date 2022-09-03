import { atom, selector } from "recoil";
import { ITodoItem } from "./TodoItem";

export const todoListState = atom({
	key: "todoListState",
	default: [] as ITodoItem[],
});


const todoListFilterState = atom({
	key: 'todoListFilterState',
	default: 'Show All',
  });