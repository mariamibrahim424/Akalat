import * as React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from 'react-router-dom';
import '../Home.css';

/**
 *
 * See the basic-react example for an example of adding and reacting to
 * changes in state and lecture 10 for details on Material-UI
 *
 * @param {object} recipesInfo
 * @param {function} viewRecipe
 * @return {object} JSX
 *
 */
export default function RecipeList(recipesInfo) {
  const recipesList = recipesInfo.recipesInfo;
  const navigate = useNavigate();
  const viewRecipe = (recipe) => {
    console.log(recipe);
    navigate('/recipe', {state: {recipe: recipe}});
  };
  return (
    <div className='recipeContainerList'>
      {recipesList.map((recipe) => (
        <span className='recipeContainer' key={recipe.title}>
          <img className='randImages' src={recipe.image} alt={''} />
          <span className='recipeTitle'>{recipe.title}</span>
          <div className='recipeIcons'>
            <span className='recipeIcon'>
              <PersonIcon></PersonIcon> {recipe.servings}
            </span>
            <span className='recipeIcon'>
              <MenuBookIcon></MenuBookIcon> {recipe.extendedIngredients.length}
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
    </div>
  );
}
