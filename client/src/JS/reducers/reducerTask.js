import {   REGISTER, REGISTER_FAILED, REGISTER_SUCCESS, 
           GET_PROFILE, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS,
           LOGOUT,
           SIGNIN, SIGNIN_FAILED, SIGNIN_SUCCESS, 

           GET_ARTICLES, GET_ARTICLE, TOGGLE_TRUE, TOGGLE_FALSE,
        }
from "../constants/actionsTypes";

const initialState = {
    loading: false, 

    articles:[],
    articleId:{},
    isEdit: false
};

const reducerTask = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
        case SIGNIN:
        case GET_PROFILE:
            return { ...state, loading: false }

        case REGISTER_FAILED:
        case SIGNIN_FAILED:
        case GET_PROFILE_FAILED:
            return { ...state, loading: false, error: action.payload }

        case REGISTER_SUCCESS:
            return { ...state, loading: false, msg: action.payload }

        case SIGNIN_SUCCESS:
            return { ...state, loading: false, token: action.payload.token, isAuth: true }

        case GET_PROFILE_SUCCESS:
            return { ...state, loading: false, user: action.payload, isAuth: true }

        case LOGOUT:
            return { ...state, isAuth: false, loading: false }



        case GET_ARTICLES:
            return { ...state, articles: action.payload }

        case GET_ARTICLE:
            return { ...state, articleId: action.payload[0] }

        case TOGGLE_TRUE:
            return { ...state, isEdit: true }

        case TOGGLE_FALSE:
            return { ...state, isEdit: false }

        default:
           return state;
    }
}

export default reducerTask;
