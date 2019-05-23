import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import Food from './components/food.jsx';
// import Err from './components/404Page.jsx';
import Navgation from './components/Nav.jsx';
import Login from './components/login.jsx';
import register from './components/registered.jsx';

//  import MealsList from './components/mealsList.jsx';




class App extends React.Component {

render(){
  return (
    
    <div className="App">
     <BrowserRouter>
      <Navgation/>    
      <Route  path="/" component={Food} exact />
        <Route  path="/login" component={Login} exact /> 
        <Route  path="/registered" component={register} exact />      
     </BrowserRouter>
      </div>
  );
  }
}

export default App;