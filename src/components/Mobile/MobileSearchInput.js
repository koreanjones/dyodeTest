import React from 'react';
const SearchBar = () => {
    return (
        <div className='search-bar'>
            <form>
            <input  className='search-submit-input' type="text" /><button className="search-submit">GO</button>
            </form>
        </div>
    )
}
export default SearchBar;