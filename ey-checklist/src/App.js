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
import Task5 from './components/Task5'
import Admin from './components/Admin'
import Quiz from './components/Quiz'
import Shop from './components/Shop'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
        {/* <Route exact path='/' component={Login}></Route> */}
          <Route exact path='/' component={VR}></Route> 
          <Route exact path='/login' component={Login}></Route> 
          <Route exact path='/task_1' component={Tasks}></Route> 
          <Route exact path='/task_2' component={Task2}></Route>
          <Route exact path='/task_3' component={Task3}></Route>
          <Route exact path='/task_4' component={Task4}></Route>
          <Route exact path='/task_5' component={Task5}></Route>
          <Route exact path='/final' component={Final}></Route>  
          <Route exact path='/quiz' component={Quiz}></Route>
          <Route exact path='/admin' component={Admin}></Route>
          <Route exact path='/shop' component ={Shop}></Route>
          <Route exact path='/dash/:taskID' component={Dashboard}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
