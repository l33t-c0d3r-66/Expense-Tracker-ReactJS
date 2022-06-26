import { Link } from 'react-router-dom';
import cssClasses from './ActionBar.module.css';
function ActionBar () {

    let render = null;
    if(window.location.pathname === '/') {
        render = (
            <div className={cssClasses.Action}>
                <Link to="/add">
                    <button>Add Expense</button>
                </Link>
                <form>
                    <div className={cssClasses.FormControl}>
                        <label htmlFor='name'>Search for Expense</label>
                        <input type="text" id="name"/>
                    </div>
                </form>
            </div>
        );
    } else {
        render = (
            <div className={cssClasses.Action}>
                <Link to="/">
                    <button>Back</button>
                </Link>
                <form>
                    <div className={cssClasses.FormControl}>
                        <label htmlFor='title'>Title</label>
                        <input type="text" id="title"/>
                    </div>
                    <div className={cssClasses.FormControl}>
                        <label htmlFor='amount'>Amount</label>
                        <input type="number" id="amount"/>
                    </div>
                    <div className={cssClasses.FormControl}>
                        <label htmlFor='category'>Category</label>
                        <select id="category">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>

                        </select>
                    </div>
                </form>
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