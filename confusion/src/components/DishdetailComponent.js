import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


   

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
                
               <div className="row">

                  <div className="col-12 col-md-5 m-1">
                   < RenderDish dish={oneDish} />
                  </div>

                  <div className="col-12 col-md-5 m-1">
                      
                      <RenderComments comments={comments}/>
                  </div>

               </div>
            )
        }
    
    export default DishDetail;