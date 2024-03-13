import s from './SearchBar.module.css';
import { FaSearch } from "react-icons/fa";
import { filterBySearch } from '../../redux/actions/index.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState('');

    const onChangeInput = (e) => {
        setState(e.target.value)
    }

    const handlerFilterBySearch = (e) => {
        e.preventDefault();
        dispatch(filterBySearch(state))
    }

    return (
        <form className={s.container} onSubmit={handlerFilterBySearch}>
            <input type="text" placeholder="search recipe" value={state} onChange={onChangeInput}/>
            <span>
                <FaSearch fontSize='22px' />
            </span>
        </form>
    )
};

export default SearchBar;