import { Dispatch, SetStateAction, useState } from "react";
import { type TodoItem } from "../../types";

export function TodoList({
  items,
  completed,
  setCompleted,
}: {
  items: TodoItem[];
  completed: TodoItem["id"][];
  setCompleted: Dispatch<SetStateAction<TodoItem["id"][]>>;
}) {
  return (
    <ul className="">
      {items.map((item) => (
        <TodoListEntry
          key={item.id}
          item={item}
          completed={completed}
          setCompleted={setCompleted}
        />
      ))}
    </ul>
  );
}

function TodoListEntry({
  item,
  completed,
  setCompleted,
}: {
  item: TodoItem;
  completed: TodoItem["id"][];
  setCompleted: Dispatch<SetStateAction<TodoItem["id"][]>>;
}) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        id={`todo-checkbox-${item.id}`}
        title={`Mark "${item.text}" as completed`}
        className="mr-2"
        checked={completed.includes(item.id)}
        onChange={() => {
          if (completed.includes(item.id)) {
            setCompleted(completed.filter((id) => id !== item.id));
          } else {
            setCompleted([...completed, item.id]);
          }
        }}
      />

      <label htmlFor={`todo-checkbox-${item.id}`}>
        <span className={completed.includes(item.id) ? "line-through" : ""}>
          {item.text}
        </span>
      </label>
    </li>
  );
}
