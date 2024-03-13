export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_RECIPE = 'GET_RECIPE';
export const FILTER_BY_SEARCH = 'FILTER_BY_SEARCH';
export const CLEAN = 'CLEAN';
export const FILTER_DIETS = 'FILTER_DIETS';
export const ORDER_RECIPES = 'ORDER_RECIPES';

export const getAllRecipes = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/recipes')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_RECIPES,
                    payload: data
                })
            })
    }
};

export const getRecipe = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/recipes/${id}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_RECIPE,
                    payload: data
                })
            })
    }
}

export const postRecipe = (data) => {
    fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

export const filterBySearch = (query) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/filter/search?search=${query}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: FILTER_BY_SEARCH,
                payload: data
            })
        })
    }
}

export const clean = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/recipes')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: CLEAN,
                    payload: data
                })
            })
    }
}

export const filterDiets = (data) => {
    return (dispatch) => {
        fetch("http://localhost:3000/filter/diets", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: FILTER_DIETS,
                payload: data
            })
        })
    } 
};

export const orderRecipes = (query, data) => {
    fetch(`http://localhost:3000/filter/diets${query}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: ORDER_RECIPES,
                payload: data
            })
        })
};


