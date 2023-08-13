interface TodoListProps {
  todos: { isDone: boolean; title: string }[];
  deleteHandle: (index: number) => void;
}
export default function TodoList({ todos, deleteHandle }: TodoListProps) {
  return (
    <>
      <ul className="list">
        {todos.map(({ isDone, title }, index) => (
          <li key={index}>
            <label htmlFor="checkbox">
              <input type="checkbox" id="checkbox" defaultChecked={isDone} />
              {title}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => deleteHandle(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
