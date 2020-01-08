const signupUser = (obj) => ({type: "SIGNUP", data: obj});
const loginUser = (obj) => ({type: "LOGIN", data: obj});
const signoutUser = () => ({type: "SIGNOUT_USER"});
export {signupUser,loginUser,signoutUser}