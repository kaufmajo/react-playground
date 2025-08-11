import { TodoList } from "./Todo/TodoList";
import { todoItems } from "../data/todos";
import { useState } from "react";
import { TodoItem } from "../types";
import { Stats } from "./Todo/Stats";
import { Search } from "./Todo/Search";

export function Main() {
  const [completed, setCompleted] = useState<TodoItem["id"][]>([1, 3]);
  const [searchQuery, setSearchQuery] = useState<string>("Item 1");

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
    </main>
  );
}
