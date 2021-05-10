import React from 'react';

const MobileMenu = () => {
    
    return (
        <div >
        <div id="menu-mobile"></div>
        <div className='rectangle-72'>
            <span id='hamburger-icon' onClick={() => {closeMobileMenu()}}/>
            <span id='tops' onClick={() => {closeTopsMenu()}}>TOPS</span>
            <ul id='topList'>
                <li>T-Shirts</li>
                <li>Long Sleeve</li>
                <li>Short Sleeve</li>
            </ul>
            <span id='bottoms' onClick={() => {closeBottomsMenu()}}>BOTTOMS</span>
            <ul id='bottomList'>
                <li>Shorts</li>
                <li>Pants</li>
            </ul>
        </div>
        <div className='rectangle-258'>
            <span className='mobile-menu-image' />
            <ul className='mobile-menu-list'>
                <li>Shop All</li>
                <li>New Arrivals</li>
                <li>Favorites</li>
                <li>Sale</li>
            </ul>
        </div>
        </div>
    
    )
}

function closeMobileMenu(){
    const mobileMenu = document.getElementsByClassName('rectangle-72');
    const mobileMenuBottom = document.getElementsByClassName('rectangle-258');
    const fadedBackground = document.getElementById('menu-mobile');
    const topsMenu = document.getElementById('topList');
    const bottomsMenu = document.getElementById('bottomList');
    const bottomTitle = document.getElementById('bottoms');

    fadedBackground.style.visibility = "hidden";
    mobileMenuBottom[0].style.visibility = "hidden";
    mobileMenu[0].style.visibility = "hidden";
    topsMenu.style.display = "none";
    bottomsMenu.style.display = "none";
    bottomTitle.style.top = "93px";
    bottomsMenu.style.top = "135px";
    mobileMenuBottom[0].style.top = "300px";
    mobileMenu[0].style.height = "400px"
    
}
function closeTopsMenu(){
    const topsMenu = document.getElementById('topList');
    const bottomTitle = document.getElementById('bottoms');
    const bottomsMenu = document.getElementById('bottomList');
    const mobileMenuBottom = document.getElementsByClassName('rectangle-258');
    const mobileMenu = document.getElementsByClassName('rectangle-72');

    
    if(!topsMenu.style.display || topsMenu.style.display === 'none'){ 
        topsMenu.style.display = "block";
        bottomTitle.style.top = "214px";
        bottomsMenu.style.top = "254px";
        mobileMenuBottom[0].style.top = "400px";
        mobileMenu[0].style.height = "500px"
    } else if (topsMenu.style.display === 'block' && bottomsMenu.style.display === 'none'){
        topsMenu.style.display = "none";
        mobileMenuBottom[0].style.top = "300px";
        bottomTitle.style.top = "93px";
        bottomsMenu.style.top = "135px";
        mobileMenu[0].style.height = "400px"
    } else if (topsMenu.style.display === 'none' && bottomsMenu.style.display === 'block'){
        topsMenu.style.display = "block";
        mobileMenuBottom[0].style.top = "500px";
    } else {
        topsMenu.style.display = "none";
        mobileMenuBottom[0].style.top = "300px";
        bottomTitle.style.top = "93px";
        bottomsMenu.style.top = "135px";
        mobileMenu[0].style.height = "400px"
    
    }

}
function closeBottomsMenu(){
    const topsMenu = document.getElementById('topList');
    const bottomTitle = document.getElementById('bottoms');
    const bottomsMenu = document.getElementById('bottomList');
    const mobileMenuBottom = document.getElementsByClassName('rectangle-258');
    const mobileMenu = document.getElementsByClassName('rectangle-72');
    
    if(!bottomsMenu.style.display || bottomsMenu.style.display === 'none'){ 
        bottomsMenu.style.display = "block";
        mobileMenuBottom[0].style.top = "400px";
        mobileMenu[0].style.height = "500px"

    } else if (bottomsMenu.style.display === 'none' && topsMenu.style.display === 'block'){
        bottomsMenu.style.display = "block";
        mobileMenuBottom[0].style.top = "550px";
        bottomTitle.style.top = "214px";
        bottomsMenu.style.top = "254px";
    } else if (topsMenu.style.display === 'block' && bottomsMenu.style.display === 'block'){
        bottomsMenu.style.display = "none";
        mobileMenuBottom[0].style.top = "400px";
        bottomTitle.style.top = "214px";
        bottomsMenu.style.top = "254px";
    } else if (topsMenu.style.display === 'none' && bottomsMenu.style.display === 'block'){
        bottomsMenu.style.display = "none";
        mobileMenuBottom[0].style.top = "300px";
        bottomTitle.style.top = "93px";
        bottomsMenu.style.top = "135px";
        mobileMenu[0].style.height = "400px"
    } else if (topsMenu.style.display === 'none' && bottomsMenu.style.display === 'none'){
        bottomsMenu.style.display = "block";
        mobileMenuBottom[0].style.top = "300px";
        bottomTitle.style.top = "93px";
        bottomsMenu.style.top = "254px";
    }else {
        bottomsMenu.style.display = "none";
        mobileMenuBottom[0].style.top = "300px";
        mobileMenu[0].style.height = "400px"
    }
}
export default MobileMenu;