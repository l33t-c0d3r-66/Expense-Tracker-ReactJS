import { Link } from 'react-router-dom';
import cssClasses from './ActionBar.module.css';
import Form from '../Form/Form';
function ActionBar () {

    let render = null;
    if(window.location.pathname === '/') {
        render = (
            <div className={cssClasses.Action}>
                <Link to="/add">
                    <button>Add Expense</button>
                </Link>
                <Form type="search"/>
            </div>
        );
    } else {
        render = (
            <div className={cssClasses.Action}>
                <Link to="/">
                    <button>Back</button>
                </Link>
                <Form type="add"/>
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