import React from "react";

function Icons() {
    return (
        <ul className="menu-icons">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i className="fa fa-rss"></i></a></li>
            <li className="search-icon"><input className="search-box" placeholder="Search Anything.."
                type="text" /><i className="fa fa-search"></i></li>
        </ul>
    );
}

export default Icons;