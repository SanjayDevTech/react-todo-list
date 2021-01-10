import '../App.css';
import StyledButton from './StyledButton';

interface TodoProps {
  todo: {id: number, title: string};
  index: number;
  updateTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const Todo: React.FC<TodoProps> = ({todo, index, updateTodo, deleteTodo}) => (
  <li className="App-item">
  <div className="App-item-content">
  #{todo.id} {todo.title}
  </div>
  <StyledButton color="black" bg="orange" onClick={() => updateTodo(index)}>Update #{todo.id}</StyledButton>
  <StyledButton bg="red" onClick={() => deleteTodo(index)}>Delete #{todo.id}</StyledButton>
  </li>
);

export default Todo;
