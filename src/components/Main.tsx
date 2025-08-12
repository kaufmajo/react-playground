import { TodoList } from "./Todo/TodoList";
import { useState } from "react";
import { TodoItem } from "../types";
import { Stats } from "./Todo/TodoStats";
import { Search } from "./Todo/TodoSearch";
import { TodoForm } from "./Todo/TodoForm";
import { todoItems as todoItemsData } from "../data/todos";

export function Main() {
  const [completed, setCompleted] = useState<TodoItem["id"][]>([1, 3]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [todoItems, setTodoItems] = useState<TodoItem[]>(todoItemsData);

  return (
    <main className="p-4">
      <Stats completed={completed} setCompleted={setCompleted} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TodoList
        items={todoItems}
        completed={completed}
        setCompleted={setCompleted}
        searchQuery={searchQuery}
      />
      <TodoForm todoItems={todoItems} setTodoItems={setTodoItems} />
    </main>
  );
}
