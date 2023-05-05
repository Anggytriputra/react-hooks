import { useEffect, useState } from "react";
import Axios from "axios";
import TodoItem from "../components/TodoItem";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // console.log("todolist", todoList);
  // console.log("setTodoList", setTodoList);

  const fetchData = () => {
    Axios.get("http://localhost:2000/todo").then((response) => {
      console.log("fetchdata", response.data);
      setTodoList(response.data);
    });
  };

  const renderList = () => {
    return todoList.map((todo) => {
      return (
        <TodoItem
          activity={todo.activity}
          id={todo.id}
          deleteBtnHandler={deleteTodo}
          isFinished={todo.isFinished}
        />
      );
    });
  };

  const deleteTodo = (id) => {
    Axios.delete("http://localhost:2000/todo/" + id).then((response) => {
      fetchData();
    });
  };

  // input handler
  const inputHandler = (event) => {
    setNewTodo(event.target.value);
  };

  // add NewTodo
  const addTodo = async () => {
    try {
      await Axios.post("http://localhost:2000/todo", {
        activity: newTodo,
        isFinished: false,
      });
      fetchData();
    } catch (error) {
      console.log("ini error addTodo", error);
    }
  };

  // memanggil fetchData()
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="todo-item-container">
      <h1>Todo List</h1>
      {renderList()}
      <input
        type="text"
        name=""
        onChange={inputHandler}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Todo;
