import s from './RecipeDetail.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import dairyFree from '../../assets/dairy-free.svg';
import glutenFree from '../../assets/gluten-free.svg';
import paleo from '../../assets/paleo.svg';
import pescetarian from '../../assets/pescetarian.svg';
import primal from '../../assets/primal.svg';
import vegan from '../../assets/vegan.svg';
import vegetarian from '../../assets/vegetarian.svg';
import readyInMinutes from '../../assets/readyInMinutes.svg';
import servings from '../../assets/servings.webp';
import healthy from '../../assets/healthy.svg';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../../redux/actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecipeDetail = () => {
    const dispatch = useDispatch();
    const { recipeId } = useParams();
    const recipe = useSelector((state) => state.recipe);
   
    useEffect(() => {
        dispatch(getRecipe(recipeId))
    }, []);

    const ingredients = recipe.ingredients ? recipe.ingredients.map((ingredient) => {
        return JSON.parse(ingredient);
    }) : '';
    const steps = recipe.steps ? recipe.steps.map((step) => {
        return JSON.parse(step);
    }) : '';

    function calculateHours(minutos) {
        const hours = Math.floor(minutos / 60);
        const minutesRestants = minutos % 60;
    
        if ( hours === 1 && minutesRestants === 0) return `${hours} hour`;
        if ( hours > 1 && minutesRestants === 0) return `${hours} hours`;
        if ( hours < 1 && minutesRestants === 1) return `${minutesRestants} min`
        if ( hours < 1 && minutesRestants > 0) return `${minutesRestants} mins`
        if ( hours > 1 && minutesRestants > 1) return `${hours} hours ${minutesRestants} mins`
        if ( hours === 1 && minutesRestants > 0) return `${hours} hour ${minutesRestants} mins`
    }
    
    return (
        <div className={s.superContainer}>
            <div>
                <Link className={s.link} to='/'>
                    <div className={s.back}>
                        <IoMdArrowRoundBack fontSize='30px' color='green' /> <p>Back to home</p>
                    </div>
                </Link>
            </div>
            <div className={s.container}>
                <div>
                    <h2>{recipe.name}</h2>
                    <div className={s.healthscore}>
                        <p className={recipe.healthscore >= 50 ? s.green : s.red}>Healthscore {recipe.healthscore}</p>
                        {recipe.healthscore >= 50? <img className={s.healthy} src={healthy} alt="healthy" />: ""}
                    </div>
                    
                </div>
                <div className={s.diets}>
                    {recipe.diets ? recipe.diets.map((diet) => {
                        if ( diet.name === 'gluten free') return <img src={glutenFree} alt="gluten-free"/>
                        if ( diet.name === 'dairy free') return <img src={dairyFree} alt="dairy-free"/>
                        if ( diet.name === 'lacto ovo vegetarian') return <img src={vegetarian} alt="lacto-ovo-vegetarian"/>
                        if ( diet.name === 'vegan') return <img src={vegan} alt="vegan"/>
                        if ( diet.name === 'paleolithic') return <img src={paleo} alt="paleolithic"/>
                        if ( diet.name === 'primal') return <img src={primal} alt="primal"/>
                        if ( diet.name === 'pescetarian') return <img src={pescetarian} alt="pescetarian"/>
                    }): ''}
                    {recipe.diets ? recipe.diets.map((diet) => {
                        if ( diet.name === 'whole 30') return <p className={s.green}>Whole 30</p>
                        if ( diet.name === 'fodmap friendly') return <p className={s.green}>Fodmap friendly</p>
                        if ( diet.name === 'ketogenic') return <p className={s.green}>Ketogenic</p>
                    }): ''}
                </div>
                <div className={s.summary}>
                    <img src={recipe.image} alt="recipe-image" />
                    <p dangerouslySetInnerHTML={{ __html: recipe.summary }}>
                    </p>
                </div>
                <div className={s.description}>

                    <p>
                        <img src={readyInMinutes} alt="" />{recipe.readyInMinutes} min
                    </p>
                    <p>
                        <img src={servings} alt="" />servings {recipe.servings}
                    </p>
                </div>
                <div className={s.ingredients}>
                    <h3>Ingredients</h3>
                    {ingredients ? ingredients.map((ingredient) => {
                        return <p>- {ingredient.name}</p>
                    }) : ''}
                </div>
                <div className={s.steps}>
                    <h3>Steps</h3>
                    {steps ? steps.map((step) => {
                            return <p>{step.step} <strong className={s.green}>{step.length ? `${calculateHours(step.length.number)}` : ''}</strong></p>
                    }) : ''}
                </div>
            </div>
        </div>
    )
};

export default RecipeDetail;