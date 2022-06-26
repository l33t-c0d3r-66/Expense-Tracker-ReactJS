import { combineReducers } from "redux";
import { createStore } from "redux";
import expenseReducer from "./reducers/expenses";


const reducer = combineReducers({
    expenses: expenseReducer
});
const initialState = {};
const store = createStore(reducer, initialState);

export default store;