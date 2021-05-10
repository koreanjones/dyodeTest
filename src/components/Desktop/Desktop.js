import React from 'react';
import PromoBarDesktop from './PromoBarMobile';
import PrimaryStatic from './PrimaryStatic';
import DesktopMenu from './DesktopMenu';
import SearchBar from './DesktopSearchInput';
// import './desktop.css';

const Mobile = () =>  {
    return (
        <div className='desktop-container'>
            <PromoBarDesktop/>
            <SearchBar />
            <DesktopMenu />
            <img className='hero-image-1'/>
            <div className="rectangle-252">
                <h1 className="shop-new-text">Shop New Arrivals</h1>
                <p>Our coolest new items are waiting for you!</p>
                <PrimaryStatic />
            </div>
            <img className='womens-image-1' />
                <img className='mens-image-1' />
                <img className='accessories-image-mobile-1' />
                <div className='rectangle-2'>
                    <span>Women's</span>
                </div>
                <div className='rectangle-253'>
                    <span>Men's</span>
                </div>
                <div className='rectangle-254'>
                    <span>Accessories</span>
                </div>
                <h1 className="shop-new-text-2">Shop New Arrivals</h1>
                <span className='product-image-1-2'></span>
                <span className='product-image-1-3'></span>
                <h2 className='product-title'>Product Title</h2>
                <p className='product-desc'>WOMEN'S T-SHIRT</p>
                <span className='price'>$19.99</span>
                <h2 className='product-title-2'>Product Title</h2>
                <p className='product-desc-2'>WOMEN'S T-SHIRT</p>
                <span className='price-2'>$19.99</span>
                <img className='hero-image-2' />
                <div className="rectangle-255">
                    <h1 className="shop-new-text">Our Favorite Tees</h1>
                    <p>Everyday tees you need!</p>
                    <PrimaryStatic />
                </div>
                <h1 className='follow-title'>Follow Us On Instagram!</h1>
                <span className='social-image' id='social-image-6'/>
                <span className='social-image' id='social-image-7'/>
                <span className='social-image' id='social-image-8'/>
                

                <div className='rectangle-5'>
                </div> 
                <span className='email-vector-image'></span>
                <h2 id='sign-up'>Sign Up and Stay Connected</h2>
                <p id='signup-news-letter'>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
                <div className='subscribe-button'>
                    <span>Subscribe</span>
                </div>
                <div className='rectangle-256'>
                    <span id='customer-service'>Customer Service</span>
                    <ul className='accessibility-contact'>
                        <li>Accessibility</li>
                        <li>Contact Us</li>
                        <li>Return Policy</li>
                        <li>FAQ</li>
                        <li>Gift Certificate</li>
                        <li>Wishlist</li>
                    </ul>
                    <span id='company'>Company</span>
                    <span id='follow'>Follow Us</span>
                    <span id='facebook-icon' />
                    <span id='instagram-icon' />
                    <span id='twitter-icon' />

                </div>  
        </div>
        
    )

}
export default Mobile;


