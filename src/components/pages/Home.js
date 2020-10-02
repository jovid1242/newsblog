import React from "react";
import LeftSidebar from '../post/LeftSidebar';
import RitghtSidebar from '../post/RightSidebar';
import Posts from '../post/Posts';

function Home() {
    return (
        <div className="theme-layout">
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <LeftSidebar />
                        <Posts />
                        <RitghtSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;