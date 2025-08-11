import { TodoList } from "./Todo/TodoList";
import { todoItems } from "../data/todos";
import { useState } from "react";
import { TodoItem } from "../types";
import { Stats } from "./Todo/Stats";

export function Main() {
  const [completed, setCompleted] = useState<TodoItem["id"][]>([1, 3]);

  return (
    <main className="p-4">
      <Stats completed={completed} setCompleted={setCompleted} />
      <TodoList
        items={todoItems}
        completed={completed}
        setCompleted={setCompleted}
      />
    </main>
  );
}
