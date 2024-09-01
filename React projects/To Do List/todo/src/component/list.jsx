
import { useContext } from 'react'
import '../css/app.css'
import { TodoContext } from '../data/todoStore'

function List() {


  const { list } = useContext(TodoContext);


  return (
    <>
      <div className="container-fluid p-0">
        <ul className="list-group p-3 d-flex flex-column w-100">

          {list.map(newList =>

            <>

              <li id='listItem' className="d-flex justify-content-start align-items-center fw-medium w-100 text-ca">
                <div>
                  <label className="label d-flex align-items-center me-2">
                    <input type="checkbox" id='checkInput' />
                    <svg viewBox="0 0 64 64" height="15" width="15">
                      <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                    </svg>
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span id='listSpan' className="text-capitalize">{newList}</span>
                  <button className="btn rounded-pill bg-transparent" id="delBtn"><i className="bi bi-trash3-fill fs-4"></i></button>
                </div>
              </li>
            </>

          )}





        </ul>
      </div>
    </>
  )
}

export default List