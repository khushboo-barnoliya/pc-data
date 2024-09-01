import { useState } from "react"

function App() {

  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1)
  }
  const handleDec = () => {
    if(count === 0){
      return;
    }
    setCount(count - 1)
  }

  return (
    <>
      <div style={{"display" : "flex", "justifyContent" : "center", "alignItems": "center", "gap" : "30px"}}>
        <button style={{"padding" : "5px 30px", "backgroundColor" : "tomato", "borderRadius" : "5px", "border" : "1px solid black", "font" : "1.5rem bold", "display" : "flex", "justifyContent" : "center", "alignItems": "center"}} onClick={handleDec}>-</button>
        <h1>{count}</h1>
        <button style={{"padding" : "5px 30px", "backgroundColor" : "lightgreen", "borderRadius" : "5px", "border" : "1px solid black", "font" : "1.5rem bold", "display" : "flex", "justifyContent" : "center", "alignItems": "center"}} onClick={handleInc}>+</button>
      </div>
    </>
  )
}

export default App
