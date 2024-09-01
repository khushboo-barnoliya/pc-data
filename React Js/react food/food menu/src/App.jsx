import { useState } from "react"
import Appname from "./components/appname"
import Menuentry from "./components/menuentry"
import Menugroup from "./components/menugroup"

function App() {

  const [initialState, setInitialState] = useState("Enter your Food Name");
  const onHandleChange = (event) => {
    let inputVal = event.target.value;
    setInitialState(inputVal);
  }

  const [food, setFood] = useState([])
  const onKeyHandle = (event) => {
    if(event.key === "Enter"){
      let val = event.target.value;
      event.target.value = "";
      let val2 = [...food, val];
      setFood(val2);
      setInitialState(event.target.value = "");
    }
  }

  return (
    <>
      <Appname></Appname>
      <Menuentry handleOnKeyDown={(event) => onKeyHandle(event)} handleOnChange={(event) => onHandleChange(event)}></Menuentry>
      <p className="text-center my-3">{initialState} {initialState.length === 0 ? <span>Input is empty!</span>:null}</p>
      <Menugroup foodList={food}></Menugroup>
    </>
  )
}

export default App
