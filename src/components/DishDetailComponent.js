import React from 'react';
import {Card,CardBody,CardLink,CardTitle,CardImg,CardText} from "reactstrap";

 
 function RenderDish({dish}){
         return(
                <Card>
                        <CardImg width = "100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle> 
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                   </Card>
         );
 }

 function RenderComments({comments}) {
    if(comments != null){
        const commentsList =  comments.map((comment)=>{
             return(
                 <li className = "list-unstyled">
                  {comment.comment} 
                  <div>- -{comment.author}</div>
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
  const Dish = (props) => {
    if(props.dish != null){
        return(
            <div className="container">
            <div className = "row">
            <div className = "col-xs-12 col-xm-12 col-md-5 m-1">
             <RenderDish dish = {props.dish}/>
            </div>
            <div className = "col-xs-12 col-xm-12 col-md-5 m-1">
             <RenderComments comments = {props.dish.comments}/>
            </div>
            </div>
            </div>
        );
        }else {
           return(<div></div>)
        }
  }
        

export default Dish;