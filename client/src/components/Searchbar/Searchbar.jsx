import s from './SearchBar.module.css';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className={s.container}>
        <input type="text" placeholder="search recipe" />
        <span>
        <FaSearch fontSize='22px'/>
        </span>
        </div>
    )
};

export default SearchBar;