import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="lauren-logo">
            <div className="container">
                <Link to="/"><img src="images/logo.png" alt="Main Logo" /></Link>
            </div>
        </div>
    );
}

export default Logo;