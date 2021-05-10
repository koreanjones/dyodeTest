import React from 'react';

const Loupe1 = () => {
    return (
        <div className="loupe-1" onClick={() => {activateSearchBar()}}>
        </div>
    )
}
function activateSearchBar(){
    const inputBar = document.getElementsByClassName('search-bar');
    if(!inputBar[0].style.visibility || inputBar[0].style.visibility === 'hidden'){
        inputBar[0].style.visibility = 'visible';
    } else {
        inputBar[0].style.visibility = 'hidden';
    }
    
}
export default Loupe1;