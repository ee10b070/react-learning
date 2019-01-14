import React, { Component } from 'react';
import { Navbar , NavbarBrand, Button,Card}  from "reactstrap";
import Menu from "./components/MenuComponent";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     <Navbar dark color = "primary"> 
     <div className= "container">
       <NavbarBrand href="/">  Restore and confusion </NavbarBrand>
       <Button color="success">Success</Button>
     </div>
     </Navbar>
     <Menu/>
      </div>
    );
  }
}

export default App;
