import cssClasses from './Form.module.css';
import { useRef } from 'react';
function Form(props) {

    const titleInputRef = useRef("");
    const amountInputRef = useRef(0);

    const submitForm = (event) =>{
        event.preventDefault();
        if(props.type === 'add') {
            const title = titleInputRef.current.value;
            const amount = amountInputRef.current.value;
            const categorySelect = document.getElementById("category");
            const category = categorySelect.options[categorySelect.selectedIndex].text;

            const data = {
                title,
                amount,
                category, 
                created: new Date()
            };

            props.handleFormSubmit(data);
        } 
    }



    let form = null;
    if(props.type === 'add') {
        form = (
            <div>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" id="title" ref={titleInputRef} required/>
                </div>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='amount'>Amount</label>
                    <input type="number" id="amount" ref={amountInputRef} required/>
                </div>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='category'>Category</label>
                    <select id="category" className={cssClasses.FormControlSelect}>
                        <option value="education"> &#xf549;  Education</option>
                        <option value="health-care"> &#xf0f8; Health-Care</option>
                        <option value="shopping"> &#xf290; Shopping</option>
                        <option value="food"> &#xf81f; Food</option>
                        <option value="others"> &#xf555; Others</option>
                    </select>
                </div>
                <button>Add Expense</button>
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
        <form onSubmit={submitForm}>
            {form}
        </form>
    );

}

export default Form;