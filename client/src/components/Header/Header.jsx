import s from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className={s.superContainer}>
            <div className={s.container}>
                <img width='75px' src={logo} alt="" />
                <div>
                    <h2>Create new recipe</h2>
                </div>
            </div>
        </div>
    )
};

export default Header;