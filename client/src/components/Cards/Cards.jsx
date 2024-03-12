import s from './Cards.module.css';
import Card from '../Card/Card.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../../redux/actions/index.js';

const Cards = (props) => {

    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);

    useEffect(() => {
        dispatch(getAllRecipes())
    }, []);



    return (
        <div className={s.superContainer}>
            <div className={s.container}>
                {
                    recipes.length && recipes.slice(
                        (props.pagina - 1) * props.porPagina,
                        (props.pagina - 1) * props.porPagina + props.porPagina
                    ).map(recipe => {
                        return <Card
                            key={recipe.id}
                            id={recipe.id}
                            name={recipe.name}
                            summary={recipe.summary}
                            healthscore={recipe.healthscore}
                            readyInMinutes={recipe.readyInMinutes}
                            servings={recipe.servings}
                            ingredients={recipe.ingredients}
                            steps={recipe.steps}
                            image={recipe.image}
                            diets={recipe.diets}
                        />
                    })
                }
            </div>
        </div>

        // <div className={s.superContainer}>
        //     <div className={s.container}>
        //         <Card />
        //         <Card />
        //         <Card />
        //         <Card />
        //         <Card />
        //         <Card />
        //         <Card />
        //         <Card />
        //     </div>
        // </div>
    )
};

export default Cards;