import axios from 'axios';
import {GET_ERRORS,CLEAR_ERRORS, UPDATE_TASK, GET_TASK} from "./types";

// Get task by id
export const getTaskById = id => dispatch => {
    axios.get(`/edit/${id}`)
        .then(res =>
            dispatch({
                type: GET_TASK,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        )
};

// Update task
export const updateTask = (updatedTaskData, id) => dispatch => {
    dispatch(clearErrors());
    axios.post(`/edit/update/${id}`, updatedTaskData)
        .then(res =>
            dispatch({
                type: UPDATE_TASK,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
};

// Clear Errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
};