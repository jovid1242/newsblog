import React from "react";
import PostCategory from '../post/postComponents/PostCategory';
import PostLike from '../post/postComponents/PostLike';
import PostAuthor from '../post/postComponents/PostAuthor';
import { Link } from 'react-router-dom';


function Posts() {

    const post = {
        id: 1,
        namePost: 'These Are the Happiest Countries in the World',
        comPost: ' I have always been told to believe in myself. But nobody has ever told me to believe in other people.I think that’s a pretty fundamental problem in our world.But nobody has ever told me to believe in.',
        images: 'images/normal-post-1.jpg',
    }
    return (
        <section className="posts">
            <div className="col-md-12">
                <div className="normal-post">
                    <Link to="/post"><img src={post.images} alt="" /></Link>
                    <div className="post-content">
                        <div className="post-info">
                            <PostCategory />
                            <img className="post-time-img" src="images/icons/calendar.png" alt="" />
                            <time className="post-time"
                                dateTime="2020">2 hours ago</time>
                        </div>
                        <h2 className="post-title"><a href="#">{post.namePost}</a></h2>
                        <p>{post.comPost}</p>
                        <div className="post-footer">
                            <PostAuthor />
                            <PostLike />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Posts;