// TodoItem.js
import React, { useState } from 'react';

function TodoItem({ value, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`todo ${isChecked ? 'checked' : ''}`}>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" checked={isChecked} onChange={toggleCheck} />
            <p>{value}</p>
          </div>
          <div className="right">
            <i onClick={onDelete} className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
