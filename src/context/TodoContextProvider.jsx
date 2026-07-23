import { useReducer, createContext, useEffect } from 'react';

//created context here and exported it
export const TodoContext = createContext();

const getInitialState = () => {
  const localData = localStorage.getItem("todos");
  return localData ? JSON.parse(localData) : [];
};

function todoReducer(state, action) {
  switch(action.type){

    case "ADD_TASK" : 
      return [
        ...state, {
          id: Date.now(), //unique identifier for react lists
          text: action.payload.text,
          priority: action.payload.priority,
          due_date: action.payload.dueDate,
          completed: false
        }
      ];

    case "COMPLETE_TASK" :
      return state.map( 
        todo => todo.id === action.payload 
                ? {...todo, completed: !todo.completed} 
                : todo
      )

    case "EDIT_TASK" :
      return state.map(
        todo => todo.id === action.payload.id
        ? {...todo, text: action.payload.text, priority: action.payload.priority, due_date: action.payload.dueDate}
        : todo
      )

    case "DELETE_TASK" :
      return state.filter(todo => todo.id !== action.payload); 
      

      default:
        return state;
      
  }
}

export default function TodoContextProvider({children}) {

    //when provide 3rd arg, the 2nd arg (--[]--) acts as the initial arg passed into initializer function. 
    const [todos, dispatch] = useReducer(todoReducer, [] ,getInitialState);
    console.log(todos);   
    
    useEffect( () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  return (
    <TodoContext.Provider value={{todos, dispatch}}>
        {children}
    </TodoContext.Provider>
  );
}


//summary lifecycle
// 1. component mounts : app reads from localStorage -> sets initial state.
// 2. user adds task : TaskForm dispatches action -> reducer updates state -> useEffect automatically saves the new state back to localStorage. 