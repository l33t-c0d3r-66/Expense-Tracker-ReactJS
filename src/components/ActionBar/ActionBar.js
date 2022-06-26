import { Link, useHistory } from 'react-router-dom';
import cssClasses from './ActionBar.module.css';
import Form from '../Form/Form';
import {useDispatch} from 'react-redux';
import * as actions from '../../store/actions/index';
function ActionBar () {

    const dispatch = useDispatch();
    const history  = useHistory();

    const handleAddFormSubmit = (data) => {
        dispatch(actions.addExpense(data));
        history.replace("/");
    }

    const handleSearch = (title) => {
        dispatch(actions.searchExpense(title));
    }

    let render = null;
    if(window.location.pathname === '/') {
        render = (
            <div className={cssClasses.Action}>
                <Link to="/add">
                    <button>Add Expense</button>
                </Link>
                <Form type="search" handleFormSubmit={handleSearch}/>
            </div>
        );
    } else {
        render = (
            <div className={cssClasses.Action}>
                <Link to="/">
                    <button>Back</button>
                </Link>
                <Form type="add" handleFormSubmit={handleAddFormSubmit}/>
            </div>
        );
    }
    return (
        <section className={cssClasses.ActionBar}>    
            {render}
        </section>
    );
}

export default ActionBar;