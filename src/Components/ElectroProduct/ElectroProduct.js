import React from 'react';
import './ElectroProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const ElectroProduct = (props) => {
const {Brand,Model,price,image} = props.product;
   
    return (
        <div className='product'>
            { <img src={image} alt="Fridge" /> }
           <div className='product_details'>
           <h5>Brand : {Brand}</h5>
            <p>Model : {Model}</p>
            <p>Price : {price}tk</p>
           </div>
           <div className='button'>
                <button className='click' onClick={() => props.AddtoCarthandle(props.product)}>Add To Cart<span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
                
            </div>
        </div>
    );
};

export default ElectroProduct;