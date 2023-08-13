interface TodoListProps {
  todos: { isDone: boolean; title: string; id: string }[];
  deleteHandle: (id: string) => void;
  toggleHandle: (id: string, checked: boolean) => void;
}
export default function TodoList(
  { todos, deleteHandle, toggleHandle }: TodoListProps,
) {
  return (
    <>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label htmlFor={todo.id}>
              {todo.title}
            </label>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.isDone}
              onChange={(e) => toggleHandle(todo.id, e.target.checked)}
            />
            <button
              className="btn btn-danger"
              onClick={() => deleteHandle(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
