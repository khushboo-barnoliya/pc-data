import Appname from "./Appname"
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./Counter";


function App() {

  return (
    <>
      <div className="container flex-column gap-3 p-0 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Appname></Appname>
        <Counter></Counter>
      </div>

    </>
  )
}

export default App
