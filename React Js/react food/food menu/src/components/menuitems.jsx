import Button from "./button"

const Menuitems = ({foodItem, handleBtnClick, toogleClass}) => {
  return(
    <>


      <li className={` ${toogleClass} list-group-item d-flex justify-content-between`}><span className="text-capitalize">{foodItem}</span> <Button btnTogClass={toogleClass}  handleOnClick={handleBtnClick}></Button></li>
    </>
  )
}

export default Menuitems;