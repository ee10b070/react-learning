import React,{Component} from "react";
import {Button,Modal,ModalBody,Form,FormGroup,ModalHeader,Label,Input,Row} from "reactstrap";
import {Control, LocalForm,Errors} from "react-redux-form";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommetForm extends Component{
    constructor(props){
        super(props);
        this.state= {
            isModalOpen: false
        }
        this.toggleModal =this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
      }

      handleLogin(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    
    }


      render(){
          return(
          <>
          <Button dark onClick={this.toggleModal} color = "primary"> <i className="fa fa-pencil"></i> Submit Comment</Button>
          <Modal isOpen = {this.state.isModalOpen} toggle ={this.toggleModal}>

                    <ModalHeader toggle ={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm  onSubmit={(values)=>this.handleLogin(values)}>
                            <Row className = "form-group"> 
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model = ".rating "id="rating" name="rating"  className = "form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                </Control.select>
                            </Row>
                            <Row className = "form-group"> 
                                <Label htmlFor="yourname">Your Name</Label>
                                <Control.text model = ".author"  id="author" name="author"
                                    className = "form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                      <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                           </Row>

                             <Row className = "form-group"> 
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model = '.comment' rows = "4" id="comment" name="comment"
                                    className = "form-control" />
                           </Row>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </>
          );
      }

}

export default CommetForm;