import * as actionTypes from '../actions/actionTypes';
const initialState = {
    expenseList: []
};

const expenseReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_EXPENSE:
            return {
                ...state,
                expenseList: state.expenseList.concat(action.data)
            };
        break;
        case actionTypes.DELETE_EXPENSE:

        break;
        default:
            return state;
        break;
    }
    return state;
}

export default expenseReducer;
