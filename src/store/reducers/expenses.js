import * as actionTypes from '../actions/actionTypes';
const initialState = {
    expenseList: []
};

const expenseReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_EXPENSE:
            return {
                ...state,
                expenseList: [...state.expenseList, action.data]
            };
        case actionTypes.DELETE_EXPENSE:
            return {
                ...state,
                expenseList: state.expenseList.filter(item => item.createdAt !== action.data.createdAt) 
            }
        break;
        default:
            return state;
    }
}

export default expenseReducer;
