function Navbar() {

  return (
    <>
      <div className="container-fluid p-0 m-0" style={{ "height": "100vh" }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 m-0">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">Create Post</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

    </>
  )
}

export default Navbar