import React, {Component} from "react";

import { Navbar , NavbarBrand, Button,Jumbotron}  from "reactstrap";

class Header extends Component{


    render(){
        return(
            <>
            <Navbar dark > 
     <div className= "container">
       <NavbarBrand href="/"> Confusion  Application </NavbarBrand>
     </div>
     </Navbar>
     <Jumbotron>
    <div className = "container">
       <div className = "row row-header">
           <div className = "col-12 col-sm-6">
            <h1>Rustorante Con Fusion</h1>
            <p>Since the hotel industry has been operational for centuries, various hotelier quotes exist that can help to explain how the industry has changed over the many years.</p>
           </div>
       </div>
    </div>
    </Jumbotron>       
            </>
        );
    }
}
export default Header;