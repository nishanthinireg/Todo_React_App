import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  //   const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todolist} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <input
            className={styles.inputs}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            placeholder="Enter the Todo item here"
          />
          <button className={styles.button} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
