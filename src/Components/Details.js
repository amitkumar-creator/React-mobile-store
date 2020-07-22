import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link}  from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id, company,img, info, price, title, inCart} = value.detailProduct;
                    return(
                        <div className="conatiner py-5">
                        {/* Title Start*/}
                          <div className="row">
                              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                 <h2>{title}</h2>
                              </div>
                          </div>
                          {/* Title end*/}
                          {/* Product info start*/}
                          <div className="row">
                             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <img src={img} className="img-fluid" alt="product" />
                             </div>
                             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h3>Modal : {title}</h3>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by : <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="txet-blue">
                                    <strong>
                                        price ; <span>$</span>
                                        {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    some info about product : 
                                </p>
                                <p className="text-muted lead">{info}</p>
                                <div className="">
                                   <Link to='/'>
                                       <ButtonContainer>
                                           back to product
                                       </ButtonContainer>
                                   </Link>
                                   <ButtonContainer
                                      cart
                                      disabled = {inCart ? true : false}
                                      onClick = {()=>{
                                          value.addToCart(id);
                                          value.openModal(id);
                                      }}
                                       >
                                       {inCart ? 'inCart' : "add to cart"}
                                   </ButtonContainer>
                                </div>
                             </div>
                          </div>
                          {/* Product info end*/}
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
