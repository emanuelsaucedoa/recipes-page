import { GET_ALL_RECIPES, GET_RECIPE } from "../actions/index.js";

const initialState = {
    recipes: [],
    recipe: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_RECIPE:
            return {
                ...state,
                recipe: action.payload
            }
        default:
            return {...state}
    }
};

export default rootReducer;