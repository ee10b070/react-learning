import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button } from "reactstrap";
import Menu from "./MenuComponent";
import Dish from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {
    const Homepage = () => {
      return(
        <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const ContactPage = ()  =>{
      return(
        <Contact/>
      );
    }

    const DishWithId =  ({match})=>{
          return(<Dish dish = {this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
                       comments = {this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
          />);
    }
    return (
      <div>
        <Header />
        <Switch>
           <Route path ="/home" component = {Homepage}/>
           <Route exact path = "/menu" component = {()=><Menu dishes = {this.state.dishes} />}/>
           <Route path= "/menu/:dishId" component= {DishWithId}/>
           <Route path = "/contactus" component = {ContactPage}/>
           <Route path="/aboutus" component = {()=><Dish dish = {this.state.dishes[0]}/>}/>
           <Redirect to ="home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
