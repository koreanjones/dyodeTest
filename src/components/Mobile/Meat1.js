import React from 'react';

const Meat = () => {
    return (
        <div className="meat-1" onClick={() => {activateMobileMenu()}} >
        </div>
    )
}

function activateMobileMenu(){
    const mobileMenu = document.getElementsByClassName('rectangle-72');
    const mobileMenuBottom = document.getElementsByClassName('rectangle-258');
    const fadedBackground = document.getElementById('menu-mobile');

    mobileMenuBottom[0].style.visibility = "visible";
    mobileMenu[0].style.visibility = "visible";
    fadedBackground.style.visibility = "visible";
}
export default Meat;