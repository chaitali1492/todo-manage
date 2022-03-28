import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function ToDoAdd({ addToDoHandler }) {
  const [todo, setTodo] = React.useState({ done: false, title: "" });

  const addHandler = () => {
    if (addToDoHandler) {
      addToDoHandler(todo);
      setTodo({ done: false, title: "" });
    }
  };

  const todoHandler = (event) => {
    setTodo({ ...todo, title: event.target.value });
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8} alignItems="flex-end">
          <TextField
            fullWidth
            label="New Task"
            value={todo.title}
            onChange={todoHandler}
            id="fullWidth"
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={addHandler}>
            Add
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ToDoAdd;
