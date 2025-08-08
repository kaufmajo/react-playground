import { TodoList } from "./Todo/TodoList";
import { todoItems } from "../data/todos";

export function Main() {
  return (
    <main className="p-4">
      <TodoList items={todoItems} />
    </main>
  );
}
