import * as React from 'react';
import {useState, useEffect} from 'react';
// import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import homeImage from './images/homeImage.jpeg';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import PersonIcon from '@mui/icons-material/Person';
import Appbar from './components/AppBar';
import RecipeList from './components/RecipeList';
import './Home.css';

/**
 *
 * See the basic-react example for an example of adding and reacting to
 * changes in state and lecture 10 for details on Material-UI
 *
 * @return {object} JSX
 */
export default function Home() {
  const [recipesList, setRecipesList] = useState([]);
  // const [recipeViewed, setRecipeViewed] = useState('');
  // const navigate = useNavigate();
  // const viewRecipe = (recipe) => {
  //   // setRecipeViewed(recipe);
  //   console.log(recipe);
  //   // console.log(recipeViewed);
  //   navigate('/recipe', {state: {recipe: recipe}});
  // };

  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/recipes/random`, {
        params: {apiKey: 'c33d1c92ed8343d7b6522ddb630cdfd4', number: 15},
      })
      .then((res) => {
        setRecipesList(res.data.recipes);
      });
  }, []);

  return (
    <div>
      <Appbar></Appbar>
      <div className='homePage'>
        <img className='homeImage' src={homeImage} alt='React' />
        <div className='homeIntro'>
          <h2 style={{fontSize: '1.7vw'}} className='intro'>
            over 300,000 delicious recipes available from various cuisines
          </h2>
        </div>
      </div>
      <h2 className='explore'>Explore Recipes</h2>
      {/* <div className='recipeContainerList'>
        {recipesList.map((recipe) => (
          <span className='recipeContainer' key={recipe.title}>
            <img className='randImages' src={recipe.image} alt={''} />
            <span className='recipeTitle'>{recipe.title}</span>
            <div className='recipeIcons'>
              <span className='recipeIcon'>
                <PersonIcon></PersonIcon> {recipe.servings}
              </span>
              <span className='recipeIcon'>
                <MenuBookIcon></MenuBookIcon>{' '}
                {recipe.extendedIngredients.length}
              </span>
              <span className='recipeIcon'>
                <AccessTimeIcon></AccessTimeIcon> {recipe.readyInMinutes}
              </span>
              <span className='recipeIcon'>Serving</span>
              <span className='recipeIcon'>Ingredients</span>
              <span className='recipeIcon'>Minutes</span>
            </div>
            <button onClick={() => viewRecipe(recipe)} className='viewRecipe'>
              View Recipe
            </button>
          </span>
        ))}
      </div> */}
      <RecipeList recipesInfo={recipesList}></RecipeList>
    </div>
  );
}
