    import { useState } from 'react'
import './app.css'

function App() {



  let [val, setVal] = useState("")
  
  const handleOnclick = (newBtn) => {
    if(newBtn === "C"){
      setVal(val = "");
    }

    else if(newBtn === "="){
      let result = eval(val);
      setVal(result);
    }

    else{
      let btnVal = val + newBtn;
      setVal(btnVal);
    }
  }


  let btn = [
    "C", "()", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "=",
  ]

  return (
    <>
      <div className="container-fluid p-0 d-flex justify-content-center align-items-center">
        <div className="container main p-0 col-4 rounded-5 d-flex flex-column justify-content-between align-items-center overflow-hidden">
          <h1 className='text-uppercase mb-4'>Calculator</h1>
          <input type="text" className="w-100 fs-3 p-3 border-1 rounded-2 mb-3" value={val} readOnly />
          <div className="buttons row container-fluid justify-content-around gap-2 p-0">
            {btn.map(newBtn => <button className='border-0 rounded-circle d-flex justify-content-center align-items-center fs-3 fw-semibold bg-secondary-subtle' onClick={() => handleOnclick(newBtn)} >{newBtn}</button>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
