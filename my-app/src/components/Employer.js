import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signupUser,loginUser,signoutUser} from "../redux/action"
import {Redirect} from "react-router-dom"

 class Employer extends Component {
    handleLogout=()=>{
        this.props.signoutUser(
            <Redirect to = '/signup' />
        );
        
    }
    render() {
        return (
            <div>
                <h1>Employer Page</h1>
                <button>Sign Out</button>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
 
    signoutUser:()=>dispatch(signoutUser())

})
export default connect(null,mapDispatchToProps) (Employer)
