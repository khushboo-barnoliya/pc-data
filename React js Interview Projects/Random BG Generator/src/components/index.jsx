import { useEffect, useState } from "react"
import './style.css'

function RandomColor() {

  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000")

  function randomColorUtility(length) {
    return (Math.floor(Math.random() * length));
  }

  function handleRandomHexColor() {

    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];

    }
    setColor(hexColor);


  }
  function handleRandomRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleRandomRgbColor();
    else handleRandomHexColor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfColor])

  return (
    <>
      <div className="container-fluid flex-column d-flex h-100 p-0" style={{ backgroundColor: color }}>
        <div className="btn-group container-fluid d-flex gap-3 justify-content-center py-3">
          <button onClick={() => setTypeOfColor('hex')} className="p-2 px-3 button border-0 rounded-pill fw-semibold">Create HEX Color</button>
          <button onClick={() => setTypeOfColor('rgb')} className="p-2 px-3 button border-0 rounded-pill fw-semibold">Create RGB Color</button>
          <button onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor} className="p-2 px-3 button border-0 rounded-pill fw-semibold">Generate Random Color</button>
        </div>

        <div className="container d-flex flex-column my-auto justify-content-center align-items-center text-white fs-1">
          <h3 className="display-1 fw-medium colorType">{typeOfColor === "rgb" ? 'RGB Color' : 'HEX Color'}</h3>
          <h1 className="display-1 fw-semibold colorCode">{color}</h1>
        </div>

    </div>
    </>
  )
}

export default RandomColor
