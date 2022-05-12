import {   REGISTER, REGISTER_FAILED, REGISTER_SUCCESS, 
           GET_PROFILE, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS,
           LOGOUT,
           SIGNIN, SIGNIN_FAILED, SIGNIN_SUCCESS, 
        }
from "../constants/actionsTypes";
/*
import { ADD_TASK, 
         DELETE_TASK,
         COMPLETE_TASK,
         EDIT_TASK,
} from "../constants/actionsTypes";
*/
const initialState = { loading: false };

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

        default:
            return state;
    }
}

export default reducerTask;
/*
const initialState ={ list: [] }

const reducerTask=(state=initialState, action) =>{
    switch (action.type) { 
        case ADD_TASK:
            return {...state, list:[...state.list, action.payload]}
        case DELETE_TASK:
            return {...state, list: state.list.filter(el =>el.id !== action.payload)}
        case COMPLETE_TASK:
            return {...state, list: state.list.map(el=> el.id === action.id ? {...el, isDone: !el.isDone}:el )}
        case EDIT_TASK:
            return {...state, list: state.list.map(el=> el.id === action.payload.id ? {...el, description: action.payload.description}:el )}
        default:
           return state;
    }
}

export default reducerTask;
*/