import styles from "./todoitem.module.css";
export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    console.log(item);
  }
  function handleClick(name) {
    let newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const complete = item.done ? styles.complete : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={complete} onClick={() => handleClick(item.name)}>
          {" "}
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebutton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
