import {
    TEST_DISPATCH,
    SET_CURRENT_USER,
    GET_ERRORS
} from '../actions/types';
import isEmpty from 'lodash.isempty';


const initialState = {
    isAuthenticated: false,
    user:{}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TEST_DISPATCH:
            return{
                ...state,
                user:action.payload
            };
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user:action.payload
            };
        default:
            return state;
    }
}