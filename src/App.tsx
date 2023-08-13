import { useState } from "react";
import TodoList from "./TodoList";
import "./styles.css";
import FormTodoList from "./Form";

export default function App() {
  const [todos, setTodos] = useState(
    [] as { title: string; isDone: boolean }[],
  );

  const deleteHandler = (index: number) => {
    const todosCopy = structuredClone(todos);
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  };

  const addTodoHandler = (title: string) => {
    const todosCopy = structuredClone(todos);
    setTodos([...todosCopy, { title, isDone: false }]);
  };

  return (
    <>
      <FormTodoList addTodo={addTodoHandler} />

      <h1 className="header">
        Todo List
      </h1>

      <TodoList todos={todos} deleteHandle={deleteHandler} />
    </>
  );
}
