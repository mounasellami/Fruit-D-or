import axios from "axios";
import {   REGISTER, REGISTER_FAILED, REGISTER_SUCCESS, 
           GET_PROFILE, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS,
           LOGOUT,
           SIGNIN, SIGNIN_FAILED, SIGNIN_SUCCESS,

           GET_ARTICLES, GET_ARTICLE, TOGGLE_TRUE, TOGGLE_FALSE,
        }
from "../constants/actionsTypes";

//User Register action creator:
export const registerUser = (newUser) => async (dispatch) => {
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


export const getArticles = () => (dispatch) => {
    axios.get("/api/articles")
         .then(res => dispatch({ type: GET_ARTICLES, payload: res.data }))
         .catch(err => console.log(err))
}

export const getArticle = (id) => (dispatch) => {
    axios.get(`/api/articles/${id}`)
         .then(res => dispatch({ type: GET_ARTICLE, payload: res.data }))
         .catch(err => console.log(err))
}

export const addArticle = (newArticle) => (dispatch) => {
    axios.post('/api/articles', newArticle)
         .then(() => dispatch(getArticles()))
         .catch(err => console.log(err))
}

export const deleteArticle = (id) => (dispatch) => {
    axios.delete(`/api/articles/${id}`)
         .then(() => dispatch(getArticles()))
         .catch(err => console.log(err))
}
export const editArticle = (id, editArticle) => (dispatch) => {
    axios.put(`/api/articles/${id}`, editArticle)
         .then(() => dispatch(getArticles()))
         .catch(err => console.log(err))
}
export const toggleTrue = () => {
    return {
        type: TOGGLE_TRUE
    }
}
export const toggleFalse = () => {
    return {
        type: TOGGLE_FALSE
    }
}
/*
export const addTask=(payload)=>{
    return {
        type: ADD_TASK , payload
    }
}
export const deleteTask=(payload)=>{
    return {
        type: DELETE_TASK , payload
    }
}
export const editTask=(payload)=>{
    return {
        type: EDIT_TASK , payload
    }
}
*/