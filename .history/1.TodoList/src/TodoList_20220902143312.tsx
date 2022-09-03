import { atom, useRecoilValue } from "recoil";
import { todoListState } from 'state';
import { TodoItem } from "TodoItem";
import { TodoItemCreator } from "TodoItemCreator";

export function TodoList() {
const todoList = useRecoilValue(todoListState);

return (
    <>
    {/* <TodoListStats /> */}
    {/* <TodoListFilters /> */}
    <TodoItemCreator />

    {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
    ))}
    </>
);
}