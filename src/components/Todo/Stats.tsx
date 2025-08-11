import { Dispatch, SetStateAction, useState } from "react";
import { type TodoItem } from "../../types";

export function Stats({
  completed,
  setCompleted,
}: {
  completed: TodoItem["id"][];
  setCompleted: Dispatch<SetStateAction<TodoItem["id"][]>>;
}) {
  return (
    <ul className="mb-4">
      <li>Open: {completed.length}</li>
      <li>Completed: {completed.length}</li>
    </ul>
  );
}
