import React , { Component }from "react";
import { Media } from 'reactstrap';
import Dish from "./DishComponent";
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle, CardLink} from "reactstrap";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        console.log("menucomponent console is called ");
    }
    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }
    componentDidMount(){
        console.log("menucomponent componentDidMount is called ");
    }
    renderDish(dish){
       if(dish != null){
           return(
               <Card>
                    <CardImg width = "100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle> 
                    <CardText>{dish.description}</CardText>
                    </CardBody>
               </Card>
           );
       } else {
           return(<div>No Dish Selected </div>);
       }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick= {() => this.onDishSelect(dish)}> 
                      <CardImg width = "100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        console.log("menucomponent render is called ");
        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
           
            <Dish dish = {this.state.selectedDish} dishList = {this.props.dishes}/>
        
           
          </div>
        );
    }
}

export default Menu;
