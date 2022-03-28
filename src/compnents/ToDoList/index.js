import React from "react";
import {
  Checkbox,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDoList({ todos, deleteTodos, toggleTodoDone }) {
  const deleteTodoHandler = (index) => {
    if (deleteTodos) {
      deleteTodos([index]);
    }
  };

  const renderToDos = () => {
    if (todos.length === 0) {
      return <Grid sm={12}>Add To Do.</Grid>;
    }

    return todos.map((todo, index) => {
      let textStyles = {};
      if (todo.done) {
        textStyles = { textDecorationLine: "line-through" };
      }

      return (
        <TableRow>
          <TableCell align="center" width={"10%"}>
            <Checkbox
              checked={todo.done}
              onChange={(e) => toggleTodoDone(index)}
            />
          </TableCell>
          <TableCell align="left" width={"80%"}>
            <Typography variant="body" style={{ ...textStyles }}>
              {todo.title}
            </Typography>
          </TableCell>

          <TableCell align="right" width={"10%"}>
            <IconButton onClick={() => deleteTodoHandler(index)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <React.Fragment>
      <TableContainer>
        <Table>
          <TableBody>{renderToDos()}</TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default ToDoList;
