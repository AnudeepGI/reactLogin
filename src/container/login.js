import React from "react";

import { loginService } from '../services/login';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            signin: true,
            email: '',
            password: ''
        }
    }

    emailChangedHandler = e => this.setState({ email: e.target.value });
    passwordChangedHandler = e => this.setState({ password: e.target.value });

    handleClick = () => {
        this.setState({ signin: false });

        loginService.login()
            .then(data => {
                console.log(data);
                this.setState({ signin: true });
            }).catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="App" >
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign In</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" value={this.state.email} onChange={this.emailChangedHandler} id="inputEmail" className="form-control" placeholder="Email address" required />
                                        </div>
                                        <div className="form-label-group">
                                            <input type="password" value={this.state.password} onChange={this.passwordChangedHandler} id="inputPassword" className="form-control" placeholder="Password" required />
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" >Remember password</label>
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" disabled={!this.state.signin} type="button" onClick={this.handleClick} >Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Login;
