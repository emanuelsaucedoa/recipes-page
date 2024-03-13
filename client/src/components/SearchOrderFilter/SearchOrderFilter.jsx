import s from './SearchOrderFilter.module.css';
import SearchBar from '../Searchbar/Searchbar.jsx';
import Order from '../Order/Order.jsx';
import Filter from '../Filter/Filter.jsx';
import Clean from '../Clean/Clean.jsx';

const SearchOrderFilter = () => {
    return (
        <div className={s.superContainer}> 
            <div className={s.container}>
                <SearchBar />
                <div className={s.orderAndFilter}>
                    <Clean />
                    <Filter />
                    <Order />
                </div>
            </div>
        </div>

    )
}

export default SearchOrderFilter;