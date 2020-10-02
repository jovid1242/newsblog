import React from "react";

function Login() {
    const state = {
        name: 'Логин',
        pass: 'Пароль'
    }
    console.log(state.name);
    return (
        <div className="single-post-page single-page">
            <div className="container">
                <div className="s-post-page">
                    <div className="s-post-header clearfix">
                        <div className="col-md-24">
                            <img src="images/icons/single-page-1.jpg" alt="" />
                            <div className="s-post-title">
                                <h1>Log in</h1>
                            </div>
                        </div>
                    </div>
                    <div className="s-post-content">
                        <div className="container">
                            <div className="col-md-offset-6 col-md-12">
                                <div className="s-post-text">
                                    <div className="contact clearfix">
                                        <form className="contact-form" action="#" method="post">
                                            <input type="text" placeholder={state.name} />
                                            <input type="text" placeholder={state.pass} />
                                            <input type="submit" value="Авторизация" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;