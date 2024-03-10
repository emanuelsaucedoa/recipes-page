import s from './Cards.module.css';
import Card from '../Card/Card.jsx';

const Cards = () => {
    return (
        <div className={s.superContainer}>
            <div className={s.container}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
};

export default Cards;