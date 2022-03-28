import React from "react";
import { Typography } from "@mui/material";
import ToDoAdd from "../ToDoAdd";
import ToDoList from "../ToDoList";

function Home() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodos = (indexes) => {
    const newToDos = todos.filter((todo, index) => {
      return indexes.indexOf(index) < 0;
    });
    setTodos(newToDos);
  };

  const toggleTodoDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <Typography variant="h3" component="div" gutterBottom>
        ToDo List
      </Typography>
      <ToDoAdd addToDoHandler={addTodo} />
      <ToDoList
        todos={todos}
        key={todos.length}
        toggleTodoDone={toggleTodoDone}
        deleteTodos={deleteTodos}
      />
    </React.Fragment>
  );
}

export default Home;
