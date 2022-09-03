import { atom, selector } from "recoil";
import { ITodoItem } from './TodoItem';

export const todoListState = atom({
    key: 'todoListState',
    default: [] as ITodoItem[],
  });
