function Button({handleOnClick, btnTogClass}){
  return(
    <>
      <button className={`btn btn-success ${btnTogClass}`} onClick={handleOnClick}>Buy</button>
    </>
  )
}

export default Button;