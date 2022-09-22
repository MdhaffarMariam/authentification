import './App.css';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './components/SignIn';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
 
   <Router>
    <Switch>
      <Route exact path="/" component={SignUp}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/Profile" component={Profile}/>
    </Switch>
    
    </Router> 
    </div>
  );
}

export default App;
