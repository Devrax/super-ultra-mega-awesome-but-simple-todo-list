import { useRef, useState } from "react";

interface FormTodoListProps {
  addTodo: (title: string) => void;
}

export default function FormTodoList({ addTodo }: FormTodoListProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    inputRef.current!.value = "";
    addTodo(value);
  };

  return (
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Todo</label>
        <input
          type="text"
          id="item"
          required
          ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button
        className="btn"
        disabled={!value}
        onClick={(e) => handleSubmit(e)}
      >
        add
      </button>
    </form>
  );
}
