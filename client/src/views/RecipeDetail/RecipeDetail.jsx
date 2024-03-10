import s from './RecipeDetail.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import dairyFree from '../../assets/dairy-free.svg';
import glutenFree from '../../assets/gluten-free.svg';
import vegan from '../../assets/vegan.svg';
import readyInMinutes from '../../assets/readyInMinutes.svg';
import servings from '../../assets/servings.webp';
import healthy from '../../assets/healthy.svg';

const RecipeDetail = () => {
    return (
        <div className={s.superContainer}>
            <div>
                <div className={s.back}>
                    <IoMdArrowRoundBack fontSize='30px' color='green' /> <p>Back to home</p>
                </div>
            </div>
            <div className={s.container}>
                <div>
                    <h2>Cannellini bean and asparagus salad with mushrooms</h2>
                    <div className={s.healthscore}>
                        <p>Healthscore 100</p>
                        <img className={s.healthy} src={healthy} alt="" />
                    </div>
                    
                </div>
                <div className={s.diets}>
                    <img src={dairyFree} alt="" />
                    <img src={glutenFree} alt="" />
                    <img src={vegan} alt="" />
                    <p>whole30</p>
                    <p>fodmap friendly</p>
                    <p>keto</p>
                </div>
                <div className={s.summary}>
                    <img src="https://spoonacular.com/recipeImages/782585-312x231.jpg" alt="" />
                    <p>
                        Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href="https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href="https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href="https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>
                    </p>
                </div>
                <div className={s.description}>

                    <p>
                        <img src={readyInMinutes} alt="" />45 min
                    </p>
                    <p>
                        <img src={servings} alt="" />servings 2
                    </p>
                </div>
                <div className={s.ingredients}>
                    <h3>Ingredients</h3>
                    <p>- 1 1/4 cups dried cannellini (white kidney) beans (3 3/4 cups cooked)</p>
                    <p>- handful of dried curry leaves, crumbled (or 1 bay leaf)</p>
                    <p>- 1/4 cup fresh tarragon</p>
                    <p>- 1 clove garlic, minced or crushed</p>
                    <p>- juice from 1 lemon (3 tablespoons)</p>
                    <p>- 1 teaspoon grated lemon zest</p>
                    <p>- 1/2 cup olive oil</p>
                    <p>- 2 teaspoons olive oil</p>
                    <p>- fresh cracked black pepper to taste</p>
                    <p>- 1 teaspoon sea salt, or to taste</p>
                    <p>- 8 large white mushrooms, sliced</p>
                    <p>- 8 large white mushrooms, sliced</p>
                    <p>- 1 to 1 1/2 teaspoons Dijon or grain mustard, to taste</p>
                </div>
                <div className={s.steps}>
                    <h3>Steps</h3>
                    <p>- Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water. <strong>480 min</strong></p>
                    <p>- Drain and rinse, then transfer to a medium saucepan and cover with fresh water.</p>
                    <p>- Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart. <strong>60 min</strong></p>
                    <p>- Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch. <strong>6 min</strong></p>
                    <p>- Transfer to the salad bowl.Now cook the mushrooms.</p>
                    <p>- Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid. <strong>5 min</strong></p>
                    <p>- Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.</p>
                    <p>- Pour the dressing over the salad, season with salt and pepper, and toss.</p>
                    <p>- Serve at room temperature or chilled.</p>
                </div>
            </div>
        </div>
    )
};

export default RecipeDetail;