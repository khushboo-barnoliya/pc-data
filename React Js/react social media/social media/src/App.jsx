
import Sidebar from "./components/sidebar"
import Timeline from "./components/timeline"

function App() {

  return (
    <>
      <div className="container-fluid p-0 d-flex" style={{"height": "100vh"}}>

        <Sidebar></Sidebar>
        <Timeline></Timeline>
        
      </div>
      
    </>
  )
}

export default App
