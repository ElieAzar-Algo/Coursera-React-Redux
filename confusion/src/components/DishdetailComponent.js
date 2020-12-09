import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label,Modal, ModalHeader,ModalBody} from 'reactstrap';
import { Control, LocalForm, Errors,  } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }



    render(){
        return (
            <>
                 <Button  outline onClick={this.toggleModal} type="submit" color="original" className="text-muted" ><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>


            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
                <ModalBody>
                 <LocalForm   onSubmit={(values) => this.handleSubmit(values)}>
                 <Label htmlFor="rating">Rating</Label>
                 <Row className="form-group">
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        options={1,2,3,4,5}
                                        className="form-control">
                                             <option>1</option>
                                             <option>2</option>
                                             <option>3</option>
                                             <option>4</option>
                                             <option>5</option>
                                     </Control.select>
                                </Col>
                            </Row>

                            <Label htmlFor="name">Your Name</Label>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required, ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                             <Label htmlFor="comment">Comment</Label>
                             <Row className="form-group">
                                 <Col md={12}>
                                    <Control.textarea rows='6' model=".comment" id="comment" name="comment" className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
                            </ModalBody>
                            </Modal>

            </>
        )
    }
}
   




      function  RenderComments({comments}){
            if (comments != null)
                return(
                    <div>
                    <h4>Comments</h4>
                    {comments.map((com)=> {
                        return(
                            <div key={com.id}>
                            <div  className="list-unstyled">
                                <p>{com.comment}</p>
                                <p>-- {com.author},{com.date}</p>
                            </div>
                            </div>
                        )
                    })}
                    <CommentForm/>
                    </div>
                   
                );
            else
                return(
                    <div></div>
                );

        }


        function RenderDish({dish}) {
            if (dish != null)
                return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }
    
      const DishDetail =(props)=>{


        
            let comments
            const oneDish=props.dish
           if (oneDish!==undefined){
              comments=oneDish.comments
               console.log(comments)
               }
               return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
        }
    
    export default DishDetail;