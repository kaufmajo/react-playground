import { Dispatch, SetStateAction, useState } from "react";
import { type TodoItem } from "../../types";

export function TodoList({
  items,
  completed,
  setCompleted,
  searchQuery,
}: {
  items: TodoItem[];
  completed: TodoItem["id"][];
  setCompleted: Dispatch<SetStateAction<TodoItem["id"][]>>;
  searchQuery: string;
}) {
  return (
    <ul className="">
      {items
        .filter((item) =>
          item.text.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((item) => (
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
  const [pending, setPending] = useState(false);

  return (
    <li key={item.id}>
      {pending ? (
        <span className="text-gray-500">Updating...</span>
      ) : (
        <input
          type="checkbox"
          id={`todo-checkbox-${item.id}`}
          title={`Mark "${item.text}" as completed`}
          className="mr-2"
          checked={completed.includes(item.id)}
          onChange={() => {
            setPending(true);
            setTimeout(() => { // // just simulating a delay
              if (completed.includes(item.id)) {
                setCompleted(completed.filter((id) => id !== item.id));
              } else {
                setCompleted([...completed, item.id]);
              }
              setPending(false);
            }, 2000);
          }}
        />
      )}
      <label htmlFor={`todo-checkbox-${item.id}`}>
        <span className={completed.includes(item.id) ? "line-through" : ""}>
          {item.text}
        </span>
      </label>
    </li>
  );
}
