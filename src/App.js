import React from "react";
import Menu from './components/menu';
import SideBar from './components/sideBar';
import Login from './components/login';
import Contract from './components/parts/contracts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useState, useEffect, useContext} from 'react';
// import AuthService from './services/AuthService';
// import {UserContext} from './context/currentUser'

import './App.css';

function App() {
  return (
    <div>
    <Switch>
    {true ? 
     <Route path="/login">
     <Login />
     </Route> :
     <div>
        <body class="layui-layout-body">
          <div class="layui-layout layui-layout-admin">
            <Menu/>   
            <SideBar/>    
            <Route exact path="/">
              <div class="layui-body">     
                  <div>内容主体区域</div>

                </div>
            </Route>
            <Route path="/contracts">
              
              <Contract/>
            </Route>

            
          </div>
      </body>
      </div>}
    </Switch>
      </div>
    
  );
}

export default App;
