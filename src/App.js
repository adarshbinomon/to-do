import { useState } from 'react';
import './App.css';
import Header from './components/header';
import TodoList from './components/todolist';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setTodo] = useState('');

  const addTodo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, toDo]);
      setTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To Do List</h1>
      </div>
      <Header />
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <TodoList toDos={toDos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
