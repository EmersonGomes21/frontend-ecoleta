import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Createpoint from './pages/CreatePoint';

const Routes = ()=>{
  
  return(
    <BrowserRouter>
     <Route path="/" exact component={Home} />
     <Route path="/create-point" component={Createpoint}/>
    </BrowserRouter>
  );
}

export default Routes;