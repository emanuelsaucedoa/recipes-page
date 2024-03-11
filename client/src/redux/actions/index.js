export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_RECIPE = 'GET_RECIPE';

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


