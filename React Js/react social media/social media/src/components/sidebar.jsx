import logo from "../assets/logo.png"



function Sidebar() {
  return (
    <>
      <div className="container-fluid w-25 h-100 m-0 p-0" style={{"height": "100vh"}}>
        <div className="d-flex flex-column p-3 h-100 bg-body-tertiary">
          <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
            <span className="fs-4"><img src={logo} width={200} /></span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-body-emphasis">
                Create Post 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Sidebar