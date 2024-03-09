import s from './Home.module.css'
import Header from '../../components/Header/Header.jsx';
import SearchOrderFilter from '../../components/SearchOrderFilter/SearchOrderFilter.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';

const Home = () => {
    return (
        <div className={s.container}>
            <Header/>
            <SearchOrderFilter/>
            <Pagination/>
            <Cards/>

        </div>
    )
};

export default Home;