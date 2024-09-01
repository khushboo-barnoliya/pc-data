
import { useState } from "react"
import data from "./data"
import './style.css'

export const Accordion = () => {

  const [select, setSelect] = useState(null);
  const [enable, setEnable] = useState(null);
  const [multi, setMulti] = useState([]);

  function handleSingleSelection(id) {
    setSelect(id === select ? null : id)
  }

  function handleMultiSelection(id) {

    let copyMulti = [...multi]
    const findIndexOfId = copyMulti.indexOf(id);

    if (findIndexOfId === -1) {
      copyMulti.push(id)
    }
    else {
      copyMulti.splice(findIndexOfId, 1)
    }
    setMulti(copyMulti)
  }

  function handleEnable() {
    setEnable(!enable)
  }

  return (
    <>
      <div className="w-50 my-5 d-flex flex-column gap-3 align-items-center">

        <button onClick={handleEnable} id="enableBtn" className="text-capitalize btn btn-primary btn-sm">enable multi selection</button>

        <div className="acco w-100 d-flex flex-column gap-3">

          {
            data && data.length > 0 ?

              data.map((dataItem, i) =>
                <div className="accordion" key={i}>

                  <div onClick={enable ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="accordion-item d-flex user-select-none p-4 border-0 bg-black text-white rounded-top-3 rounded-0 justify-content-between align-items-center">

                    <h3 className="mb-0 fw-medium">{dataItem.question}</h3>

                    <span className="fs-4">+</span>

                  </div>

                  {
                    enable ? multi.indexOf(dataItem.id) !== -1 && <div className="p-4 bg-opacity-75 text-white bg-black rounded-bottom-3">{dataItem.answer}</div>
                      :
                      select === dataItem.id && <div className="p-4 bg-opacity-75 text-white bg-black rounded-bottom-3">{dataItem.answer}</div>
                  }

                </div>)

              : <span>There is nothing to show!</span>
          }
        </div>
      </div>
    </>
  )
}
