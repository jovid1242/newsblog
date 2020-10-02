import React from 'react';
import Search from '../icon/Search';
import Icons from '../icon/Icons';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className="main-header">
                <div className="lauren-main-menu">
                    <div className="container">
                        <nav className="lauren-menu">
                            <ul className="main-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><a to="#">Категория</a>
                                    <ul>
                                        <li><Link to="#">Full Width</Link></li>
                                        <li><Link to="#">Full Width</Link></li>
                                        <li><Link to="#">Full Width</Link></li>
                                        <li><Link to="#">Full Width</Link></li>
                                        <li><Link to="#">Full Width</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/post">Post</Link></li>
                                <li><Link to="/contacts">Contact</Link></li>
                                <li><Link to="/login" id="login">Log in</Link></li>
                            </ul>
                            <Search />
                            <Icons />
                        </nav>
                    </div>
                </div>
                <Logo />
            </header>

            <div className="responsive-menu">
                <header>
                    <ul>
                        <li><a className="menu-button" href="#"><i className="fa fa-close"></i></a></li>
                    </ul>
                </header>
                <ul className="mobile-menu">
                    <li><Link to="/">Home</Link ></li>
                    <li><Link to="/about">About</Link ></li>
                    <li><a to="#">Pages</a>
                        <ul>
                            <li><Link to="#">Full Width</Link></li>
                            <li><a href="404-error.html">404 Page</a></li>
                        </ul>
                    </li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                    <li><Link to="/login" id="login">Sing in</Link></li>
                </ul>
            </div>
        </div >
    );
}

export default Header;