import s from './SearchOrderFilter.module.css';
import SearchBar from '../Searchbar/Searchbar.jsx';
import Order from '../Order/Order.jsx';
import Filter from '../Filter/Filter.jsx';

const SearchOrderFilter = () => {
    return (
        <div className={s.container}>
            <SearchBar />
            <div className={s.orderAndFilter}>
                <Filter />
                <Order />
            </div>
        </div>
    )
}

export default SearchOrderFilter;