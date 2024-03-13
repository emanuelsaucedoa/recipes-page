import s from './Filter.module.css';
import { BiSolidDownArrow } from "react-icons/bi";

const Filter = () => {

    const handlerFilter = (e) =>{
        console.log(e.target.value)
    }
    return (
        <div className={s.superContainer}>
            <select className={s.container} onChange={handlerFilter}>
                <option >Diet</option>
                <option value="gluten free">Gluten free</option>
                <option value="dairy free">Dairy free</option>
                <option value="lacto ovo vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="paleolithic">Paleo</option>
                <option value="primal">Primal</option>
                <option value="whole 30">Whole 30</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="fodmap friendly">Fodmap friendly</option>
            </select>
            <div className={s.icon}>
                <BiSolidDownArrow color='black' />
            </div>
        </div>
    )
};

export default Filter;