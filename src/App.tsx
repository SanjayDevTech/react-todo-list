import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from "styled-components";

interface Props {
  color?: string;
  bg?: string;
}

const Button = styled.button<Props>`
  color: ${props => props.color || "white"};
  background-color: ${props => props.bg || "green"};
  border: none;
  font-size: 20px;
`;

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [todos, setTodos] = useState([{id: 0, title: "Sanjay"}]);
  let addTodo = () => {
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
    setText("");
  }

  let deleteTodo = (index: number) => {
    const curTodos = [...todos];
    curTodos.splice(index, 1);
    setTodos(curTodos);
  }

  let updateTodo = (index: number) => {
    if (text.trim() === "" || index < 0) {
      return;
    }
    const curTodos = [...todos];
    curTodos[index].title = text;
    setTodos(curTodos);
    setText("");
  }

  return (
    <div className="App">
      <header className="App-header">Todolist</header>
      <main className="App-body">
      <div>
      <input className="App-input" placeholder="Type something..." onChange={(e) => setText(e.target.value)} value={text}/>
      <Button bg="green" onClick={addTodo}>Add #{count}</Button>
      </div>
      <ul className="App-list-container">
      {todos.map((todo, index) => (
        <li key={todo.id} className="App-item">
        <div className="App-item-content">
        #{todo.id} {todo.title}
        </div>
        <Button bg="orange" onClick={() => updateTodo(index)}>Update #{todo.id}</Button>
        <Button bg="red" onClick={() => deleteTodo(index)}>Delete #{todo.id}</Button>
        </li>
      ))}
      </ul>
      </main>
    </div>
  );
}

export default App;
