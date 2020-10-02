import React from "react";

function Search() {
    return (
        <ul className="responsive-menu-bar">
            <li className="menu-button"><a href="#"><i className="fa fa-bars"></i></a></li>
            <li className="search-icon"><input className="search-box" placeholder="Search Anything.."
                type="text" />
                <i className="fa fa-search"></i></li>
        </ul>
    );
}

export default Search;