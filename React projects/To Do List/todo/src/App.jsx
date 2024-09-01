import './css/app.css'
import Appname from './component/appname'
import Entry from './component/entry'
import List from './component/list'
import TodoProvider from './data/todoStore'

function App() {

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center p-0 m" id='main'>
        <div className="container todo bg-white rounded-3 p-3 px-4" id='todo'>
          <TodoProvider>
            <Appname></Appname>
            <Entry></Entry>
            <List></List>
          </TodoProvider>
        </div>

      </div>
    </>
  )
}

export default App
