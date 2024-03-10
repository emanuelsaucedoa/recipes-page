import s from './Card.module.css';
import readyInMinutes from '../../assets/readyInMinutes.svg';
import servings from '../../assets/servings.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import healthy from '../../assets/healthy.svg';


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
                <FaArrowRightLong fontSize='20px' />
            </div>
            <img className={s.healthy} src={healthy} alt="" />
        </div>
    )
};

export default Card;