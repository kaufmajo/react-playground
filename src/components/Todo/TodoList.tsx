import * as React from "react";
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
  const [isCompleted, setIsCompleted] = React.useState(item.completed);

  function handleChange(event) {
    setIsCompleted(!isCompleted);
  }

  return (
    <li key={item.id}>
      <input
        type="checkbox"
        id={`todo-checkbox-${item.id}`}
        title={`Mark "${item.text}" as completed`}
        className="mr-2"
        checked={isCompleted}
        onChange={handleChange}
      />

      <label htmlFor={`todo-checkbox-${item.id}`}>
        <span className={isCompleted ? "line-through" : ""}>{item.text}</span>
      </label>
    </li>
  );
}
