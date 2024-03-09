import s from './Card.module.css';
import readyInMinutes from '../../assets/readyInMinutes.svg';
import servings from '../../assets/servings.webp';
import { FaLocationArrow } from "react-icons/fa";
import healthy from '../../assets/healthy.svg';
import dairyFree from '../../assets/dairy-free.svg';
import glutenFree from '../../assets/gluten-free.svg';
import vegan from '../../assets/vegan.svg';

const Card = () => {
    return (
        <div className={s.container}>
            <div>
                <img src="https://spoonacular.com/recipeImages/782585-312x231.jpg" alt="" />
                <h3>Cannellini bean and asparagus salad with mushrooms</h3>
            </div>
            <div className={s.description}>
                <p>Healthscore 100</p>
                <p>
                    <img src={readyInMinutes} alt="" />45 min
                </p>
                <p>
                    <img src={servings} alt="" />servings 2
                </p>
            </div>
            <div className={s.viewMore}>
                <p>
                    View more
                </p>
                <FaLocationArrow fontSize='18px' />
            </div>

            {/* <div className={s.diets}>
                <img src={dairyFree} alt="" />
                <img src={glutenFree} alt="" />
                <img src={vegan} alt="" />
                <p>whole30</p>
                <p>fodmap friendly</p>
                <p>keto</p>
            </div> */}

            <img className={s.healthy} src={healthy} alt="" />


        </div>
    )
};

export default Card;