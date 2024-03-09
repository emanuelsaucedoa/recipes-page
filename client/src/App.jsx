import { Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import CreateRecipe from './views/CreateRecipe/CreateRecipe.jsx';
import RecipeDetail from './views/RecipeDetail/RecipeDetail.jsx';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createRecipe' element={<CreateRecipe/>}/>
        <Route path='/recipeDetail/:recipeId' element={<RecipeDetail/>}/>
      </Routes>
    </>
  )
}

export default App;
