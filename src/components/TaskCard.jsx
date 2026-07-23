import { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContextProvider';
import EditTask from './EditTask';

export default function TaskCard() {

  const {todos, dispatch} = useContext(TodoContext);

  const todosList = todos.filter( todo => todo.completed === false )

  const [editingTodo, setEditingTodo] = useState(null);
  function handleSaveEdit(updatedFields) {
    dispatch({
      type: "EDIT_TASK",
      payload: updatedFields
    });
    setEditingTodo(null);
  }

  function completeTask(id) {
    dispatch({
      type: "COMPLETE_TASK",
      payload: id
    });
  }

  function deleteTask(id) {
    dispatch({
      type: "DELETE_TASK",
      payload: id
    })
  }

  return (
    <div className='task-card'>
      <ul id="un-list">
        {todosList.map( (todo) => (
          <li className='list' key={todo.id}>

            <span id="span-1">
            <input id="check-task" type="checkbox" onChange={() => completeTask(todo.id)}/>  
             <p className='todo-text'>{todo.text}</p>
             <p className={`priority-box ${todo.priority} priority`}>{todo.priority}</p>
             <p className='todo-date'>{todo.due_date}</p>
             </span>

             <span id="span-2">
              <button onClick={() => setEditingTodo(todo)}>Edit</button>
              <button onClick={() => deleteTask(todo.id)}>Delete</button>  
             </span>
          </li>
        ))}
      </ul>

      { editingTodo && (<EditTask todo={editingTodo} onSave={handleSaveEdit} onClose={() => setEditingTodo(null)}/>)}
    </div>
  );
}
