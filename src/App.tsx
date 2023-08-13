import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import "./styles.css";
import FormTodoList from "./Form";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem('ITEMS');
    if(localTodos == null) return [] as { title: string; isDone: boolean, id: string }[];
    return JSON.parse(localTodos) as { title: string; isDone: boolean, id: string }[];
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  const deleteHandler = (id: string) =>
    setTodos((currentTodos) => currentTodos.splice(currentTodos.findIndex(t => t.id === id), 1));

  const addTodoHandler = (title: string) =>
    setTodos((currentTodos) => [...currentTodos, { title, isDone: false, id: crypto.randomUUID() }]);

  const toggleTodos = (id: string, checked: boolean) => setTodos((currentTodos) => {
    return currentTodos.map(todo => {
      if(todo.id === id) {
        return {...todo, isDone: checked};
      };
      return todo;
    });
  })

  return (
    <>
      <FormTodoList addTodo={addTodoHandler} />
      <h1 className="header">
        Todo List
      </h1>
      <TodoList todos={todos} deleteHandle={deleteHandler} toggleHandle={toggleTodos} />
    </>
  );
}
