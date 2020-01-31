import React, { useState } from "react";

import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.onCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

// form to add the todo

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  // handle the form

  function handleSubmit(e) {
    e.preventDefault();

    // check for the value

    if (!value) return;

    addTodo(value);

    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  // set the state varialbe of the todo

  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      onCompleted: false
    },
    {
      text: "Play Football",
      onCompleted: false
    }
  ]);

  // add the todo to the todos array

  function addTodo(text) {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  // update function

  function completeTodo(index) {
    const newTodos = [...todos];

    newTodos[index].onCompleted = true;

    setTodos(newTodos);
  }

  // delete function

  function removeTodo(index) {
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div class="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
