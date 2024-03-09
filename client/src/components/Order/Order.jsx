import s from './Order.module.css';
import { BiSolidDownArrow } from "react-icons/bi";

const Order = () => {
    return (
        <div className={s.superContainer}>
            <select className={s.container}>
                <option value="">Healthscore</option>
                <option value="">Asc</option>
                <option value="">Desc</option>
            </select>
            <div className={s.icon}>
            <BiSolidDownArrow color='black'/>
            </div>
        </div>

    )
};

export default Order;