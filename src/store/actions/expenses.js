import { act } from 'react-dom/test-utils';
import * as actionTypes from './actionTypes';
export const AddExpense = (data) => {
    return {
        type: actionTypes.ADD_EXPENSE,
        data: data
    }
}

export const deleteExpense = (data) => {
    return {
        type: actionTypes.DELETE_EXPENSE,
        data: data
    };
}