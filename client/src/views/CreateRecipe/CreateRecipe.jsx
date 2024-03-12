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

    const [stepAmount, setStepAmount] = useState([]);


    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const handleInputChangeIngredients = (e) => {
        const inputId = parseInt(e.target.id);
        const inputValue = e.target.value;
        const updatedIngredients = state.ingredients.map( ingredient => {
            if(ingredient.id === inputId){
                return {...ingredient, name: inputValue}
            }
            return ingredient;
        });
        setState({
            ...state,
            ingredients: [...updatedIngredients]
        });
    };

    const addIngredient = () => {
        setState({
            ...state,
            ingredients: [...state.ingredients, {id: state.ingredients.length, name: "" }]
        })
    };

    const removeIngredient = (id) => {
        const newIngredients = state.ingredients.filter((ingredient) => ingredient.id !== id);
        setState({
            ...state,
            ingredients: [...newIngredients]
        })
    };

    const handleInputChangeSteps = (e) => {
        const inputId = parseInt(e.target.id);
        const inputValue = e.target.value;
        const updatedSteps = state.steps.map( step => {
            if(step.id === inputId){
                return {...step, step: inputValue}
            }
            return step;
        });
        setState({
            ...state,
            steps: [...updatedSteps]
        });
    };

    const addStep = () => {
        setState({
            ...state,
            steps: [...state.steps, {id: state.steps.length, step: "" }]
        })
    };

    const removeStep = (id) => {
        const newSteps = state.steps.filter((step) => step.id !== id);
        setState({
            ...state,
            steps: [...newSteps]
        })
    };

    const handleDiets = (e) => {
        const id = parseInt(e.target.id) || parseInt(e.target.parentNode.id)
        const dietExist = state.dietsId.includes(id)
        console.log('dietExist', dietExist)
        
        if( dietExist === false ){
            const newDiets = [...state.dietsId, parseInt(id)];
            console.log('newDiets', newDiets)
            
            setState({
                ...state,
                dietsId: [...newDiets]
            });
        };

        if( dietExist === true ){
            const newDiets = state.dietsId.filter(diet => diet !== id)
            console.log('newDiets', newDiets)
            setState({
                ...state,
                dietsId: [...newDiets]
            });
        };
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
                    {state.ingredients ? state.ingredients.map((ingredient, index) => {
                        return <div key={index}>
                                <input className={s.ingredientInput} onChange={handleInputChangeIngredients} type="text" name="ingredients" id={ingredient.id} placeholder='enter ingredient' />
                                {index === state.ingredients.length - 1 ? <div onClick={() => removeIngredient(ingredient.id)}>
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
                    {state.steps ? state.steps.map((step, index) => {
                        return <div key={index}>
                                <input className={s.stepInput} onChange={handleInputChangeSteps} type="text" id={step.id} placeholder='enter step' />
                                {index === state.steps.length - 1 ? <div onClick={() => removeStep(step.id)}>
                                    <RiDeleteBin5Line fontSize="26px" color='green'/>
                                </div>: ''}
                            </div>
                    }) : ''}
                </div>
                <input className={s.imageURL} type="text" onChange={handleInputChange} name='image' placeholder='enter image URL' />
                <div className={s.diets}>
                    <div id="2" onClick={handleDiets} className={state.dietsId.includes(2) ? s.green : ""}>
                        <img src={dairyFree} alt="dairy-free" />
                        <p>Dairy free</p>
                    </div>
                    <div id="1" onClick={handleDiets} className={state.dietsId.includes(1) ? s.green : ""}>
                        <img src={glutenFree} alt="gluten-free" />
                        <p>Gluten free</p>
                    </div>
                    <div id="5" onClick={handleDiets} className={state.dietsId.includes(5) ? s.green : ""}>
                        <img src={paleo} alt="paleo" />
                        <p>Paleo</p>
                    </div>
                    <div id="8" onClick={handleDiets} className={state.dietsId.includes(8) ? s.green : ""}>
                        <img src={pescetarian} alt="pescetarian" />
                        <p>Pescetarian</p>
                    </div>
                    <div id="6" onClick={handleDiets} className={state.dietsId.includes(6) ? s.green : ""}>
                        <img src={primal} alt="primal" />
                        <p>Primal</p>
                    </div>
                    <div id="4" onClick={handleDiets} className={state.dietsId.includes(4) ? s.green : ""}>
                        <img src={vegan} alt="vegan" />
                        <p>Vegan</p>
                    </div>
                    <div id="3" onClick={handleDiets} className={state.dietsId.includes(3) ? s.green : ""}>
                        <img src={vegetarian} alt="vegetarian" />
                        <p>Vegetarian</p>
                    </div>
                </div>
                <div className={s.additional}>
                    <p id="7" onClick={handleDiets} className={state.dietsId.includes(7) ? s.green : ""}>is whole 30?</p>
                    <p id="9" onClick={handleDiets} className={state.dietsId.includes(9) ? s.green : ""}>is ketogenic?</p>
                    <p id="10" onClick={handleDiets} className={state.dietsId.includes(10) ? s.green : ""}>is fodmap friendly?</p>
                </div>
                <button type='submit'>CREATE RECIPE</button>

            </form>

        </div>
    )
};

export default CreateRecipe;