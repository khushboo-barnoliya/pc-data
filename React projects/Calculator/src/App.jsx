import { useState } from "react";


function App() {

  const calKeys = ["C", "()", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="];

  let [val, setVal] = useState('');

  const handleClick = (keys) => {
    if(keys === "C"){
      setVal(val = "");
    }

    else if(keys === "="){
      const result = eval(val);
      setVal(result);
    }

    else{
      const btnVal = val + keys;
      setVal(btnVal);
    }
  }

  return (
    <>

      <div className="container d-flex justify-content-center flex-column gap-3 p-0 align-items-center w-25" style={{ "height": "100vh" }}>
        <input type="text" className="w-100 p-2" value={val} readOnly />

        <div className="conatiner p-0 w-100 justify-content-center align-items-center row row-cols-4 gap-1">
          {calKeys.map(keys => <button className="border-1" style={{ "width": "5rem" }} onClick={() => handleClick(keys)}>{keys}</button>)}

        </div>
      </div>

    </>
  )
}

export default App
