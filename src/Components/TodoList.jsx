import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodo = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodo.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
