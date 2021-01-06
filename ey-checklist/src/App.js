import './App.css';
import VR from './components/Vr'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Tasks from './components/Tasks'
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';
import Task2 from './components/Task2';
import Final from './components/Final';
import Task3 from './components/Task3';
import Task4 from './components/Task4'
import Admin from './components/Admin'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
        {/* <Route exact path='/' component={Login}></Route> */}
          <Route exact path='/' component={Task4}></Route> 
          <Route exact path='/login' component={Login}></Route> 
          <Route exact path='/tasks' component={Tasks}></Route> 
          <Route exact path='/task_2' component={Task2}></Route>
          <Route exact path='/final' component={Final}></Route>  
          <Route exact path='/dash/:taskID' component={Dashboard}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
