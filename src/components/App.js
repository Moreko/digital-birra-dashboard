import React from 'react';
import SideBar from './SideBar';
import Content from './Content';
import {BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom'

function App(){
  return(
    <React.Fragment>
        <BrowserRouter>
      <div id="wrapper">
        <SideBar />
        <Content />
      </div>
      </BrowserRouter>
     
    </React.Fragment>
  )
}
export default App;