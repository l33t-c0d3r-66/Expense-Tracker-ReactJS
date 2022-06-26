import { useSelector } from "react-redux";
import Expense from "./Expense/Expense";

import cssClasses from './ExpenseList.module.css';
function ExpenseList () {
    const {expenseList, title} = useSelector(state=> state.expenses);
    const filteredList = expenseList.filter(item=> item.title.includes(title))
    return (
        <div className={cssClasses.ExpenseList}>
            <h1>Expenses</h1>
            {filteredList.length>0?filteredList.map((item, index) => {
                return <Expense key={index} item={item} />
            }):<h3 style={{textAlign:'center'}}>No Expenses in List</h3>}
        </div>
    );
}

export default ExpenseList;