import Navbar from './Components/Navbar/Navbar'
import List from './Pages/List/List'
import StateAnim from './Pages/StateAnim/StateAnim'
import Scroll from './Pages/Scroll/Scroll'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="global-container">
        <Navbar />

        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/stateAnim" exact component={StateAnim} />
          <Route path="/scroll" exact component={Scroll} />
        </Switch>
      </div>
    </Router>

  )
}

export default App
