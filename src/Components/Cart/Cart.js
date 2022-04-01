import React from 'react';

const Cart = (props) => {
       const {random} = props;
     console.log(random);

    return (
      <div>
          
        <div className='cart'>
         <p>{props.random.Brand}</p>
        </div>
      </div>
    );
};

export default Cart;