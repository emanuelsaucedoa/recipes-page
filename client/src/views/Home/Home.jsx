import s from './Home.module.css'
import Header from '../../components/Header/Header.jsx';
import SearchOrderFilter from '../../components/SearchOrderFilter/SearchOrderFilter.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination.jsx';

const Home = () => {

    const recipes = useSelector((state) => state.recipes);

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(12);
    const maximo = recipes.length / porPagina;

    return (
        <div className={s.container}>
            <Header/>
            <SearchOrderFilter/>
            <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}  />
            <Cards pagina={pagina} porPagina={porPagina}/>
        </div>
    )
};

export default Home;