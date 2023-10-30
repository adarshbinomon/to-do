// TodoList.js
import React from 'react';
import TodoItem from './todoitem';

function TodoList({ toDos, onDelete }) {
  return (
    <div>
      {toDos.map((value, index) => (
        <TodoItem key={index} value={value} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}

export default TodoList;
