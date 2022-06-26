import cssClasses from './Expense.module.css';
import moment from 'moment';
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';
function Expense (props) {
    const time = moment(props.item.createdAt).fromNow();
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(actions.deleteExpense(props.item));
    }
    
    return (
        <div className={cssClasses.Expense}>
            <div className={cssClasses.Info}>
                <div className={cssClasses.Title}>{props.item.title}</div>
                <div className={cssClasses.Time}>{time}</div>
            </div>
            <div className={cssClasses.Right}>
                <div className={cssClasses.Amount}>
                    {props.item.amount} USD
                </div>
                
                <div className={cssClasses.Delete}>
                    <BsFillTrashFill className="trash" onClick={deleteHandler}/>
                </div>
            </div>
        </div>
    );
}

export default Expense;