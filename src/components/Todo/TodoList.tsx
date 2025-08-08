import { type TodoItem } from "../../types";

export function TodoList({ items }: { items: TodoItem[] }) {
  return (
    <ul className="">
      {items.map((item) => (
        <TodoListEntry key={item.id} item={item} />
      ))}
    </ul>
  );
}

function TodoListEntry({ item }: { item: TodoItem }) {
  return (
    <li key={item.id}>
      
      <input
        type="checkbox"
        id={`todo-checkbox-${item.id}`}
        title={`Mark "${item.text}" as completed`}
        className="mr-2"
      />

      <label htmlFor={`todo-checkbox-${item.id}`}>
        <span className={item.completed ? "line-through" : ""}>{item.text}</span>
      </label>

    </li>
  );
}
