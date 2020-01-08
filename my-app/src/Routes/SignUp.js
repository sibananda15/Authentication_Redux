import React, { Component } from 'react'
import {connect} from "react-redux"
import {signupUser} from "../redux/action"

 class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            type: 'user'
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleClick=()=>{
        this.props.signupUser(this.state);
        alert("Signup Successful!!!!");
        this.setState({
            username: '',
            password: '',
            type: 'user'
        })
    }

    render() {
        return (
            <React.Fragment>
                <>
                <div className = "container text-center">
                    <div className = "col-4 mx-auto mt-5">
                        <div className = "form-group">
                            <label htmlFor = "username">Username</label>
                            <input type = "text" placeholder = "Enter Username" className = "form-control" id = "username" value = {this.state.username} onChange = {this.handleChange}></input>
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "password">Password</label>
                            <input type = "password" placeholder = "Enter Password" className = "form-control" id = "password" value = {this.state.password} onChange = {this.handleChange}></input>
                        </div>
                        <select className = "custom-select" id = "type" onChange = {this.handleChange}>
                            <option value = "user">User</option>
                            <option value = "admin">Admin</option>
                        </select>
                        <button className = "btn btn-primary mt-2" onClick={this.handleClick} >Signup</button>
                    </div>
                </div>
                </>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    credentials: state.loginData
});

const mapDispatchToProps = dispatch => ({
    signupUser: (data) => dispatch(signupUser(data))
});
export default  connect(mapStateToProps,mapDispatchToProps)(SignUp)
