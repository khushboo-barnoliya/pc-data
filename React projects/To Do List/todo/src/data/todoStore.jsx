import { createContext, useRef, useState } from "react";



export const TodoContext = createContext({
  handleOnSubmit: () => {},
  setVal: [],
});




const TodoProvider = ({children}) => {
  
  
  const taskElem = useRef();
  
  const [list, setList] = useState([])

  const handleOnSubmit = (event) => {
    const task = taskElem.current.value;
    event.preventDefault();
    setList(task);
    
  }
  
  
  
  
  return <TodoContext.Provider value={{
    handleOnSubmit,
    taskElem,
    list,
  }}>
    {children}

  </TodoContext.Provider>
}

export default TodoProvider