import * as actionTypes from './actionTypes';
export const addExpense = (data) => {
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

export const searchExpense = (title) => {
    return {
        type: actionTypes.SEARCH_EXPENSE,
        title: title
    }
}