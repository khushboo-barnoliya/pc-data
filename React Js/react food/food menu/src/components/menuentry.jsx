function Menuentry({handleOnKeyDown, handleOnChange}){
  return(
    <>
      <div className="container d-flex justify-content-center mt-4">
        <input type="text" placeholder="Enter Your Meal!" onChange={handleOnChange} onKeyDown={handleOnKeyDown} />
      </div>
    </>
  )
}

export default Menuentry;