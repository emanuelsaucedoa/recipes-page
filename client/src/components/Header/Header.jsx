import s from './Header.module.css';
import logo from '../../assets/logo4.png';

const Header = () => {
    return (
        <div className={s.container}>
           <img width='75px'src={logo} alt="" />
           <h2>Create new recipe</h2>
        </div>
    )
};

export default Header;