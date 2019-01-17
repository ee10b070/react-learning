import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText,Breadcrumb,BreadcrumbItem} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
    console.log("dishimage", dish.name, dish.image)
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    if (comments != null) {
        const commentsList = comments.map((comment) => {
            return (
                <li className="list-unstyled">
                    {comment.comment}
                    <div>- -{comment.author}</div>
                </li>

            );
        });
        const commmentsFinal = <div>
            <h4>Comments</h4>
            {commentsList}
        </div>;
        return commmentsFinal;
    } else {
        return (<div></div>);
    }
}
const Dish = (props) => {
    if (props.dish != null) {
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
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div></div>)
    }
}


export default Dish;