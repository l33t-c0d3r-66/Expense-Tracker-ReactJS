import cssClasses from './Form.module.css';
function Form(props) {
    let form = null;
    if(props.type === 'add') {
        form = (
            <div>
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
                    <select id="category" className={cssClasses.FormControlSelect}>
                        <option value="education"> &#xf549;  Education</option>
                        <option value="health-care"> &#xf0f8; Health-Care</option>
                        <option value="shopping"> &#xf290; Shopping</option>
                        <option value="food"> &#xe0cd; Food</option>
                        <option value="others"> &#xf555; Others</option>
                    </select>
                </div>
            </div>
        );
    } else if(props.type === 'search') {
        form = (
            <div className={cssClasses.FormControl}>
                <label htmlFor='name'>Search for Expense</label>
                <input type="text" id="name"/>
            </div>
        );
    }

    return (
        <form>
            {form}
        </form>
    );

}

export default Form;