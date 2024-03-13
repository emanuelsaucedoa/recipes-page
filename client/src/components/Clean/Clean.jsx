import s from './Clean.module.css';
import { clean } from '../../redux/actions/index.js';
import { useDispatch } from 'react-redux';


const Clean = () => {

  const dispatch = useDispatch();

  const handlerClean = (e) => {
    e.preventDefault()
    dispatch(clean());
  }

  return (
        <form className={s.superContainer}>
            <div className={s.container} onClick={handlerClean}>
                Clean
            </div>
        </form>
  )
};

export default Clean;
