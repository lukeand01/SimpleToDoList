import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]); //the todo items?
  const [text, setText] = useState("");


function addTodo(){
  if (!text.trim()) return;
    console.log(text)
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");

  }

function toggleTodo(id) {
  setTodos(
    todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
}

function deleteTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id));
  console.log("delete")
}

return (
    <div className="app">
    <h1>Todos</h1>

    <div className="input-row">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTodo}>Add</button>
    </div>

    <ul>
      {todos.map(todo => (
        <li key={todo.id}
        onClick={() => toggleTodo(todo.id)}
        className={todo.completed ? "completed" : ""}     
        ><span onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>

      <button
    className="delete-btn"
    onClick={(e) => {
      e.stopPropagation();
      deleteTodo(todo.id);
    }}
  >
        ✕
      </button>

        </li>

      ))}
    </ul>
  </div>
  )

}

export default App;


//i want a screen
//you click to add a todo.
//you can select a todo
//and you can remove it.