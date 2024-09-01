function List(){

  let devices = ["mobile", "tablet", "laptop", "computer", "macbook", "ipad"];
  return(
    <>
       <div className="main w-100 text-center">
         <h1>Devices</h1>
         {devices.length === 0 ? <span className="text-danger fw-bold">There is no device to show!</span> : null}
         <ul className="list-group text-start">
            {devices.map((devices) => <li className="list-group-item">{devices}</li>)}
         </ul>
       </div>
    </>
  )
}

export default List