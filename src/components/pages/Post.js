import React, { useState } from 'react';
import PostTags from '../post/postComponents/PostTags';
import PostLike from '../post/postComponents/PostLike';
import PostAuthor from '../post/postComponents/PostAuthor';
import axios from 'axios';

function Post() {
    const [posts, setPosts] = useState([])
    axios.get('https://swapi.dev/api/films/')
        .then(function (response) {
            setPosts(response.data.results.map(item => <li>{item.title}</li>))

            // console.log(response.data.results.map(item => [item.title]))
            // console.log(posts);
        })
        .catch(function (error) {
            console.log(error);
        })

    return (
        <div className="single-post-page">
            <div className="container">
                <div className="s-post-page">

                    <div className="s-post-content">
                        <div className="container">
                            <div className="col-md-offset-6 col-md-12">
                                <img src="images/content-image-1.jpg" alt="" />
                                <div className="s-post-text">
                                    <ul>
                                        {posts}
                                    </ul>
                                </div>
                                <PostTags />
                                <PostAuthor />
                                <PostLike />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;