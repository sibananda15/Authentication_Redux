import React from 'react';
import Login from './Routes/Login'
import Home from './components/Employee'
import Employee from './components/Employee'
import Employer from './components/Employer'
import SignUp from "./Routes/SignUp"
import {BrowserRouter, Route,Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Route path ='/' exact component={Home}/> */}
      <Link to='/signup'>Sign Up</Link>
      <Link style={{marginLeft:"10px"}}  to='/login'>Login</Link>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/employee' component={Employee}/>
      <Route path="/employer" component={Employer}/>
      {/* <SignUp /> */}
    
      
    </div>
  );
}

export default App;
