import { useState } from 'react'

export default function EditTask({ todo, onSave, onClose }) {

    const [editText, setEditText] = useState(todo.text);
    const [editPriority, setEditPriority] = useState(todo.priority);
    const [editDueDate, setEditDueDate] = useState(todo.due_date || 0);

    function handleSubmit(e) {
        e.preventDefault();
        if(!editText.trim()){
            alert("Task text cannot be empty!");
            return;
        }

        onSave({
        id: todo.id,
        text: editText,
        priority: editPriority,
        dueDate: editDueDate
        });
    }
    

  return (
    <div style={modalOverlayStyle}>
        <div style={modalContentStyle}>
            <h3 id="edit-title">Edit Task</h3>

            <form action="" onSubmit={handleSubmit}>
                <div id="edit-input-container">
                <input 
                id="edit-text"
                type="text" 
                value={editText} 
                onChange={ (e) => setEditText(e.target.value)}
                />

                <select
                id="edit-priority" 
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
                >
                    <option value="">Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <input 
                id="edit-date"
                type="date" 
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                />
                </div>

                <div id="edit-btns-container" style={{marginTop: '10px'}}>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={onClose} style={{marginLeft: '10px'}}>Cancel</button>
                </div>

            </form>
        </div>
    </div>
  )
}

const modalOverlayStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #999'
}

const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    color: '#000',
    minWidth: '300px'
}
