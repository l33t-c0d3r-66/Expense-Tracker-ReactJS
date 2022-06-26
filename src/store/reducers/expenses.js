import * as actionTypes from '../actions/actionTypes';

const loader = () =>  {
    const expenseList = localStorage.getItem("expenses");
    let expenses = [];
    if(expenseList) {
        expenses = JSON.parse(expenseList);
    }
    return expenses;
}

const initialState = {
    expenseList: loader(),
    title : ""
};

const saveData = (state, action) => {
    localStorage.setItem("expenses", JSON.stringify([...state.expenseList, action.data]));
    return {
        ...state,
        expenseList: [...state.expenseList, action.data]
    };
}

const deleteData = (state, action) => {
    localStorage.setItem("expenses", JSON.stringify(state.expenseList.filter(item => item.created !== action.data.created)));
    return {
        ...state,
        expenseList: loader()
    };
}

const expenseReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_EXPENSE:
            return saveData(state, action);
        case actionTypes.DELETE_EXPENSE:
            return deleteData(state,action);
        case actionTypes.SEARCH_EXPENSE:
            return {
                ...state,
                title: action.title
            }
        default:
            return state;
    }
}

export default expenseReducer;
