import React from 'react';
import Meat1 from './Meat1';
import Loupe1 from './Loupe1';
import User1 from './User1';
import ShoppingCart1 from './ShoppingCart1';

const PromoBarMobile = () =>  {
    return (

        <div className ='promo-bar-mobile'>
            <div className='rectangle-250'>
            <p className='promo-bar-text'>FREE SHIPPING ON ALL ORDERS</p>
        </div>
        <div className='rectangle-251'>
            <Meat1 />
            <Loupe1 />
            <User1 />
            <ShoppingCart1 />
            <span className='mobile-logo' />
            
        </div>
        </div>
    
    )

}
export default PromoBarMobile;