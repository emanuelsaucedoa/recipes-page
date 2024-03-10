import s from './CreateRecipe.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import dairyFree from '../../assets/dairy-free.svg';
import glutenFree from '../../assets/gluten-free.svg';
import paleo from '../../assets/paleo.svg';
import pescetarian from '../../assets/pescetarian.svg';
import primal from '../../assets/primal.svg';
import vegan from '../../assets/vegan.svg';
import vegetarian from '../../assets/vegetarian.svg';
import healthy from '../../assets/healthy.svg';
import servings from '../../assets/servings.webp';
import readyInMinutes from '../../assets/readyInMinutes.svg';
import { IoMdAdd } from "react-icons/io";
import { MdAddChart } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { RiFileAddLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";

const CreateRecipe = () => {
    return (
        <div className={s.superContainer}>
            <div>
                <div className={s.back}>
                    <IoMdArrowRoundBack fontSize='30px' color='green' /> <p>Back to home</p>
                </div>
            </div>
            <div className={s.container}>
                <input className={s.name} type="text" placeholder='name' />
                <textarea className={s.summary} name="" id="" cols="30" rows="10" placeholder='summary'></textarea>
                <div className={s.description}>
                    <div>
                        <label htmlFor="">Healthscore</label>
                        <input className={s.healthscore} type="text" placeholder='0 - 100' />
                    </div>

                    <div>
                        <label htmlFor="">Ready in minutes</label>
                        <input className={s.readyInminutes} type="text" placeholder='how long?' />
                    </div>
                    <div>
                        <label htmlFor="">Servings</label>
                        <input className={s.servings} type="text" placeholder='servings?' />
                    </div>
                </div>
                <div className={s.ingredients}>
                    <h3>Ingredients</h3>
                    <div>
                        <p>
                            ADD INGREDIENT
                        </p>
                        {/* <MdAddChart fontSize="22px" color='green'/> */}
                        {/* <MdAddBox fontSize="22px" color='green'/> */}
                        <RiFileAddLine fontSize="22px" color='green'/>
                    </div>
                </div>
                <div className={s.ingredientInputContainer}>
                    <div>
                        <input className={s.ingredientInput} type="text" placeholder='enter ingredient' />
                        <div>
                            <RiDeleteBin5Line fontSize="26px" color='green'/>
                        </div>
                    </div>
                </div>
                <div className={s.steps}>
                    <h3>Steps</h3>
                    <div>
                        <p>
                            ADD STEP
                        </p>
                        <RiFileAddLine fontSize="22px" color='green'/>
                    </div>
                </div>
                <div className={s.stepInputContainer}>
                    <div>
                        <input className={s.stepInput} type="text" placeholder='enter step' />
                        <div>
                            <RiDeleteBin5Line fontSize="26px" color='green'/>
                        </div>
                    </div>  
                </div>
                <input className={s.imageURL} type="text" placeholder='enter image URL' />
                <div className={s.diets}>
                    <div>
                        <img src={dairyFree} alt="" />
                        <p>Dairy free</p>
                    </div>
                    <div>
                        <img src={glutenFree} alt="" />
                        <p>Gluten free</p>
                    </div>
                    <div>
                        <img src={paleo} alt="" />
                        <p>Paleo</p>
                    </div>
                    <div>
                        <img src={pescetarian} alt="" />
                        <p>Pescetarian</p>
                    </div>
                    <div>
                        <img src={primal} alt="" />
                        <p>Primal</p>
                    </div>
                    <div>
                        <img src={vegan} alt="" />
                        <p>Vegan</p>
                    </div>
                    <div>
                        <img src={vegetarian} alt="" />
                        <p>Vegetarian</p>
                    </div>
                </div>
                <div className={s.additional}>
                    <p>is whole 30?</p>
                    <p>is ketogenic?</p>
                    <p>is fodmap friendly?</p>
                </div>
                <button type='submit'>CREATE RECIPE</button>

            </div>

        </div>
    )
};

export default CreateRecipe;