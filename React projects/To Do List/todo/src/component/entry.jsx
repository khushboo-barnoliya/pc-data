
import { useContext } from 'react';
import '../css/app.css'
import { TodoContext } from '../data/todoStore';

function Entry() {

  const {handleOnSubmit, taskElem} = useContext(TodoContext);

  return (
    <>
      <form action='/' onSubmit={handleOnSubmit} className="container-fluid p-1 rounded-pill d-flex bg-body-secondary justify-content-between align-items-center">
        <input type="text" id='taskInput' ref={taskElem} className="bg-transparent border-0 ps-3 fw-medium" placeholder="Enter your Task!" />
        <button className="text-uppercase btn addBtn fw-medium rounded-pill px-4" type='submit'>add</button>
      </form>
    </>
  )
}
export default Entry;