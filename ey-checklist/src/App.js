import logo from './logo.svg';
import './App.css';
import VR from './components/Vr'
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <VR/>
    </div>
  );
}

export default App;
