export function TodoList({ items }) {
  return (
    <ul className="">
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function TodoItem({ item }) {
  return (
    <li key={item.id} className={item.completed ? "line-through" : ""}>
      {item.text}
    </li>
  );
}
