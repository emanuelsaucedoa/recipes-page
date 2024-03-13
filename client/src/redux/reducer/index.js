import { GET_ALL_RECIPES, GET_RECIPE, FILTER_BY_SEARCH, CLEAN, FILTER_DIETS, ORDER_RECIPES } from "../actions/index.js";

const initialState = {
    recipes: [],
    backupRecipes: [],
    recipe: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                backupRecipes: action.payload
            }
        case GET_RECIPE:
            return {
                ...state,
                recipe: action.payload
            }
        case FILTER_BY_SEARCH:
            return {
                ...state,
                recipes: action.payload
            }
        case CLEAN:
            return {
                ...state,
                recipes: action.payload,
                backupRecipes: action.payload
            }
        case FILTER_DIETS:
            return {
                ...state,
                recipes: action.payload
            }
        case ORDER_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        default:
            return {...state}
    }
};

export default rootReducer;