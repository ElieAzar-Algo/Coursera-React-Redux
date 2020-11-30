import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
            selectedCommentsList:null
        }
    }

    onDishSelect(dish,comments) {
        this.setState({ selectedDish: dish});
        this.setState({ selectedCommentsList: comments});
    }
    


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                
              <div  key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() =>{ let comments=dish.comments;this.onDishSelect(dish,comments)}}>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
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

                <DishDetail dish={this.state.selectedDish} comments={this.state.selectedCommentsList} />
            </div>
        );
    }
}
        
        export default Menu;