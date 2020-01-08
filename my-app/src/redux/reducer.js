import { LOGIN, SIGNOUT_USER,SIGNUP } from './action'
const initialState = {
   loginData:{credentials: [],isAuth:false,currentUser:{}}

}

const postReducer= (state = initialState.loginData,action) => {
    switch (action.type) {

        case "SIGNUP":
            return {...state, credentials: [...state.credentials, action.data]};
        case "LOGIN":
            let user = state.credentials.filter(el => el.username === action.data.username && el.password === action.data.password);
            return {...state, isAuth: user.length === 0?false:true, currentUser: user.length === 0?{}:user[0]};
        case "LOG_OUT":
            return {
                ...state,
                currentUser: {}, isAuth:false

            }

        default:
            return state
    }
}
export default postReducer
