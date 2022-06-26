import cssClasses from './Header.module.css';
import logo from '../../assets/images/logo.png';
function Header () {
    return (
        <div className={cssClasses.Header}>
            <div className={cssClasses.HeaderContainer}>
                <div className={cssClasses.Logo}>
                    <img src={logo} alt="Expense Tracker" />
                    Expense Tracker
                </div>
            </div>
        </div>
    );
}

export default Header;