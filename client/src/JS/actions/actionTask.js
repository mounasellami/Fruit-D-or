import {   REGISTER, REGISTER_FAILED, REGISTER_SUCCESS, 
           GET_PROFILE, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS,
           LOGOUT,
           SIGNIN, SIGNIN_FAILED, SIGNIN_SUCCESS, 
        }
from "../constants/actionsTypes";
import axios from "axios";
// import { ADD_TASK,
//          COMPLETE_TASK,
//          EDIT_TASK,
//          DELETE_TASK }
// from "../constants/actionsTypes";


//User Register action creator:
export const Register = (newUser) => async (dispatch) => {
    dispatch({ type: REGISTER })
    try {
        const res = await axios.post('http://localhost:7000/user/register', newUser)
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: REGISTER_FAILED, payload: error.response.data })
        console.log(error)
    }
}

//User Signin action creator:
export const Signin = (userCred) => async (dispatch) => {
    dispatch({ type: SIGNIN })
    try {
        const res = await axios.post('http://localhost:7000/user/signin', userCred)
        localStorage.setItem("token", res.data.token)
        dispatch({ type: SIGNIN_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: SIGNIN_FAILED })
        console.log(error)
    }
}

//Check if user is authenticated:
export const getProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE })
    const config = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    try {
        const res = await axios.get('http://localhost:7000/user/currentuser', config)
        dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_PROFILE_FAILED, payload: error.res.data })
        console.log(error)
    }
}

//User Logout action creator:
export const logout =()=>(dispatch)=>{
    dispatch({type: LOGOUT})
    try {
        localStorage.removeItem('token')
    } catch (error) {
        console.log(error)
    }
}

// export const addTask=(payload)=>{
//     return {
//         type: ADD_TASK , payload
//     }
// }
// export const deleteTask=(payload)=>{
//     return {
//         type: DELETE_TASK , payload
//     }
// }
// export const completeTask=(id)=>{
//     return {
//         type: COMPLETE_TASK, id
//     }
// }
// export const editTask=(payload)=>{
//     return {
//         type: EDIT_TASK , payload
//     }
// }