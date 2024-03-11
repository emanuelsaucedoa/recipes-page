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
import { RiFileAddLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { postRecipe } from '../../redux/actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const CreateRecipe = () => {

    const [state, setState] = useState({
        name: "",
        summary: "",
        healthscore: 0,
        readyInMinutes: 0,
        servings: 0,
        ingredients: [],
        steps: [],
        image: "",
        dietsId: []
    })

    const [ingredientAmount, setIngredientAmount] = useState([]);
    const [stepAmount, setStepAmount] = useState([]);


    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const handleInputChangeIngredients = (e) => {
        // e.target.index
        // console.log('e.target.id', e.target.id)
        // for (let i = 0; i < ingredientAmount.length; i++) {
        //     if (parseInt(e.target.id) === (ingredientAmount[i].id)){
        //         const ingredientsId = state.ingredients.map( i => i.id)
        //         if (ingredientsId.includes(parseInt(e.target.id))){
        //             setState({
        //                 ...state,
        //                 [e.target.name]: [...state.ingredients.filter(i => i.id !== parseInt(e.target.id)), {id: e.target.id, name: e.target.value}]
        //             })
        //         } else{
        //             setState({
        //             ...state,
        //             [e.target.name]: [...state.ingredients, {id: e.target.id, name: e.target.value}]
        //             // [e.target.name]: [...state.ingredients, {name: e.target.value}]
        //         })
        //         }
                
        //     }   
        // }


        
    };

    const addIngredient = () => {
        setIngredientAmount([...ingredientAmount, {id: ingredientAmount.length}])
    };

    const removeIngredient = (id) => {
        setIngredientAmount([...ingredientAmount.filter(i => i.id !== id)])  
    };

    const addStep = () => {
        setStepAmount([...stepAmount, {id: stepAmount.length + 1}])
    };

    const removeStep = (id) => {
        setStepAmount([...stepAmount.filter(i => i.id !== id)])  
    };


    // const submit = async () => {
    //     await postRecipe()
    // }

    // submit()

    return (
        <div className={s.superContainer}>
            <div>
                <div className={s.back}>
                    <IoMdArrowRoundBack fontSize='30px' color='green' /> <p>Back to home</p>
                </div>
            </div>
            <form className={s.container}>
                <input className={s.name} type="text" placeholder='name' name='name' onChange={handleInputChange} />
                <textarea className={s.summary} name="summary" id="" cols="30" rows="10" placeholder='enter summary' onChange={handleInputChange}></textarea>
                <div className={s.description}>
                    <div>
                        <label htmlFor="">Healthscore</label>
                        <input className={s.healthscore} type="text" placeholder='0 - 100' name="healthscore" onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="">Ready in minutes</label>
                        <input className={s.readyInminutes} type="text" placeholder='how long?' name="readyInMinutes" onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="">Servings</label>
                        <input className={s.servings} type="text" placeholder='servings?' name="servings" onChange={handleInputChange} />
                    </div>
                </div>
                <div className={s.ingredients}>
                    <h3>Ingredients</h3>
                    <div onClick={addIngredient}>
                        <p>
                            ADD INGREDIENT
                        </p>
                        <RiFileAddLine fontSize="22px" color='green' />
                    </div>
                </div>
                <div className={s.ingredientInputContainer}>
                    {ingredientAmount ? ingredientAmount.map((ingredient, index) => {
                        return <div key={index}>
                                <input className={s.ingredientInput} onChange={handleInputChangeIngredients} type="text" name="ingredients" id={index} placeholder='enter ingredient' />
                                {index === ingredientAmount.length - 1 ? <div onClick={() => removeIngredient(ingredient.id)}>
                                    <RiDeleteBin5Line fontSize="26px" color='green'/>
                                </div>: ''}
                            </div>
                    }) : ''}
                </div>
                <div className={s.steps}>
                    <h3>Steps</h3>
                    <div onClick={addStep}>
                        <p>
                            ADD STEP
                        </p>
                        <RiFileAddLine fontSize="22px" color='green' />
                    </div>
                </div>
                <div className={s.stepInputContainer}>
                    {stepAmount ? stepAmount.map((st, index) => {
                        return <div key={index}>
                                <input className={s.stepInput} type="text"  placeholder='enter step' />
                                {index === stepAmount.length - 1 ? <div onClick={() => removeStep(st.id)}>
                                    <RiDeleteBin5Line fontSize="26px" color='green'/>
                                </div>: ''}
                            </div>
                    }) : ''}

                    {/* <div>
                        <input className={s.stepInput} type="text" placeholder='enter step' />
                        <div>
                            <RiDeleteBin5Line fontSize="26px" color='green' />
                        </div>
                    </div> */}
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

            </form>

        </div>
    )
};

export default CreateRecipe;