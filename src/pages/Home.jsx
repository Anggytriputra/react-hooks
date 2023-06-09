import { useState } from "react";
import TodoItem from "../components/TodoItem";

function Home() {
  const [todoList, setTodoList] = useState([
    { activity: "Cooking", id: 1 },
    { activity: "Parking", id: 2 },
    { activity: "Drinking", id: 3 },
    { activity: "Jumping", id: 4 },
  ]);

  const [newTodo, setNewTodo] = useState("");
  //   console.log("new todo", newTodo);

  const renderList = () => {
    return todoList.map((todo) => {
      return (
        <TodoItem
          activity={todo.activity}
          id={todo.id}
          deleteBtnHandler={deleteTodo}
        />
      );
    });
  };

  const deleteTodo = (id) => {};

  const inputHandler = (event) => {
    console.log(event);
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    let tempTodo = { activity: newTodo, id: todoList.length + 1 };
    setTodoList([...todoList, tempTodo]);
  };

  return (
    <div className="todo-item-container">
      <h1>Todo List</h1>
      {renderList()}
      <input
        type="text"
        onChange={inputHandler}
      />
      <button onClick={() => addTodo()}>Add</button>
    </div>
  );
}

export default Home;
