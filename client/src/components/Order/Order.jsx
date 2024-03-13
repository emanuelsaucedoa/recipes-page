import s from './Order.module.css';
import { BiSolidDownArrow } from "react-icons/bi";

const Order = () => {

    const handlerOrder = (e) =>{
        console.log(e.target.value)
    }

    return (
        <div className={s.superContainer}>
            <select className={s.container} onChange={handlerOrder}>
                <option >Healthscore</option>
                <option value="ASC">Asc</option>
                <option value="DESC">Desc</option>
            </select>
            <div className={s.icon}>
            <BiSolidDownArrow color='black'/>
            </div>
        </div>

    )
};

export default Order;