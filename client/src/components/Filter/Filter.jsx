import s from './Filter.module.css';
import { BiSolidDownArrow } from "react-icons/bi";

const Filter = () => {
    return (
        <div className={s.superContainer}>
            <select className={s.container}>
                <option value="">Diet</option>
                <option value="">Gluten free</option>
                <option value="">Dairy free</option>
                <option value="">Vegetarian</option>
                <option value="">Vegan</option>
                <option value="">Paleo</option>
                <option value="">Primal</option>
                <option value="">Whole 30</option>
                <option value="">Pescatarian</option>
                <option value="">Ketogenic</option>
                <option value="">Fodmap friendly</option>
            </select>
            <div className={s.icon}>
                <BiSolidDownArrow color='black' />
            </div>
        </div>

    )
};

export default Filter;