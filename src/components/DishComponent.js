import React, {Component} from 'react';
import {Card,CardBody,CardLink,CardTitle,CardImg,CardText} from "reactstrap";

class Dish extends Component{
    
    constructor(props){
       super(props);
       this.state = {

       }
    }
    renderDish(dish){
        return(
            <Card>
                    <CardImg width = "100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle> 
                    <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
               </Card>
        );
    }
    renderComments(dishes){
        if(dishes != null){
      const commentsList =  dishes.map((dish)=>{
           return(
               <li className = "list-unstyled">
                {dish.description} 
                <div>- -{dish.name}</div>
               </li>
               
           );
       });
       const commmentsFinal  = <div>
           <h4>Comments</h4>
            {commentsList}
       </div> ;
        return commmentsFinal;
    } else {
        return (<div></div>);
    }
    }


    render(){
        if(this.props.dish != null){
        return(
            <div className = "row">
            <div className = "col-xs-12 col-xm-12 col-md-5 m-1">
               {this.renderDish(this.props.dish)}
            </div>
            <div className = "col-xs-12 col-xm-12 col-md-5 m-1">
               <ul>{this.renderComments(this.props.dishList)}</ul>
            </div>
            </div>
        );
        }else {
           return(<div></div>)
        }
    }

}

export default Dish;