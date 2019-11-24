import React from 'react';   
import './App.css';  
import Login from './Login';  
import Register from './Register';  
import Dashboard from './Dashboard';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
function App() {  
  return (  
    <Router>    
      <div className="container">       
          <div className="navbar" > 
			<h2>Capstone Teamwork</h2>		  
            <ul>  
              <li>    
                <Link to={'/Login'} className="nav-link">Login</Link>    
              </li>    
              <li>    
                <Link to={'/Register'} className="nav-link">Register</Link>    
              </li>    
            </ul>    
          </div>    
			<br />    
        <Switch>    
          <Route exact path='/Login' component={Login} />    
          <Route path='/Register' component={Register} />    
        </Switch>    
        <Switch>  
        <Route path='/Dashboard' component={Dashboard} />    
        </Switch>  
      </div>    
    </Router>   
  );  
}  
export default App;
