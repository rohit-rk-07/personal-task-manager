import { useContext } from 'react';
import { TodoContext } from '../context/TodoContextProvider';

export default function Completed() {

  const {todos, dispatch} = useContext(TodoContext);
  const todoList = todos.filter( todo => todo.completed === true);

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
    });
  }

  return (
    <div id='completed'>
      <ul id='cmplt-ul'>
        {
          todoList.map( todo => (
            <li id="cmplt-li" key={todo.id}>
              <span id="cmplt-span">
              <input id='cmplt-check' type="checkbox" checked={todo.completed} onChange={()=>completeTask(todo.id)}/>
              <p id='cmplt-text'>{todo.text}</p>
              </span>
              <button onClick={()=>deleteTask(todo.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
