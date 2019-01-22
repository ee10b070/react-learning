import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText,Breadcrumb,BreadcrumbItem,Button} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentFormComponent";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderDish({ dish }) {
    console.log("dishimage", dish.name, dish.image)
    return (
        <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments,addComment,dishId }) {
    if (comments != null) {
        const commentsList = comments.map((comment) => {
            return (
                <li className="list-unstyled">
                    {comment.comment} <span className = "fa fa-edit"></span>
                    <div>- -{comment.author}</div>
                </li>

            );
        });
        const commmentsFinal = <div>
            <h4>Comments</h4>
            {commentsList}
            <CommentForm dishId={dishId} addComment={addComment}/>
        </div>;
        return commmentsFinal;
    } else {
        return (<div></div>);
    }
}
const Dish = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active > {props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-xm-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-xs-12 col-xm-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div></div>)
    }
}


export default Dish;