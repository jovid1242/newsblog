import React from "react"

function RitghtSidebr() {
    const recentPost = {
        id: 2,
        name: "This Is the Trader Some of Deutsche Bank's Most Embarrassing Messages",
    }
    return (
        <div>
            <section className="right-sidebar">
                <div className="col-md-6">
                    <div className="widget-recent-posts">
                        <div className="r-widget-title">
                            <img src="images/icons/ribbon.png" alt="" />
                            <h2>Recent Posts</h2>
                        </div>
                        <div className="recent-post">
                            <a className="recent-post-img" href="#"><img src="images/widget-recent-post.jpg"
                                alt="" /></a>
                            <h3><a href="#">{recentPost.name} </a></h3>
                            <div className="post-info">
                                <a className="post-comments" href="#"><img src="images/icons/comment.png"
                                    alt="" />12</a>
                                <img className="post-time-img" src="images/icons/calendar.png" alt="" /><time
                                    className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                        </div>

                    </div>
                    <div className="widget-about">
                        <div className="w-about-title">
                            <h2>About Me</h2>
                        </div>
                        <a href="#">
                            <img src="images/profile-image.png" alt="" />
                        </a>
                        <h3>
                            <a href="#">Professional Art Director<br />Lauren Dassy</a>
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default RitghtSidebr;