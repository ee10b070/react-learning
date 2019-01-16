import React, { Component } from 'react';
import { Navbar , NavbarBrand, Button,Card}  from "reactstrap";
import Menu from "./MenuComponent";
import Dish from "./DishDetailComponent";
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props){
     super(props);

     this.state = {
       dishes: DISHES,
       selectedDish: null
     }
  }

  onDishSelect(dishId){
    this.setState({ selectedDish: dishId});
}

  render() {
    return (
      <div>
     <Navbar dark color = "primary" > 
     <div className= "container">
       <NavbarBrand href="/"> Confusion  Application </NavbarBrand>
       <Button color="success">Success</Button>
     </div>
     </Navbar>
     <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)}/>
     <Dish dish= {this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
 