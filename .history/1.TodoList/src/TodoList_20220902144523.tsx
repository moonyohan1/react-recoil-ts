import { atom, useRecoilValue } from "recoil";
import { todoListState } from 'state';
import { TodoItem } from "TodoItem";
import { TodoItemCreator } from "TodoItemCreator";
import { TodoListFilters } from "TodoListFilters";
import { TodoListStats } from "TodoListstats";

export function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />

        {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
        ))}
        </>
    );
}