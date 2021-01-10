import './App.css';
import { useState } from 'react';
import StyledButton from './components/StyledButton';
import Todo from './components/Todo';
import StyledInput from './components/StyledInput';

const App = () => {
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
      <StyledInput placeholder="Type something..." onChange={(e) => setText(e.target.value)} value={text}/>
      <StyledButton bg="green" onClick={addTodo}>Add #{count}</StyledButton>
      </div>
      <ul className="App-list-container">
      {todos.map((todo, index) => (
        <Todo key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} todo={todo} index={index}/>
      ))}
      </ul>
      </main>
    </div>
  );
}

export default App;
