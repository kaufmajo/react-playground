import { Dispatch, SetStateAction, useState } from "react";
import { type TodoItem } from "../../types";
import { useFormStatus } from "react-dom";

export function TodoForm({
  todoItems,
  setTodoItems,
}: {
  todoItems: TodoItem[];
  setTodoItems: Dispatch<SetStateAction<TodoItem[]>>;
}) {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="">
      <form
        className="mt-4 flex-col items-start gap-4"
        method="post"
        action={async (formData: FormData) => {
          await new Promise((resolve) => setTimeout(resolve, 2000)); // just simulating a delay

          console.log(Object.fromEntries(formData));
          const newTodoItem: TodoItem = {
            id: todoItems.length + 1,
            text: formData.get("todo") as string,
            completed: false,
          };

          setTodoItems((prevItems) => [...prevItems, newTodoItem]);
        }}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   const formData = new FormData(e.currentTarget);
        //   const todo = formData.get("todo") as string;
        //   console.log("New todo item:", todo);
        //   console.log(Object.fromEntries(formData));
        // }}
      >
        <input
          type="text"
          id="todo-input"
          name="todo"
          placeholder="Enter todo item"
          required
          className="rounded-sm bg-white ring"
        />
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const status = useFormStatus(); // This hook provides the status of the form submission ... can only be used inside a form child component

  return (
    <button type="submit" className="ml-4 px-2 ring" disabled={status.pending}>
      {status.pending
        ? `Adding "${status.data?.get("todo") || "Todo"}"`
        : "Add Todo"}
    </button>
  );
}
