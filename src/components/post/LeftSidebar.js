import React from "react"

function LeftSidebar() {
    return (
        <div>
            <section className="left-sidebar">
                <div className="col-md-6">
                    <div className="widget widget-featured-post">
                        <h2 className="f-widget-title">Feature Story</h2>
                        <div className="f-post-content">
                            <h2 className="f-post-title">
                                <a href="#">Global Temperature Records Just Got Crushed
                                            Again</a></h2>
                            <p>It just keeps<br />getting hotter.</p>
                            <div className="post-info">
                                <a className="post-comments" href="#"><img src="images/icons/white-comment.png"
                                    alt="" />12</a>
                                <img className="post-time-img" src="images/icons/white-calendar.png" alt="" />
                                <time className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                        </div>
                    </div>
                    <div className="widget widget-mini-post">
                        <a className="m-post-image" href="#"><img src="images/mini-post-1.jpg" alt="" /></a>
                        <div className="m-post-content">
                            <div className="post-info">
                                <span className="post-category"><a href="#">TECH</a></span>
                                <a className="post-comments" href="#"><img src="images/icons/comment.png"
                                    alt="" />12</a>
                                <img className="post-time-img" src="images/icons/calendar.png" alt="" /><time
                                    className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                            <h2 className="m-post-title"><a href="#">Apple Watch Review: You’ll Want One, but You
                                            Don’t Need One</a></h2>
                        </div>
                    </div>
                    <div className="widget widget-mini-post-2">
                        <a className="m-post-image" href="#"><img src="images/mini-post-2.jpg" alt="" /></a>
                        <div className="m-post-content">
                            <div className="post-info">
                                <span className="post-category"><a href="#">NEWS</a></span>
                                <a className="post-comments" href="#"><img src="images/icons/comment.png"
                                    alt="" />12</a>
                                <img className="post-time-img" src="images/icons/calendar.png" alt="" />
                                <time className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                            <h2 className="m-post-title"><a href="#">These Are the Happiest Countries in the
                                            World</a></h2>
                            <p>The U.S. ranks No. 15 among 158 countries in the World Happiness Report 2015</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default LeftSidebar;