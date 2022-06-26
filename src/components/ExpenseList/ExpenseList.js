import { useSelector } from "react-redux";
import Expense from "./Expense/Expense";

import cssClasses from './ExpenseList.module.css';
function ExpenseList () {
    const {expenseList} = useSelector(state=> state.expenses);
    return (
        <div className={cssClasses.ExpenseList}>
            <h1>Expenses</h1>
            {expenseList.length>0?expenseList.map((item, index) => {
                return <Expense key={index} item={item} />
            }):<h3 style={{textAlign:'center'}}>No Expenses in List</h3>}
        </div>
    );
}

export default ExpenseList;