import { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContextProvider';

export default function TaskForm() {

    const[text, setText] = useState('');
    const[priority, setPriority] = useState("");
    const[dueDate, setDueDate] = useState('');
    
    const { dispatch } = useContext(TodoContext);

    function handleSubmit(e) {
        e.preventDefault();
        if(!text.trim()) {
            alert("Enter the task!");
        } else {
            dispatch({
            type: "ADD_TASK",
            payload: {text, priority, dueDate}
        })
        }

        setText("");
        setPriority("");
        setDueDate("");

    }

  return (
    <div className='task-form'>
        <form onSubmit={handleSubmit}>
            <input
            id="text" 
            type="text" 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder='Enter Task...'
            />

            <select 
            name="priority-dropdown" 
            id="priority-dropdown"
            value={priority}
            onChange={(e)=>setPriority(e.target.value)}
            >
                <option value="">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <input 
            type="date" 
            id="due-date"
            value={dueDate}
            onChange={(e)=>setDueDate(e.target.value)}
            />
            <button id="submit-btn" type='submit'>Add</button>
        </form>
    </div>
  )
}
