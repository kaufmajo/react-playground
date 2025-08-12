import { Dispatch, SetStateAction, useState } from "react";
import { type TodoItem } from "../../types";

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
        action={(formData: FormData) => {
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
        <button type="submit" className="ml-4 px-2 ring">
          Submit
        </button>
      </form>
    </div>
  );
}
