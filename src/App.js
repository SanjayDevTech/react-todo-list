import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [todos, setTodos] = useState([{id: 0, title: "Sanjay"}]);
  function addTodo() {
    const curText = text;
    if (curText.trim() === "") {
      // console.log("Empty field");
      return;
    }
    const curTodos = [...todos];
    // console.log(curTodos);
    curTodos.push({id: count, title: curText});
    setTodos(curTodos);
    setCount(count+1);
  }

  function deleteTodo(id) {
    const curTodos = [...todos];
    curTodos.splice(id, 1);
    setTodos(curTodos);
  }
  return (
    <div className="App">
      <header className="App-header">Todolist</header>
      <main className="App-body">
      <div>
      <input className="App-input" placeholder="Type something..." onChange={(e) => setText(e.target.value)} value={text}/>
      <button className="App-btn-add" onClick={addTodo}>Add #{count}</button>
      </div>
      <ul className="App-list-container">
      {todos.map((todo, index) => (
        <li key={todo.id} className="App-item">
        <div className="App-item-content">
        #{todo.id} {todo.title}
        </div>
        <button onClick={() => deleteTodo(index)} className="App-btn-delete">Delete #{todo.id}</button>
        </li>
      ))}
      </ul>
      </main>
    </div>
  );
}

export default App;
