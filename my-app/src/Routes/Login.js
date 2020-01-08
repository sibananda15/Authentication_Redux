import React, { Component } from 'react'
import { connect } from 'react-redux';
import {signupUser,loginUser,signoutUser} from "../redux/action"
import {Redirect} from "react-router-dom"
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""


        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleClick = () => {
        console.log(this.props)
        this.props.loginUser(this.state);
        setTimeout(() => {if (!this.props.isAuth) {
            alert("Invalid Credentials");
        }}, 300);
        this.setState({
            username: '',
            password: ''
        });

    }
    handleLogout=()=>{
        this.props.signoutUser()
    }
    render() {
        let redirectLink;
        if (this.props.currentUser.type === "user") {
            redirectLink = '/employee';
        }
        if (this.props.currentUser.type === "admin") {
            redirectLink = '/employer';
        }
        return (
            <div>
                <div className="container text-center">
                    <div className="col-4 mx-auto mt-5">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Enter Username" className="form-control" onChange={this.handleChange} value={this.state.username} name="username"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password" className="form-control" onChange={this.handleChange} value={this.state.password} name="password"></input>
                        </div>
                        <button className="btn btn-outline-primary" onClick={this.handleClick}>Login</button>
                        {(this.props.isAuth)&&<Redirect to = {redirectLink} />}
                        <button className="btn btn-outline-primary" onClick={this.handleLogout}>Login</button>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        currentUser: state.currentUser
    }

}
const mapDispatchToProps=(dispatch)=>({
    loginUser:(data)=>dispatch(loginUser(data)),
    signoutUser:()=>dispatch(signoutUser())

})
export default connect(mapStateToProps,mapDispatchToProps)(Login)
