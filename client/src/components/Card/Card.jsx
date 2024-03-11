import s from './Card.module.css';
import readyInMinutes from '../../assets/readyInMinutes.svg';
import servings from '../../assets/servings.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import healthy from '../../assets/healthy.svg';
import { Link } from 'react-router-dom';


const Card = (props) => {
    return (
        <div className={s.container}>
            <div>
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
            </div>
            <div className={s.description}>
                <p className={props.healthscore >= 50 ? s.green : s.red}>Healthscore {props.healthscore}</p>
                <p>
                    <img src={readyInMinutes} alt="" />{props.readyInMinutes} min
                </p>
                <p>
                    <img src={servings} alt="" />servings {props.servings}
                </p>
            </div>
            <Link className={s.link} to={`recipeDetail/${props.id}`}>
                <div className={s.viewMore}>
                    <p>
                        View more
                    </p>
                    <FaArrowRightLong fontSize='20px' />
                </div>
            </Link>
            
            {props.healthscore >= 50? <img className={s.healthy} src={healthy} alt="healthy" />: ""}
        </div>
    )
};

export default Card;