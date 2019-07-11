import {GET_TASK, UPDATE_TASK, UPDATE_TASK_STATUS} from '../actions/types';

const initialState = {
    task: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TASK:
            return {
                ...state,
                task: action.payload
            };
        case UPDATE_TASK:
            return {
                ...state,
                task: action.payload
            };
        case UPDATE_TASK_STATUS:
            return {
                ...state,
                task: action.payload
            };
        default:
            return state;
    }
}