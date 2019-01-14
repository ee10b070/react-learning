import React , { Component }from "react";
import { Media } from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle, CardLink} from "reactstrap";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }
    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }
    renderAlert(dish){
        alert(dish.name);
    }
    renderDish(dish){
       if(dish != null){
           return(
               <Card>
                    <CardImg width = "100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle> 
                    <CardText>{dish.description}</CardText>
                    <CardLink href="#">Card Link</CardLink>
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

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className = "row" onClick = {()=>this.renderAlert(this.state.selectedDish)}>
               {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;
