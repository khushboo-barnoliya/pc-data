import { useState } from "react";
import Menuitems from "./menuitems";

function Menugroup({foodList}){

  const [activeBuy, setActiveBuy] = useState([false]);
  const onButtonClick = (foodListItem, e) => {
    e.target.textContent = "Remove";
    
    
    let newActive = [...activeBuy, foodListItem];
    setActiveBuy((activeBuy) => !activeBuy, newActive);
  }
  
  let toggleClassBtn = activeBuy ? "active" : null;

  return(
    <>
      <div className="container d-flex justify-content-center mt-4">
        <ul className="list-group d-flex w-25">
          {foodList.map(foodListItem => <Menuitems toogleClass={toggleClassBtn} foodItem={foodListItem} handleBtnClick={(e) => onButtonClick(foodListItem, e)}></Menuitems>)}
        </ul>
      </div>
    </>
  )
}

export default Menugroup;